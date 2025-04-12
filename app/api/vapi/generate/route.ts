import { db } from "@/firebase/admin";
import {google} from "@ai-sdk/google"
import {generateText} from 'ai';
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    return Response.json({success: true, data: 'Thank You!'}, {status: 200});
}

export async function POST (request: Request) {
    const {emotional_state, problem, cause, preference} = await request.json();

    try {
        const { text: conversation } = await generateText({
            model: google('gemini-2.0-flash-001'),
            prompt: `You are an empathetic and non-judgmental AI psychologist named MomoBuddy. Your goal is to listen with care, validate emotions, and help the user gently explore their feelings and thoughts. Do not offer clinical diagnoses or medical advice.

                The user is currently feeling: ${emotional_state}  
                They are struggling with: ${problem}  
                They believe this is caused by: ${cause}  
                They prefer responses that are: ${preference}  

                Keep your tone warm, human-like, and calm. Ask open-ended questions to encourage reflection and expression. Avoid robotic phrasing and never minimize the user's experience.

                If the user seems in distress, provide helpful and supportive suggestions in a gentle tone. Offer solutions wherever possible, and carefully suggest reaching out to a professional or a crisis support resource without sounding alarming.

                The conversation is going to be read by a voice assitant so do not use "/" or "*" or any other special characters which might break the voice assistant.

                Start the session with a warm welcome:

                Hi there, I'm Momo — your comfort buddy. You can tell me anything. How are you feeling today?`
        })

        const userId = await auth();

        if (!userId) {
            return new Response('Unauthorized', { status: 401 });
          }

        const call = {
            userId: userId, 
            emotionalState: emotional_state, 
            problem: problem, 
            cause: cause, 
            preference: preference, 
            response: [conversation], 
            createdAt: new Date().toISOString(),
        }

        await db.collection('calls').add(call);

        return Response.json({ success: true, response: conversation }, { status: 200 });

    } catch (error) {
        console.error(error);

        return Response.json({success: false, error}, {status: 500});
    }
} 