# SecureShift Backend

The backend service for **SecureShift**, a shift management platform connecting employers with security guards. This Node.js API powers the authentication, shift coordination, and messaging system across the Guard App, Employer Panel, and Admin Dashboard.

---

## 🧩 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB Atlas** (via Mongoose)
- **JWT Authentication** with 2FA support
- **RESTful API**
- **Cloud Deployment** (GCP / Docker / Kubernetes)
- **Notifications** (Guard shift updates & messaging)

---

## 📦 Project Structure

```
/secureshift-backend
├── controllers/        # Route logic
├── models/             # Mongoose schemas
├── routes/             # API endpoints
├── middleware/         # Auth, error handlers
├── utils/              # Helpers (e.g., notifications)
├── config/             # DB and env setup
├── .env                # Environment variables (ignored)
├── server.js           # Entry point
```

---

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/musahex/secureshift-backend.git
cd secureshift-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/...
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm start
```

---

## 📘 API Documentation

Coming soon via Swagger or Postman collection.

---

## 🔐 Features

- Guard & Employer registration/login
- JWT-based authentication with 2FA
- Shift posting, acceptance, and tracking
- Employer–Guard messaging
- Admin panel access to all records
- Real-time notifications (e.g., shift updates)

---

## 🧪 Testing

```bash
npm run test
```

Unit and integration tests are managed via Jest (or Mocha/Chai if used).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss changes. Follow the coding guidelines and write clear commit messages.

---

## 👥 Project Maintainers

- **Musa** – [LinkedIn]([https://www.linkedin.com/in/...](https://www.linkedin.com/in/muhammad-musa-0132a2197/) | Project Lead & Backend Developer
