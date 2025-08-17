// app/api/mood/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

interface MoodData {
  date: string;
  mood: number;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    // Get the current user from Clerk
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const moodData: MoodData = await request.json();
    
    // Validate the data
    if (!moodData.mood || moodData.mood < 1 || moodData.mood > 10) {
      return NextResponse.json(
        { error: 'Invalid mood value. Must be between 1 and 10.' },
        { status: 400 }
      );
    }

    // Here you would save to your database
    // Example with Prisma (uncomment and modify as needed):
    /*
    const savedMood = await prisma.mood.create({
      data: {
        userId: userId,
        mood: moodData.mood,
        date: moodData.date,
        timestamp: new Date(moodData.timestamp),
      }
    });
    */

    // For now, just log and return success
    console.log('Mood data received:', {
      userId,
      ...moodData
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Mood saved successfully!',
      data: {
        userId,
        ...moodData
      }
    });

  } catch (error) {
    console.error('Error saving mood:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the current user from Clerk
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Here you would fetch mood history from your database
    // Example with Prisma:
    /*
    const moodHistory = await prisma.mood.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: 30 // Last 30 entries
    });
    */

    // For now, return empty array
    const moodHistory: MoodData[] = [];

    return NextResponse.json({
      success: true,
      data: moodHistory
    });

  } catch (error) {
    console.error('Error fetching mood history:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}