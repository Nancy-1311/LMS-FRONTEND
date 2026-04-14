# 🚀 LMS Platform (Learning Management System)

A full-stack Learning Management System (LMS) built using the MERN stack with role-based access for **Admin, Tutor, and Student**.

---

## 🌟 Features

### 👤 Authentication

- User Registration & Login
- Role-based access (Admin / Tutor / Student)
- Secure JWT Authentication

---

### 🎓 Student Features

- Browse & search tutors
- Book lessons with date & time selection
- Make payments using Stripe (test mode)
- View booked lessons
- Access recorded sessions
- View payment history

---

### 👨‍🏫 Tutor Features

- Manage tutor profile
- Set availability & pricing
- View booked lessons (only their students)
- Upload recording URLs
- Track earnings & completed lessons

---

### 🛠️ Admin Features

- View all users
- Delete users/tutors
- Activate/Deactivate users
- Change user roles
- Manage platform data

---

### 💳 Payments (Stripe)

- Secure payment integration
- Test card supported:
  - Card: 4242 4242 4242 4242
  - Expiry: Any future date
  - CVV: Any 3 digits

---

### 🎥 Additional Features

- Join Class (Video room route)
- Responsive UI
- Light/Dark mode support
- Modern gradient UI

---

## 🧪 Demo Credentials

### 👤 Admin

Email: [admin@test.com]
Password: 123456

### 👨‍🏫 Tutor

Email: [tutor@test.com]
Password: 123456

### 🎓 Student

Email: [student@test.com]
Password: 123456

---

## 🏗️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)

### Other Tools

- Stripe API
- JWT Authentication

---

## 📁 Project Structure

```
LMS/
├── client/     # React Frontend
├── server/     # Node/Express Backend
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/lms-project.git
cd lms-project
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
npm run dev
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` in server folder:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## 🚀 Usage

- Register or use demo credentials
- Test booking, payments, tutor panel, and admin features

---

## 🎯 Key Highlights

- Role-based access control
- Real-world payment integration
- Clean and modern UI
- Full CRUD operations
- Scalable architecture

---

## 📌 Future Improvements

- Live video integration (WebRTC)
- Notifications system
- Advanced analytics dashboard
- Chat system

---

## 👨‍💻 Author

Developed by Nancy

---

## ⭐ Note

This project uses **Stripe test mode**, so no real payments are processed.
