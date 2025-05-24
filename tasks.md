# MVP Build Plan for PainPals

Each task below is small, testable, and focused on a single concern. Execute one task at a time and test before moving forward.

---

## 📁 Project Initialization

### 1. Create React Native (Expo) project
- **Start**: Initialize a blank Expo project.
- **End**: Project runs with default Expo splash screen.
- **Test**: `npx expo start` launches the app.

### 2. Set up folder structure
- **Start**: Create folders (`src`, `components`, `screens`, `services`, `context`, `assets`, etc.)
- **End**: Directory tree matches architecture.
- **Test**: All folders are present.

---

## 🧠 Global State Management

### 3. Create context for user & pain data
- **Start**: Create `UserContext.js` and `PainContext.js`.
- **End**: Wrap app with context providers.
- **Test**: Use dummy state to render on screen.

### 4. Add state logic (pain logs, user info)
- **Start**: Implement `useReducer` or `useState` inside context.
- **End**: Actions to set/get user data and pain logs.
- **Test**: Update state via button, render value.

---

## 🔐 Authentication

### 5. Integrate Firebase Auth
- **Start**: Set up Firebase project & install SDK.
- **End**: Register/Login with email & password.
- **Test**: Create new user and log in.

### 6. Create login/register screens
- **Start**: Build UI for login and signup.
- **End**: Auth flows navigate between screens.
- **Test**: Validate fields, show error states.

---

## 📄 Pain Logging

### 7. Create PainLog screen UI
- **Start**: Design screen with input fields (location, type, intensity, etc.)
- **End**: Input form fully functional.
- **Test**: Form prints JSON to console.

### 8. Save logs to Firebase Firestore
- **Start**: Connect form submission to Firestore.
- **End**: Logs saved under user ID.
- **Test**: Check Firebase dashboard.

---

## 💬 Conversational AI (Gemini API)

### 9. Set up Google Gemini API client
- **Start**: Use REST or SDK to connect to Gemini.
- **End**: Send text and receive response.
- **Test**: Console log Gemini reply.

### 10. Create ChatScreen
- **Start**: Basic chat UI (input box, messages).
- **End**: Send/receive messages from Gemini.
- **Test**: Message from user returns AI response.

### 11. Context-aware prompts (pain-based)
- **Start**: Append pain history to Gemini prompts.
- **End**: AI suggestions reflect user data.
- **Test**: AI refers to specific pain log.

---

## 🔍 Recommendations via PSE

### 12. Connect Google Programmable Search Engine (PSE)
- **Start**: API key + Search Engine ID setup.
- **End**: Perform product queries based on pain type.
- **Test**: Return 3 relevant product URLs.

### 13. Show product cards in UI
- **Start**: Create UI to display name, link, image.
- **End**: Cards update dynamically from API.
- **Test**: Product links are clickable.

---

## 📊 Analytics & Tracking

### 14. Create Daily Tracker UI
- **Start**: Display mood, pain level, activity.
- **End**: Daily summary shown on dashboard.
- **Test**: Use dummy data first.

### 15. Connect tracker to Firestore
- **Start**: Save daily entries to DB.
- **End**: Fetch logs for analytics.
- **Test**: View timeline of entries.

---

## 🧪 Final Testing

### 16. End-to-End Test (E2E)
- **Start**: Simulate full user journey (signup, log pain, talk to AI, get product)
- **End**: All modules interact correctly.
- **Test**: Manual walkthrough on device.

### 17. Performance testing
- **Start**: Test app on slow devices/networks.
- **End**: Optimize render and load times.
- **Test**: No major frame drops or crashes.

---

## 🚀 Launch Prep

### 18. Add splash screen and logo
- **Start**: Design and import assets.
- **End**: App shows splash and icon.
- **Test**: Confirm visual on startup.

### 19. Build and test APK
- **Start**: Run `expo build` or EAS build.
- **End**: Install APK on device.
- **Test**: All flows work outside Expo.

---

> ✅ MVP complete: All critical features for pain logging, AI chat, and recommendations functional.