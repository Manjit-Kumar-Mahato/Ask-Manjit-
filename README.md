# 🚀 Ask Manjit

A modern, responsive ai personal portfolio built with **React, Vite, and Tailwind CSS**. The project is designed to present projects, technical work, competitive programming achievements, development journey, and contact information through a clean, interactive interface.

The portfolio also includes **Ask Manjit**, an AI-powered assistant that allows visitors to ask questions about the information presented on the portfolio.

## 🌐 Live Demo

**Portfolio:** https://manjit-portfolio-delta.vercel.app

---

## ✨ Features

- Modern responsive portfolio UI
- Interactive navigation bar
- Hero section with animated content
- About section
- Featured projects section
- Complete projects gallery
- Project details with technology tags and GitHub links
- Competitive programming section
- Developer journey timeline
- Contact section
- EmailJS-powered contact form
- Responsive mobile layout
- Smooth animations and UI interactions
- AI-powered **Ask Manjit** assistant
- Persistent chatbot conversation during the browsing session
- Vercel production deployment

---

## 🤖 Ask Manjit — AI Portfolio Assistant

**Ask Manjit** is an AI assistant integrated into the portfolio to make the website interactive and easier to explore.

Visitors can ask questions about the information available on the portfolio, for example:

- What are the best projects?
- What technologies are used?
- Tell me about the E-Notes API project.
- What projects use Spring Boot?
- What competitive programming profiles are available?
- What is the portfolio's developer journey?
- How can I contact the developer?

### Architecture

```text
Visitor
   │
   ▼
React Portfolio
   │
   ▼
Ask Manjit UI
   │
   ▼
/api/ai
   │
   ▼
Gemini API
   │
   ▼
AI Response
   │
   ▼
Ask Manjit Chat UI
```

The Gemini API request is handled through the project's API endpoint rather than exposing the API credential directly in the client.

The Gemini API key is stored using **Vercel Environment Variables**.

---

## 🧩 Portfolio Sections

### Hero

The landing section introduces the portfolio and provides quick access to the project gallery and resume.

### About

Presents a concise overview of the developer's technical direction, interests, and background.

### Projects

Highlights selected projects with:

- Project number
- Project title
- Category
- Description
- Technology stack
- Project image
- GitHub repository

### All Projects

A dedicated projects page provides a larger gallery containing the complete project collection.

### Competitive Programming

Displays competitive programming profiles and achievements from platforms such as:

- LeetCode
- Codeforces
- CodeChef

### Developer Journey

A timeline presenting the progression of the developer's technical learning and project development.

### Contact

Provides a contact form powered by **EmailJS**, allowing visitors to send messages directly from the portfolio.

### Ask Manjit

A persistent floating AI assistant that allows visitors to interact with the portfolio using natural-language questions.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React
- React Icons

### AI

- Google Gemini API
- `@google/genai`

### Contact Integration

- EmailJS
- `@emailjs/browser`

### Deployment

- Vercel

### Development Tools

- Git
- GitHub
- npm
- VS Code

---

## 📂 Project Structure

```text
developer-portfolio/
│
├── api/
│   └── ai.js
│
├── public/
│   └── projects/
│
├── src/
│   ├── api/
│   │   └── ai.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   └── AskManjit.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── AllProjects.jsx
│   │   ├── CodingProfile.jsx
│   │   ├── Contact.jsx
│   │   ├── DeveloperJourney.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── projectData.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Manjit-Kumar-Mahato/developer-portfolio.git
```

### 2. Navigate into the project

```bash
cd developer-portfolio
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root for local development.

Example:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
GEMINI_API_KEY=your_gemini_api_key
```

### Important

Do **not** commit `.env` to GitHub.

The production Gemini API key is configured through **Vercel Environment Variables**.

---

## ▶️ Run Locally

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Lint

Run ESLint with:

```bash
npm run lint
```

---

## 🚀 Deployment

The portfolio is deployed using **Vercel**.

The production workflow is:

```text
GitHub
   ↓
main branch
   ↓
Vercel
   ↓
Production Deployment
```

Environment variables required by the production application are configured directly in the Vercel project.

---

## 🔒 Security

The project follows a few basic security practices:

- API credentials are stored in environment variables.
- `.env` is excluded from Git.
- The Gemini API key is not hardcoded into the portfolio UI.
- AI requests are routed through the `/api/ai` endpoint.
- Public client-side configuration is separated from sensitive server-side credentials.

---

## 📱 Responsive Design

The portfolio is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The Ask Manjit assistant also adapts its layout for smaller screens.

---

## 🔗 Project Repositories

The portfolio showcases multiple projects, including:

- **E-Notes API Service**  
  https://github.com/Manjit-Kumar-Mahato/Enotes-api-Service

- **Spring Boot E-Commerce Application**  
  https://github.com/Manjit-Kumar-Mahato/Springboot-ecommerce-app

- **Online Expense Tracker**  
  https://github.com/Manjit-Kumar-Mahato/Online-Expense-Tracker

- **Hospital Management System**  
  https://github.com/Manjit-Kumar-Mahato/hospital-management-system

- **Stellar Prediction Dashboard**  
  https://github.com/Manjit-Kumar-Mahato/Stellar-Project

- **Banking Management System**  
  https://github.com/Manjit-Kumar-Mahato/Banking-System

---

## 📄 License

This project is primarily maintained as a personal portfolio project.

---

<p align="center">
  Built with React, Vite, Tailwind CSS & AI.
</p>
