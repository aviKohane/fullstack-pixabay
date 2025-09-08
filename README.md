# Fullstack Pixabay Assignment

This is a fullstack application built with:

- **Backend**: Node.js + Express  
- **Frontend**: React + Redux (Vite)  
- **API**: [Pixabay API](https://pixabay.com/api/docs/)

The app displays images in a **3Ã—3 grid** with pagination and supports category selection and details view.

---

## Backend Setup

1. Navigate to the server  
   ```bash
   cd server
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Create `.env` file  
   In `server/.env`:
   ```env
   PIXABAY_KEY=25540812-faf2b76d586c1787d2dd02736
   PORT=4000
   ```

4. Run the server  
   ```bash
   npm run dev
   ```

Server will start at [http://localhost:4000](http://localhost:4000)

---

## Available Endpoints

- **Health check**  
  ```http
  GET /health
  ```

- **Fetch images**  
  ```http
  GET /api/images?category=sports&page=1&perPage=9
  ```

---

## Frontend Setup

The frontend is built with **React + Redux Toolkit** using **Vite**.

1. Navigate to the client  
   ```bash
   cd client
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. (Optional) Configure API base URL  
   By default the app calls `http://localhost:4000`.  
   If you need to change it, create `client/.env` with:
   ```env
   VITE_API_URL=http://localhost:4000
   ```

4. Run the dev server  
   ```bash
   npm run dev
   ```
   Open the URL shown by Vite (usually http://localhost:5173).

---

## Tech Stack

- Node.js / Express  
- React + Redux Toolkit  
- Axios  
- Vite  
- Pixabay API  