import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface MoodData {
  date: string;
  mood: number;
  timestamp: string;
}

interface MoodTrackerProps {
  onSave?: (moodData: MoodData) => void;
}

const MoodTracker = ({ onSave }: MoodTrackerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMood, setCurrentMood] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Define emoji and mood mapping
  const emojiButtons = [
    { emoji: '😄', mood: 10, label: 'Very Happy', range: [9, 10] },
    { emoji: '😊', mood: 8, label: 'Happy', range: [7, 8] },
    { emoji: '🙂', mood: 6, label: 'Okay', range: [5, 6] },
    { emoji: '😐', mood: 4, label: 'Sad', range: [3, 4] },
    { emoji: '😢', mood: 2, label: 'Very Sad', range: [1, 2] }
  ];

  // Logic to determine which emoji to display on the slider handle
  const getEmojiForSlider = (mood: number): string => {
    const button = emojiButtons.find(item => mood >= item.range[0] && mood <= item.range[1]);
    return button ? button.emoji : '❓';
  };

  // Helper function to check if a button is "active" based on the current mood value
  const getIsButtonActive = (mood: number, range: number[]): boolean => {
    return mood >= range[0] && mood <= range[1];
  }

  const handleEmojiSelect = (item: typeof emojiButtons[0]) => {
    // When a button is selected, set the mood to the midpoint of its range
    setCurrentMood(item.range[0] + Math.floor((item.range[1] - item.range[0]) / 2));
  };

  const handleSliderChange = (value: number) => {
    setCurrentMood(value);
  };

  const handleSaveMood = async () => {
    setErrorMessage(null); // Clear any previous errors

    const today = new Date().toDateString();
    const moodData: MoodData = {
      date: today,
      mood: currentMood,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/mood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moodData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to save mood data');
      }

      setShowSuccess(true);
      
      setTimeout(() => {
        setIsVisible(false);
        setShowSuccess(false);
      }, 2000);

      console.log('Mood saved:', result.data);
    } catch (error: any) {
      console.error('Error saving mood:', error);
      setErrorMessage(error.message);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Calculate the position of the emoji on the slider (0% to 100%)
  const sliderPercentage = ((currentMood - 1) / 9) * 100;

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 font-sans">
      <div className="bg-amber-50 rounded-3xl shadow-2xl max-w-md w-full relative p-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-amber-800 hover:text-amber-900 transition-colors"
        >
          <X size={24} />
        </button>

        <h1 className="text-3xl font-semibold text-amber-800 text-center mb-8">
          How are you feeling today?
        </h1>

        <div className="flex justify-between gap-2 mb-8">
          {emojiButtons.map((item, index) => (
            <button
              key={index}
              onClick={() => handleEmojiSelect(item)}
              className={`
                w-16 h-16 rounded-full border-2 border-amber-600 bg-yellow-200 
                text-3xl flex items-center justify-center cursor-pointer 
                transition-all duration-300 hover:scale-110 hover:shadow-lg
                ${getIsButtonActive(currentMood, item.range) ? 
                  'bg-yellow-300 border-amber-700 scale-110 shadow-lg' : ''
                }
              `}
              title={item.label}
            >
              {item.emoji}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <div className="relative mb-4">
            {/* The custom emoji handle that moves with the slider */}
            <div 
              className="absolute -top-12 text-3xl transform -translate-x-1/2 transition-all duration-300"
              style={{ left: `${sliderPercentage}%` }}
            >
              {getEmojiForSlider(currentMood)}
            </div>
            
            {/* The custom-styled slider input */}
            <input
              type="range"
              min="1"
              max="10"
              value={currentMood}
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="
                w-full h-4 rounded-full appearance-none cursor-pointer
                bg-amber-200 slider-thumb-pink
              "
              style={{
                background: 'linear-gradient(to right, #fca5a5, #fcd34d, #86efac)',
                // Custom thumb style using -webkit-slider-thumb (for webkit browsers like Chrome)
                // and ::-moz-range-thumb (for Firefox)
                // This is needed to style the handle to match the image
                '--tw-bg-from': '#fca5a5',
                '--tw-bg-to': '#86efac',
                '--tw-bg-via': '#fcd34d',
              } as React.CSSProperties} // Cast to React.CSSProperties to allow custom properties
            />
          </div>
          
          <div className="flex justify-between text-amber-800 font-semibold mt-4">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        <button
          onClick={handleSaveMood}
          className="w-full bg-[#f8a38a] 
            text-amber-800 font-semibold text-lg py-4 rounded-full
            shadow-lg hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300 active:translate-y-0"
        >
          Save Mood
        </button>

        {showSuccess && (
          <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full text-center">
            Mood saved successfully! 🎉
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
