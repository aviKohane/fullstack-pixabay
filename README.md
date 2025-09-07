Fullstack Pixabay Assignment
📌 Overview

This is a fullstack application built with:

Backend: Node.js + Express

Frontend: React + Redux (Vite)

API: Pixabay API

The app displays images in a 3x3 grid with pagination and supports category selection and details view.

⚙️ Backend Setup
1. Navigate to the server
cd server

2. Install dependencies
npm install

3. Create .env file

In server/.env:

PIXABAY_KEY=25540812-faf2b76d586c1787d2dd02736
PORT=4000

4. Run the server
npm run dev


Server will start at:
👉 http://localhost:4000

Available endpoints

Health check: GET /health

Fetch images:

GET /api/images?category=sports&page=1&perPage=9

🎨 Frontend Setup (coming next)

Frontend is scaffolded with React + Redux Toolkit (Vite).
Setup instructions will be added once the frontend is connected to the backend.

🚀 Tech Stack

Node.js / Express

React + Redux Toolkit

Axios

Vite

Pixabay API