# 🌍 Bagpackers — Travel Booking Web App

A full-stack travel booking web application where users can explore destinations around the world, create an account, and book flights. Built with **HTML/CSS/JavaScript** on the frontend and a **PHP REST API** backend with **Docker** support.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## 🖥️ Live Demo

> Frontend hosted on GitHub Pages / Backend live on Render:
> **Backend API:** `https://flight-backend-bjlj.onrender.com`

---

## ✨ Features

- 🏠 **Home Page** — Hero section with destination images and scroll animations
- 🔍 **Explore Page** — Browse destinations by continent (Asia, Africa, America, Europe, etc.)
- 📋 **Booking Page** — Flight booking form with passenger details
- 👤 **Auth System** — Register / Login modal with session management
- 🎟️ **User Dashboard** — View existing bookings after login
- 📱 **Responsive Design** — Works on desktop and mobile
- 🔒 **JWT-style Session** — 30-minute session with localStorage
- 🐳 **Dockerized Backend** — Easy deployment with Dockerfile + Nginx config

---

## 🏗️ Project Architecture

```
Bagpackers (Full Stack)
│
├── 🖥️  Frontend (this repo)
│   ├── index.html              # Home page
│   ├── index.css               # Home page styles
│   ├── script.js               # Scroll animations & UI logic
│   ├── explorepage.html        # Destinations explorer
│   ├── explorepage.css
│   ├── booking-detail.html     # Flight booking form
│   ├── booking-detail.css
│   ├── booking.php             # Booking form handler
│   ├── booking.css
│   ├── user.html               # User bookings dashboard
│   └── assets/                 # Images (destinations, logos, icons)
│
└── ⚙️  Backend → github.com/Pankaj3456/flight-backend
    ├── api/
    │   ├── registration.php    # POST /api/registration.php
    │   ├── login.php           # POST /api/login.php
    │   └── ...
    ├── config/                 # DB config
    ├── index.php               # Health check endpoint
    ├── Dockerfile
    └── nginx.conf
```

---

## 🔗 Related Repositories

| Repo | Description |
|------|-------------|
| [heybhart/bharat](https://github.com/heybhart/bharat) | Frontend source |
| [Pankaj3456/flight-backend](https://github.com/Pankaj3456/flight-backend) | PHP REST API backend |

---

## 🚀 Getting Started

### Frontend Setup

```bash
# Clone the frontend repo
git clone https://github.com/heybhart/bharat.git
cd bharat

# Open in browser (no build step needed)
open index.html
```

> The frontend calls the live backend at `https://flight-backend-bjlj.onrender.com` by default.
> To use a local backend, update the API URLs in `index.html`.

---

### Backend Setup (Local)

```bash
# Clone the backend repo
git clone https://github.com/Pankaj3456/flight-backend.git
cd flight-backend

# Run with Docker
docker build -t bagpackers-backend .
docker run -p 8080:80 bagpackers-backend
```

> Backend will be available at `http://localhost:8080`

Then update frontend API URLs from:
```
https://flight-backend-bjlj.onrender.com/api/...
```
to:
```
http://localhost:8080/api/...
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/` | Health check — returns `{ status: "ok" }` |
| `POST` | `/api/registration.php` | Register a new user |
| `POST` | `/api/login.php` | Login and get session |

### Register — Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Login — Request Body
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Login — Response
```json
{
  "success": true,
  "name": "John Doe",
  "email": "john@example.com",
  "user_id": 42,
  "has_booking": false
}
```

---

## 🔐 Auth Flow

```
User clicks "Start Journey"
        ↓
Not logged in? → Auth Modal shown (Login / Register)
        ↓
On success → session saved in localStorage (30 min expiry)
        ↓
Has booking? → Redirect to user.html (dashboard)
No booking?  → Redirect to booking-detail.html (book a flight)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Fonts & Icons | Google Fonts (Poppins), Boxicons |
| Animations | ScrollReveal.js |
| Backend | PHP 8+ |
| Web Server | Nginx |
| Containerization | Docker |
| Session | localStorage (client-side, 30 min expiry) |
| Deployment | Render (backend), GitHub Pages (frontend) |

---

## 🌍 Destinations Featured

Asia · Africa · America · Europe · Dubai · Japan · Scandinavia · Switzerland · Venice · Egypt · Beach & Islands

---

## 🔮 Roadmap

- [ ] Payment gateway integration
- [ ] Email confirmation on booking
- [ ] Admin dashboard for managing bookings
- [ ] Full backend user profile page
- [ ] Search & filter destinations
- [ ] Mobile app (React Native)

---

## 👨‍💻 Authors

- **Bhart** — [@heybhart](https://github.com/heybhart) — Frontend
- **Pankaj** — [@Pankaj3456](https://github.com/Pankaj3456) — Backend & Deployment

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
