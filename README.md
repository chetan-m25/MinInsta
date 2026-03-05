# Minsta 📸  
### A Full Stack Social Media Platform

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/Framework-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![ImageKit](https://img.shields.io/badge/Storage-ImageKit-blueviolet)
![Status](https://img.shields.io/badge/Status-Production-success)

Minsta is a full stack social media web application built using a modern MERN stack architecture.  
The project focuses on implementing real world backend architecture, secure authentication systems, scalable data models, and a structured frontend application.

Minsta replicates core social media functionality including post creation, user interactions, authentication, and media uploads.

---

# 🌐 Live Deployment

Frontend (Vercel)  
https://minsta-social.vercel.app/

Backend (Render)  
https://minsta-api-server.onrender.com

---

# Project Overview

Minsta demonstrates how modern social media platforms manage authentication, content creation, and user interactions using a scalable full stack architecture.

Core platform capabilities include:

- User authentication system
- Post creation and feed generation
- Follow / unfollow functionality
- Like and save features
- Media upload handling
- Secure session management
- Context based frontend state management

The project emphasizes clean architecture, modular backend structure, and scalable frontend design.

---

# System Architecture

```
                ┌──────────────┐
                │   Frontend   │
                │ React (Vite) │
                └──────┬───────┘
                       │
                       │ API Requests
                       ▼
               ┌───────────────┐
               │   Node.js API │
               │  Express App  │
               └──────┬────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
     MongoDB       ImageKit        JWT
 (Users & Posts)  (Media CDN)   (Auth Tokens)
        │
        ▼
   Social Interaction System
```

### Architecture Explanation

- **React frontend** communicates with backend APIs
- **Express server** handles authentication, posts, follows, and interactions
- **MongoDB** stores users, posts, and relationship data
- **ImageKit** stores uploaded images
- **JWT authentication** secures user sessions

---

# Backend Architecture

The backend follows a **controller based architecture** for scalability and maintainability.

Structure layers:

```
routes → API endpoints
controllers → business logic
models → database schemas
middleware → authentication & error handling
config → database connection
```

### Folder Structure

```
Backend/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── post.controller.js
│   │   └── follow.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── uploadError.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── post.model.js
│   │   ├── follow.model.js
│   │   ├── like.model.js
│   │   └── save.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── post.routes.js
│   │   └── follow.routes.js
│   │
│   └── app.js
│
├── server.js
└── .env
```

---

# Authentication System

Minsta implements a secure authentication system using JWT.

Features include:

- User registration
- Secure login system
- Password hashing using SHA-256
- JWT based authentication
- Token stored in cookies
- Protected API routes
- User verification middleware

Security improvements include:

- No plain text password storage
- Token expiration support
- Middleware based route protection

---

# Database Design

The application uses MongoDB with Mongoose models.

### Models Used

**User**
: Stores user credentials and profile information.

**Post**
: Stores user generated posts and media.

**Follow**
: Maintains follow relationships between users.

**Like**
: Tracks user likes on posts.

**Save**
: Stores saved posts for users.

This structure allows:

- Feed generation
- Social interactions
- Efficient relational modeling
- Scalable expansion

---

# Frontend Architecture

The frontend follows a **feature based architecture** to maintain scalability.

```
Frontend/
│
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   │
│   │   ├── posts/
│   │   │   ├── components/
│   │   │   ├── context/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   │
│   │   └── shared/
│   │       ├── components/
│   │       └── styles/
│   │
│   ├── App.jsx
│   ├── app.routes.jsx
│   └── main.jsx
```

---

# Frontend Concepts Implemented

- React Context API for state management
- Custom hooks (useAuth, usePost)
- Centralized API services
- Protected routes
- Feature based modular structure
- SCSS modular styling

---

# Core Functional Flow

## User Registration
1. User submits credentials
2. Backend hashes password
3. JWT token generated
4. Token stored in cookie

## Login
1. User submits login credentials
2. Password validation occurs
3. JWT token generated
4. User session established

## Post Creation
1. Authenticated user uploads post
2. Media uploaded to ImageKit
3. Post stored in MongoDB
4. Feed updates dynamically

## Follow System
Users can follow and unfollow other users.

Relationships are stored using the Follow model.

## Like & Save System

Users can:

- Like posts
- Save posts
- Retrieve saved posts later

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- SCSS
- Context API
- Custom Hooks

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser

### Media Storage
- ImageKit CDN

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Key Learning Outcomes

While building Minsta, the following concepts were applied and strengthened:

- Full stack system architecture
- Secure authentication systems
- REST API design
- Controller based backend structure
- Context API state management
- Feature based frontend architecture
- Media upload handling
- Cloud deployment workflows
- Production ready project structure

---

# Final Note

Minsta represents a learning driven full stack social media platform built with a focus on scalable architecture, secure authentication, and modular project structure.

The project demonstrates practical implementation of real world backend systems and modern frontend application design.
