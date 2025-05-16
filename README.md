# PainPals-GSC

![PainPals logo (1)](https://github.com/user-attachments/assets/463a9dec-f54d-471c-b60c-543cc1c3f32f)


## ⚠️ Problem Statement

Chronic pain is not only a physical ailment, it is a multidimensional condition deeply impacted by a person’s daily lifestyle, habits, and environmental choices. Many individuals unknowingly worsen their chronic pain through poorly informed decisions about posture, furniture, footwear, clothing, diet, or sleep routines. There exists a critical gap in accessible, personalized, and intelligent guidance that can help users identify and adjust everyday lifestyle factors contributing to chronic pain. Traditional healthcare systems often overlook this preventative and lifestyle-centric approach, leading to prolonged suffering and reduced quality of life.

### 📝Pre-App Development Survey

![gender](https://github.com/user-attachments/assets/0653f5bb-6fa2-4529-a432-62aa215634bc)

![contribution](https://github.com/user-attachments/assets/38f6e321-844a-411a-8f00-30ff43ad1297)

![frequency](https://github.com/user-attachments/assets/4637c21f-1126-43cb-89d7-79f2ea98cc2a)

According to multiple surveys:


![age](https://github.com/user-attachments/assets/bb96819d-f405-43f9-826d-330703779c78)


- 24.3% of U.S. adults (1 in 4) experience chronic pain.
- 8.5% suffer from high-impact chronic pain (HICP), which severely limits daily activities.
- Trend: Up from 20.4% in 2019, indicating a growing crisis

Source: CDC 2023 Report: [CDC Chronic Pain Statistics](https://www.cdc.gov/nchs/products/databriefs/db518.htm)

The researchers used data from studies conducted between 2013–2023 that included 347,468 adult patients with chronic pain from 50 countries. The average age of the patients was 52. A total of seven depression and anxiety disorder symptoms were studied in the patients.

Of the seven depression and anxiety disorder symptoms, researchers discovered that the highest rates shown in patients with chronic pain were from clinical symptoms of depression and clinical symptoms of anxiety at 39% and 40% respectively. 

Source: Worldwide Study Finds High Rates of Depression and Anxiety in People with Chronic Pain: [Johns Hopkins Medicine](https://www.hopkinsmedicine.org/news/newsroom/news-releases/2025/03/worldwide-study-finds-high-rates-of-depression-and-anxiety-in-people-with-chronic-pain)


![pain status](https://github.com/user-attachments/assets/17efd648-4854-4de0-8e48-8ce511329e40)

- 61.4% of adults with chronic pain in 2019 still had it in 2020, showing high chronicity.
- 14.9% of those with nonchronic pain in 2019 developed chronic pain by 2020.
- Only 6.3% of pain-free individuals in 2019 developed new chronic pain.
- Just 1.4% progressed to high-impact chronic pain (HICP).
- Chronic pain incidence (52.4 cases per 1,000 person-years) was significantly higher than:
    - Diabetes (7.1/1,000 PY)
    - Depression (15.9/1,000 PY)
    - Hypertension (45.3/1,000 PY).

Source: Estimated Rates of Incident and Persistent Chronic Pain Among US Adults, 2019-2020: [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC10189566/)


### 🎥 Demo Video

[Watch the video](https://www.youtube.com/watch?v=EeYeeCv_dgA)

### 🎯UN's Sustainable Development Goals in Focus

![sgdd](https://github.com/user-attachments/assets/30f96156-0bbb-48c2-bbc9-540262a3f8e0)

We're aligning with SDG 3: Good Health and Well-being because our app focuses on improving the quality of life for individuals suffering from chronic pain. By offering personalized, AI-driven recommendations and lifestyle insights, the app promotes better health management, early identification of harmful habits, and informed decision-making, supporting preventive care and enhanced well-being for all.

## Project Overview

PainPals is an AI-powered chronic pain management and recommendation platform designed to empower individuals in taking control of their pain through informed daily choices.
We combine pain logs, user profiles, and advanced AI (Gemini API) to generate highly personalized lifestyle recommendations—ranging from ergonomically suitable products (e.g., chairs, pillows, footwear) to customized diet and sleep strategies. The platform features:

- A conversational AI interface for symptom discussion
- Google Programmable Search for curated content and product discovery
- Continuous feedback loops to refine suggestions based on user behavior

Our goal is to move beyond symptom tracking by providing behavior-aware, proactive guidance that enhances users' daily function, independence, and long-term well-being.

## ⚙️Features

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

## 👨🏻‍💻Tech Stack

## 🧑‍💻 Our Tech Stack

 <p align="center">
  <img src="https://github.com/user-attachments/assets/1f4075cf-ab4b-4fd2-ab9d-b3c90d1285e4" width="120"/>
  <img src="https://github.com/user-attachments/assets/48fcce85-7c8d-4ac9-a20e-6f8055eebb48" width="120"/>
  <img src="https://github.com/user-attachments/assets/e5a17a9f-6378-4ecc-9d2a-23cf08e97cae" width="120"/>
  <img src="https://github.com/user-attachments/assets/98d05f2b-6e73-434f-af09-a343148005e4" width="120"/>

</p>

<p align="center">
  Gemini &nbsp;|&nbsp; React Native &nbsp;|&nbsp; Google PSE &nbsp;|&nbsp; Firebase &nbsp;
</p>


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



<h2 align="center">🌐Team PainPals</h2>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/ShanzayKn" target="_blank">
      <img src="https://github.com/user-attachments/assets/564be01c-786b-49e0-851b-e78a2ce7c181" width="150px" alt="Shanzay Khan"/>
      </a>
      <br>
      <br>
      <i>DHA Suffa University</i>
    </td>
    <td align="center">
      <a href="https://github.com/Sheryar-bit" target="_blank">
      <img src="https://github.com/user-attachments/assets/b5509c09-3f95-4eda-893d-8d6e28431c74" width="150px" alt="Sheryar Ali"/>
      </a>
      <br>
      <br>
      <i>DHA Suffa University</i>
    </td>
    <td align="center">
      <a href="https://github.com/sannanumer2003" target="_blank">
      <img src="https://github.com/user-attachments/assets/c5e42784-cabf-4783-99d7-f3cd356df02b" width="150px" alt="Sannan Umer"/>
      </a>
      <br>
      <br>
      <i>DHA Suffa University</i>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/ca28b549-5f83-46d1-bf69-d62db928e2ed" width="150px" alt="Somil Daswani"/>
      <br>
      <br>
      <i>DHA Suffa University</i>
    </td>
  </tr>
</table>
