# Dentist Appointment Booking

A web app to browse dentists and book appointments. Built with React, Node.js, Express, and MongoDB.

---

## Structure

```
dentist-appointment/
├── backend/
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   └── dentistController.js
│   ├── database/
│   │   └── db.js
│   ├── models/
│   │   ├── Appointment.js
│   │   └── Dentist.js
│   ├── routes/
│   │   ├── appointmentRoutes.js
│   │   └── dentistRoutes.js
│   ├── server.js
│   └── package.json
├── src/                  (React frontend)
└── package.json
```

---

## Setup

### 1. Install dependencies

```bash
npm install
cd src && npm install && cd ..
cd backend && npm install && cd ..
```

### 2. Create `backend/.env`

```
MONGODB_URL=mongodb://localhost:27017/dentistdb
PORT=5000
```

### 3. Run

```bash
# Terminal 1
cd backend && npm run dev:backend

# Terminal 2
cd src && npm start
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000

---

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/dentist/` | List dentists |
| POST | `/api/dentist/` | Add dentist |
| PUT | `/api/dentist/:id` | Update dentist |
| DELETE | `/api/dentist/:id` | Delete dentist |
| POST | `/api/appointment/` | Book appointment |
| GET | `/api/appointment/` | List appointments |

---

## Deployment (Render)

| Setting | Value |
|---|---|
| Root Directory | `/backend` |
| Build Command | `npm ci && npm run build:frontend` |
| Start Command | `npm start` |

Add `MONGODB_URL`, `PORT` as environment variables in the Render dashboard.
