# Rant & Heal – AI-Powered Mental Health Support Platform 💬🧠

A warm, human-first mental wellness platform that helps users express their emotions, feel heard, and connect with real help. Powered by cutting-edge AI and designed for comfort, **Rant & Heal** gives everyone a space to rant, reflect, and heal — judgment-free.

---

## 🌟 Implemented Features

### 1. Authentication
- Secure login using Clerk
- User data is safely stored and linked via Firebase
- Seamless onboarding experience

### 2. Rant Freely (Let It Go)
- Private journaling section for users to write freely
- Emotion release through unfiltered text input
- No data judgment, no analytics — just catharsis

### 3. Talk to MomoBuddy (AI Therapist)
- Real-time **voice conversations** with an AI therapist
- Built using **Google’s Gemini API** for emotionally-aware responses
- Warm, empathetic responses — no diagnosis, just support

### 4. Book Appointments with Real Therapists
- Browse and schedule appointments with professional therapists
- Select date/time and write a short note about your current situation
- Built-in calendar selection UI

### 5. Voice Communication
- Powered by **Vapi**, enabling smooth two-way voice interaction with MomoBuddy
- Transcriptions sent for AI processing in real time

### 6. Safe, Supportive UI
- ShadCN components and Tailwind CSS for accessible, responsive UI
- Smooth Framer Motion animations and transitions
- Interactive loaders and soft-glow buttons for emotional safety

---

## 🛠 Technologies Used

### Frontend:
- **Next.js 14+** – App Router and SSR
- **Tailwind CSS** – Utility-first CSS for fast styling
- **ShadCN UI** – Beautiful, accessible components

### Backend & AI:
- **Firebase Firestore** – Realtime database for storing user rants and preferences
- **Google Gemini API** – Natural, empathetic AI conversation
- **Vapi** – Real-time voice interaction between user and AI
- **Clerk** – Authentication, user management

### Hosting & Integration:
- **Vercel** – Fast deployment and serverless functions

---
## 🔐 Environment Variables
### Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

### Firebase (Admin SDK)
FIREBASE_PROJECT_ID=your_firebase_project_id

FIREBASE_PRIVATE_KEY=your_firebase_private_key

FIREBASE_CLIENT_EMAIL=your_firebase_client_email

### Gemini AI (Google Generative AI)
GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_key

### Vapi (Voice API)

NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
---

## 🚀 Getting Started
- git clone https://github.com/yourusername/rant-and-heal.git
- cd rant-and-heal
- npm install
- npm run dev

---
## 💙 Try It Out
- 🌐 Website: rantandheal.vercel.app 
