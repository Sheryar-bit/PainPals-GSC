
# 📁 PainPals – Full Project Architecture

## 🏗 Folder & File Structure

```
PainPals/
│
├── frontend/                  # React Native (Expo) App
│   ├── assets/                # Fonts, images, icons
│   ├── components/            # Reusable UI components (e.g., Card, Button)
│   ├── contexts/              # React Contexts (e.g., AuthContext, PainContext)
│   ├── screens/               # App screens (Home, LogPain, Chat, Profile)
│   ├── services/              # Firebase, Gemini, PSE connectors
│   ├── navigation/            # React Navigation (stack/tab config)
│   ├── utils/                 # Helper functions (validation, formatting)
│   ├── App.js                 # Entry point
│   ├── app.json               # Expo config
│   └── .env                   # Environment variables (API keys)
│
├── backend/                   # Python FastAPI backend
│   ├── app/
│   │   ├── main.py            # Entry point
│   │   ├── routes/            # API routes (e.g., /pain-tracker, /recommend)
│   │   ├── services/          # Logic to interface with AI, PSE, Firebase
│   │   ├── schemas/           # Pydantic models for data validation
│   │   ├── database.py        # Firebase client (optional)
│   │   └── config.py          # Settings/keys loader
│   ├── requirements.txt       # Dependencies
│   └── README.md
│
├── docs/                      # Design docs, diagrams, pitch decks
│
├── README.md
└── .gitignore
```

## ⚙️ What Each Part Does

### Frontend (React Native - Expo)
- `assets/`: Brand visuals like logos, colors, icons.
- `components/`: Reusable elements like `PainCard`, `AIResponseBubble`, `PrimaryButton`.
- `screens/`: Each screen for navigation: `HomeScreen`, `PainLogScreen`, `ChatScreen`, etc.
- `contexts/`: Manages state using React Context for user data, pain logs, preferences.
- `services/`:
  - `firebase.js`: Auth, Firestore, user data.
  - `geminiService.js`: Calls to Gemini for conversational AI.
  - `pseService.js`: Fetches product results from Programmable Search Engine.
- `navigation/`: Tab & Stack navigation setup.
- `utils/`: Functions like `formatDate()`, `groupPainLogsByDay()`.

### Backend (Python - FastAPI)
- `routes/`: API endpoints (e.g., `/pain-log`, `/recommendations`, `/user-feedback`)
- `services/`: Logic layer to interface with Gemini, search APIs, or perform ML tasks.
- `schemas/`: Defines the structure for request and response payloads using Pydantic.
- `database.py`: Optional Firebase connector to read/write pain logs from backend.
- `config.py`: API keys and secrets loader via environment variables.

## 📦 Where State Lives

### Global State (Frontend)
Handled via React Context + useReducer:
- `AuthContext`: User login/logout, current user info
- `PainContext`: Daily logs, tracked pain levels, symptom categories
- `ChatContext`: AI conversation state

### Persistent State
- Firebase Firestore:
  - `users/{uid}/pain_logs/{log_id}`
  - `users/{uid}/chat_sessions/{message_id}`
  - `users/{uid}/recommendations/`

## 🔌 How Services Connect

### Flow Example: Log Pain → Get Recommendations
1. User logs pain → Stored in Firebase
2. Frontend sends log summary to FastAPI backend
3. Backend:
   - Sends log + chat context to Gemini
   - Calls PSE for product recommendations
   - Combines AI response + products → returns to frontend
4. Frontend displays personalized suggestions

## 🔐 Security & Environment
- `.env` (Frontend & Backend)
  - `FIREBASE_API_KEY`
  - `GEMINI_API_KEY`
  - `PSE_SEARCH_ENGINE_ID`
  - `FIREBASE_AUTH_DOMAIN`
- Secure API keys using environment variables
- Protect Firestore access with Firebase rules

## ✅ Optional Enhancements
- State Management: Use Zustand instead of React Context if app grows
- Analytics: Add Firebase Analytics to track user behavior
- Notification System: Use Expo Notifications for daily check-ins
- Stripe Integration (if selling products directly)
- Cloud Functions for background tasks
