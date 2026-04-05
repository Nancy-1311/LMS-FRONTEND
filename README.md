# Learning Management System (LMS)

A full-stack LMS platform built using the **MERN stack** that connects students with tutors for online learning, scheduling, and lesson management.

# Features

## Authentication

- User Registration (Student / Tutor)
- Secure Login (JWT based)
- Role-based access control

## Tutor Features

- Tutor profile creation (auto on register)
- Update profile (bio, experience, expertise)
- Set availability slots
- Manage lessons
- Earnings dashboard

## Student Features

- Browse and search tutors
- Book lessons
- View booked lessons
- Reschedule / cancel lessons
- Payment tracking
- Leave reviews & ratings

## Booking System

- Create booking
- Reschedule booking
- Cancel booking

## Payments

- Payment integration (Stripe / mock)
- Payment history tracking

## ⭐ Reviews

- Add ratings & feedback
- Display tutor ratings

# Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Netlify (frontend), Render (backend)

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd LMS
```

## 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

# 🔑 Environment Variables (`server/.env`)

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_key
```

# API TESTING (Postman)

## 🔹 1. Register User

**POST** `/api/auth/register`

````json
{
  "name": "Test User",
  "email": "test@mail.com",
  "password": "123456",
  "role": "tutor"
}

## 🔹 2. Login

**POST** `/api/auth/login`

```json
{
  "email": "test@mail.com",
  "password": "123456"
}
````

👉 Copy `token`

## 🔹 3. Get Tutor Profile

**GET** `/api/tutors/me`

Headers:

```
Authorization: Bearer <token>
```

## 🔹 4. Update Tutor Profile

**PUT** `/api/tutors/me`

````json
{
  "bio": "Expert Teacher",
  "experience": "5 years",
  "expertise": "Math"
}

## 🔹 5. Get All Tutors

**GET** `/api/tutors`

## 🔹 6. Create Booking

**POST** `/api/bookings`

```json
{
  "tutorName": "Test User",
  "time": "10:00 AM",
  "price": 500
}

## 🔹 7. Get Bookings

**GET** `/api/bookings`

## 🔹 8. Reschedule Booking

**PUT** `/api/bookings/:id/reschedule`

```json
{
  "newTime": "2:00 PM"
}

## 🔹 9. Delete Booking

**DELETE** `/api/bookings/:id`

## 🔹 10. Add Review

**POST** `/api/reviews`

```json
{
  "tutorId": "TUTOR_ID",
  "rating": 5,
  "comment": "Excellent teaching"
}

## 🔹 11. Earnings

**GET** `/api/payment/earnings`

#  Frontend Testing (UI)

##  Authentication

* Register as Student / Tutor
* Login and verify redirection

## Tutor Dashboard

* View profile
* Add availability
* Update profile
* Check earnings

##  Student Dashboard

* Browse tutors
* Search/filter tutors
* Book lesson

##  Lesson Management

* View "My Lessons"
* Reschedule lesson
* Cancel lesson

##  Payment

* Complete booking flow
* Verify payment success
* Check payment history

## ⭐ Reviews

* Add review after lesson
* Verify rating display

# Testing Flow (Recommended)

1. Register as Tutor
2. Login → Verify tutor dashboard
3. Add availability
4. Register/Login as Student
5. Search tutor
6. Book lesson
7. Check My Lessons
8. Reschedule / Cancel
9. Add Review
10. Check Tutor Earnings

#  Important Notes

* Tutor profile is linked with logged-in user
* Authorization token required for protected routes
* Backend must be running before frontend
* Ensure correct role-based access

#  Deployment

* Frontend → Netlify
* Backend → Render
* MongoDB → Atlas

# Conclusion

This LMS platform demonstrates:

* Full-stack development (MERN)
* Role-based authentication
* Real-time booking system
* Payment integration
* Scalable architecture

# Author
Ms. Nancy


````
