# 🎮 Hanoi Arena

A full-stack Tower of Hanoi multiplayer web application optimized for high concurrency, real-time gameplay, and competitive tournaments.

🌐 Live Demo: https://hanoi-arena.vercel.app/  

---

## 🚀 Project Overview

**Hanoi Arena** is an interactive web-based Tower of Hanoi platform where players can compete, track progress, and participate in tournaments.

The system is optimized to support **180+ concurrent players** with smooth real-time gameplay and leaderboard updates.

It features user authentication, admin controls, tournament brackets, and live statistics.

---

## 🧠 Key Highlights

✅ Optimized to handle **180+ concurrent players**  
✅ Real-time gameplay using Socket.IO  
✅ Secure authentication system  
✅ Global leaderboard  
✅ Admin dashboard  
✅ Tournament & bracket system  
✅ Responsive UI for desktop and mobile  
✅ Cloud deployment

---

## 🎯 Features

### 🎮 Gameplay
- Interactive Tower of Hanoi game
- Configurable number of disks
- Valid move checking
- Move tracking and timing

### 👤 Authentication
- User registration
- Secure login
- Session handling

### 🏆 Leaderboard
- Global rankings
- Fastest completion time
- Live updates

### 🛠 Admin Panel
- Manage game settings
- Update disk limits
- Monitor players
- Control tournaments
- Qualify players for next round
- Add rounds

### ⚡ Performance & Scalability
- Backend optimized for concurrent users
- Efficient Socket.IO event handling
- Reduced API latency
- Stress-tested for 180+ players

---

## 🧱 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React, CSS |
| Backend     | Node.js, Express |
| Real-Time   | Socket.IO |
| Database    | MySQL / MongoDB (based on config) |
| Deployment  | Vercel (Frontend), Railway (Backend) |

---

## 📁 Project Structure
```
Hanoi-Arena/
│
├── hanoi-frontend/ # React frontend
├── hanoi-backend/ # Node.js backend
├── stress_test.js # Load testing script
├── package.json
└── README.md
```
