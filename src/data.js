import HeroImage from "/assets/saty.png";

const Image = {
  HeroImage,
};

export default Image;

const Tools2 = "./assets/tools/reactjs.png";
const Tools3 = "./assets/tools/nextjs.png";
const Tools4 = "./assets/tools/tailwind.png";
const Tools6 = "./assets/tools/js.png";
const Tools7 = "./assets/tools/nodejs.png";
const Tools8 = "./assets/tools/github.png";
const Tools11 = "./assets/tools/figma.png";
const Tools16 = "./assets/tools/ts.png";
const Tools18 = "./assets/tools/vite.png";
const Tools19 = "./assets/tools/mysql.png";
const Tools1 = "./assets/tools/vscode.png";

export const listTools = [
  // ── Frontend ──────────────────────────────────────────────
  { id: 1, gambar: Tools2, nama: "React.js", ket: "Frontend Framework", dad: "100", category: "Frontend" },
  { id: 2, gambar: Tools3, nama: "Next.js", ket: "Frontend Framework", dad: "150", category: "Frontend" },
  { id: 3, gambar: Tools16, nama: "TypeScript", ket: "Language", dad: "200", category: "Frontend" },
  { id: 4, gambar: Tools6, nama: "JavaScript", ket: "Language", dad: "250", category: "Frontend" },
  { id: 5, gambar: Tools4, nama: "Tailwind CSS", ket: "Styling Framework", dad: "300", category: "Frontend" },
  { id: 6, gambar: Tools18, nama: "Vite", ket: "Build Tool", dad: "350", category: "Frontend" },

  // ── Backend ───────────────────────────────────────────────
  { id: 7, gambar: Tools7, nama: "Node.js", ket: "Runtime", dad: "400", category: "Backend" },
  { id: 8, gambar: "https://cdn.simpleicons.org/express/FFFFFF", nama: "Express.js", ket: "Web Framework", dad: "450", category: "Backend" },
  { id: 9, gambar: "https://cdn.simpleicons.org/fastapi/009688", nama: "FastAPI", ket: "API Framework", dad: "500", category: "Backend" },
  { id: 10, gambar: "https://cdn.simpleicons.org/postman/FF6C37", nama: "REST APIs", ket: "API Design", dad: "550", category: "Backend" },

  // ── AI / ML ───────────────────────────────────────────────
  { id: 11, gambar: "https://cdn.simpleicons.org/langchain/1C3C3C", nama: "LangChain", ket: "LLM Framework", dad: "600", category: "AI/ML" },
  { id: 12, gambar: "https://cdn.simpleicons.org/langchain/1C3C3C", nama: "LangGraph", ket: "Agentic AI", dad: "650", category: "AI/ML" },
  { id: 13, gambar: "https://cdn.simpleicons.org/scikitlearn/F7931E", nama: "Scikit-learn", ket: "ML Library", dad: "700", category: "AI/ML" },
  { id: 14, gambar: "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png", nama: "XGBoost", ket: "ML Library", dad: "750", category: "AI/ML" },
  { id: 15, gambar: "https://cdn.simpleicons.org/huggingface/FFD21E", nama: "Hugging Face", ket: "NLP / Transformers", dad: "800", category: "AI/ML" },
  { id: 16, gambar: "https://cdn.simpleicons.org/opencv/5C3EE8", nama: "OpenCV", ket: "Computer Vision", dad: "850", category: "AI/ML" },

  // ── Databases ─────────────────────────────────────────────
  { id: 17, gambar: Tools19, nama: "MySQL", ket: "Relational DB", dad: "900", category: "Database" },
  { id: 18, gambar: "https://cdn.simpleicons.org/postgresql/4169E1", nama: "PostgreSQL", ket: "Relational DB", dad: "950", category: "Database" },

  // ── DevOps & Cloud ────────────────────────────────────────
  { id: 19, gambar: "https://cdn.simpleicons.org/docker/2496ED", nama: "Docker", ket: "Containerization", dad: "1000", category: "DevOps" },
  { id: 20, gambar: "https://cdn.simpleicons.org/kubernetes/326CE5", nama: "Kubernetes", ket: "Orchestration", dad: "1050", category: "DevOps" },
  { id: 21, gambar: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", nama: "AWS", ket: "Cloud Platform", dad: "1100", category: "DevOps" },
  { id: 22, gambar: "https://cdn.simpleicons.org/nginx/009639", nama: "Nginx", ket: "Web Server", dad: "1150", category: "DevOps" },
  { id: 23, gambar: "https://cdn.simpleicons.org/githubactions/2088FF", nama: "GitHub Actions", ket: "CI/CD", dad: "1200", category: "DevOps" },

  // ── Testing ───────────────────────────────────────────────
  { id: 24, gambar: "https://cdn.simpleicons.org/jest/C21325", nama: "Jest", ket: "Unit Testing", dad: "1250", category: "Testing" },
  { id: 25, gambar: "https://cdn.simpleicons.org/cypress/17202C/FFFFFF", nama: "Cypress", ket: "E2E Testing", dad: "1300", category: "Testing" },
  { id: 26, gambar: "https://cdn.simpleicons.org/playwright/2EAD33", nama: "Playwright", ket: "E2E Testing", dad: "1350", category: "Testing" },

  // ── Tools ─────────────────────────────────────────────────
  { id: 27, gambar: Tools8, nama: "GitHub", ket: "Version Control", dad: "1400", category: "Tools" },
  { id: 28, gambar: Tools1, nama: "VS Code", ket: "Code Editor", dad: "1450", category: "Tools" },
];

const Proyek1 = "./assets/project/credit_risk.png";
const Proyek2 = "./assets/project/revora.png";
const Proyek3 = "./assets/project/news_credibility.png";
const Proyek4 = "./assets/project/edemy.png";
const Proyek5 = "./assets/project/ayusutra.png";
const Proyek6 = "./assets/project/stayfinder.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Default Credit Card Prediction",
    subtitle: "An ML-powered system to predict credit card payment defaults using ensemble models...",
    fullDescription: "A machine learning pipeline built to predict whether a credit card holder will default on their next payment. The system leverages XGBoost, Scikit-learn, and advanced feature engineering on real-world financial data. It includes a full preprocessing pipeline, SHAP-based explainability, and an agentic AI underwriting copilot interface, making it production-grade and interpretable for financial decision-making.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/SatyamKumarCS/Default-Credit-Card-Prediction",
    liveUrl: "https://default-credit-card.streamlit.app/",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Revora",
    subtitle: "A full-stack AI-powered platform for intelligent content generation and review...",
    fullDescription: "Revora is a full-stack AI-powered web application designed to streamline content generation and analysis. Built with React.js, Node.js, and LangChain, it integrates large language models to deliver smart, context-aware outputs. The platform features user authentication, a responsive dashboard, and real-time AI interactions, showcasing a production-ready agentic architecture for modern web products.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/SatyamKumarCS/Revora",
    liveUrl: "https://revora-frontend.onrender.com/",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "News Credibility Monitor",
    subtitle: "An NLP-driven tool for detecting fake news and assessing article credibility...",
    fullDescription: "News Credibility Monitor is an NLP-powered web tool that evaluates the authenticity and reliability of news articles. Using transformer models and machine learning classifiers, it analyzes text patterns, source quality, and semantic signals to flag potentially misleading content. The project demonstrates practical application of AI in combating misinformation through a clean, intuitive interface.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/SatyamKumarCS/news-credibility-monitor",
    liveUrl: "https://news-detector-ai.streamlit.app/",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Eduverse",
    subtitle: "An interactive e-learning platform with AI-assisted course recommendations...",
    fullDescription: "Eduverse is a modern e-learning platform built with Next.js and FastAPI, offering structured courses, quizzes, and AI-assisted learning paths. The system personalizes content recommendations based on user progress and preferences using ML models. It features a clean, responsive UI, secure authentication, and a scalable backend, making education more accessible and adaptive.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/SatyamKumarCS/Eduverse",
    liveUrl: "https://eduverse-57cc.vercel.app/",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Ayur Sutra",
    subtitle: "An Ayurveda-inspired wellness app with AI-powered health recommendations...",
    fullDescription: "Ayur Sutra is a wellness application rooted in Ayurvedic principles, enhanced with AI-driven health recommendations. Users can assess their Dosha type, receive personalized diet and lifestyle guidance, and track wellness goals. Built with React.js and a Python backend, the app bridges traditional medicine with modern technology to provide holistic, data-informed health insights.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/SatyamKumarCS/Ayur_Sutra",
    liveUrl: "https://ayur-sutra-henna.vercel.app/",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Stay Finder",
    subtitle: "A full-stack accommodation booking platform with smart search and filters...",
    fullDescription: "Stay Finder is a full-stack accommodation discovery and booking platform inspired by Airbnb. Built with the MERN stack (MongoDB, Express, React, Node), it supports property listings, advanced search filters, user authentication, and booking management. The platform features a polished UI, real-time availability updates, and a scalable REST API backend.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/SatyamKumarCS/Stay_Finde",
    liveUrl: "https://stay-finde.vercel.app/",
    dad: "600",
  },
];

export const listAchievements = [
  { id: 1, icon: "🏛️", title: "Finalist at IIIT Delhi", subtitle: "Finalist in the HackFinance Hackathon held at the prestigious IIIT Delhi." },
  { id: 2, icon: "🌍", title: "7th Place – Sustainovate", subtitle: "Secured 7th place in the Sustainovate 2025 hackathon by NexIntel Synergy." },
  { id: 3, icon: "🥉", title: "4th Place – Eonverse", subtitle: "Secured 4th place out of numerous teams in the highly competitive Eonverse Hackathon." },
  { id: 4, icon: "🏆", title: "LeetCode 1600+ Rating", subtitle: "Consistently solving medium & hard problems to maintain a top competitive programming rating." },
  { id: 5, icon: "🧠", title: "250+ LeetCode Questions", subtitle: "Mastered arrays, trees, graphs, DP, and system design algorithms." },
  { id: 6, icon: "⭐", title: "70+ GitHub Repositories", subtitle: "Maintained 70+ public repos spanning AI/ML, Full Stack, DevOps, and research." },
];
