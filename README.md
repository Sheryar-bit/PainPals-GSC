# PainPals-GSC

![PainPals logo (1)](https://github.com/user-attachments/assets/463a9dec-f54d-471c-b60c-543cc1c3f32f)


![PainPals_logo__1_-removebg-preview](https://github.com/user-attachments/assets/4fec079b-6b77-4d0c-83af-2eecf79e88c2)

## Problem Statement

Chronic pain is not only a physical ailment, it is a multidimensional condition deeply impacted by a person’s daily lifestyle, habits, and environmental choices. Many individuals unknowingly worsen their chronic pain through poorly informed decisions about posture, furniture, footwear, clothing, diet, or sleep routines. There exists a critical gap in accessible, personalized, and intelligent guidance that can help users identify and adjust everyday lifestyle factors contributing to chronic pain. Traditional healthcare systems often overlook this preventative and lifestyle-centric approach, leading to prolonged suffering and reduced quality of life.

## Project Overview

PainWise is an AI-powered chronic pain management and recommendation platform designed to empower individuals in taking control of their pain through informed daily choices.
We combine pain logs, user profiles, and advanced AI (Gemini API) to generate highly personalized lifestyle recommendations—ranging from ergonomically suitable products (e.g., chairs, pillows, footwear) to customized diet and sleep strategies. The platform features:

- A conversational AI interface for symptom discussion
- Google Programmable Search for curated content and product discovery
- Continuous feedback loops to refine suggestions based on user behavior

Our goal is to move beyond symptom tracking by providing behavior-aware, proactive guidance that enhances users' daily function, independence, and long-term well-being.

## Features

### 1. Personalized AI Product Recommendations
Recommends products tailored to users’ specific pain conditions (e.g., ergonomic chairs, orthopedic pillows, posture-correcting footwear).
Suggests more suitable and condition-specific options based on individual needs, pain history, and usage feedback.

### 2. Diet & Lifestyle Guidance
Provides dietary suggestions aligned with the user's pain condition and health goals (e.g., anti-inflammatory diets), helping users manage pain through nutritional support and habit tracking

### 3. Pain & Symptom Tracking with Analytics
Users can log daily pain levels (scale or emoji-based), specify pain location, type, duration, and triggers, along with environmental or lifestyle factors.
We provide intelligent analytics and visualizations to help users identify recurring patterns and lifestyle correlations that may be contributing to their chronic pain.

### 4. AI Chatbot Assistant (Powered by Gemini API)
An intelligent assistant that engages in natural conversations with users to understand their symptoms, routines, and past logs.
It provides suggestions and answers to FAQs specifically focused on pain management, posture correction, ergonomic practices, stretching routines, and lifestyle modifications

### 5. Community Forum for Peer Support
Users can join a built-in forum to interact, share personal experiences, ask questions, and support each other in managing chronic pain more effectively.

## Tech Stack

## Frontend:
### 1. React Native
For building a cross-platform mobile app (iOS & Android) using a single codebase. It handles the UI and screen interactions.

### 2. Redux / Context API
Used for managing global app states like user authentication, pain history, theme preferences (dark/light), and AI conversation data.

### 3. Axios
For making HTTP requests from the frontend to the backend (e.g., sending image data, retrieving AI recommendations, syncing user info).

## Backend:

### 1. Language: Python
Chosen for its simplicity and strong ecosystem for AI, image processing, and backend development.

### 2. Framework: FastAPI
Fast and asynchronous web framework to build APIs quickly. It will:
- Handle requests from the frontend
- Route to AI processing functions
- Manage image uploads and communication with Gemini or Firebase

### 3. LLM: Google Gemini: 
- For analyzing user conversations and images
- Helps generate lifestyle, diet, and product suggestions based on pain data
- Works with vision API or extracted image context to provide relevant answers

### 4. Google Programmable Search Engine (PSE)
- For when the AI needs to suggest alternative products, brands, or research-backed advice
- Helps fetch real-time web results when needed

