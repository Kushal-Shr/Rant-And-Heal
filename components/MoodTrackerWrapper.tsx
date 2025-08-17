// components/MoodTrackerWrapper.tsx
'use client';

import MoodTracker from './MoodTracker';

const MoodTrackerWrapper = () => {
  const handleSaveMood = async (moodData: any) => {
    try {
      const response = await fetch('/api/mood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moodData),
      });
      
      if (response.ok) {
        console.log('Mood saved successfully!', moodData);
      } else {
        console.error('Failed to save mood');
      }
    } catch (error) {
      console.error('Error saving mood:', error);
    }
  };

  return <MoodTracker onSave={handleSaveMood} />;
};

export default MoodTrackerWrapper;