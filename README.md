# 🛒 Inventory Management Backend

This is the backend for the Inventory Management System, built using **Node.js, Express, and MongoDB**. It provides APIs for managing products and user authentication.

## 🚀 Features
- User authentication (Register/Login)
- CRUD operations for products
- Protected routes for admin actions
- JWT-based authentication
- MongoDB integration with Mongoose

---

## 📂 Project Structure
```
inventory-backend/
│── controllers/         # Route handlers
│   ├── productController.js
│   ├── userController.js
│── middleware/          # Authentication & error handling middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│── models/              # Database models
│   ├── productModel.js
│   ├── userModel.js
│── routes/              # API routes
│   ├── productRoutes.js
│   ├── userRoutes.js
│── utils/               # Utility functions
│   ├── generateToken.js
│── .env                 # Environment variables
│── server.js            # Entry point of the application
│── package.json         # Dependencies & scripts
│── README.md            # Documentation
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sumeetbidhan/inventory-backend.git
cd inventory-backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root folder and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5001
```

### 4️⃣ Start the Server
```bash
npm start
```
Server should start on `http://localhost:5001`.

---

## 📌 API Endpoints

### 🛍️ Product Routes
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | /api/products        | Get all products             |
| GET    | /api/products/:id    | Get a single product         |
| POST   | /api/products        | Create a product (Auth)      |
| PUT    | /api/products/:id    | Update a product (Auth)      |
| DELETE | /api/products/:id    | Delete a product (Admin)     |

### 👤 User Routes
| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | /api/users/register  | Register a new user          |
| POST   | /api/users/login     | Login & receive a token      |

---

## 🛠️ Testing with Postman
1️⃣ **Register a user** → `POST /api/users/register`  
2️⃣ **Login** → `POST /api/users/login`  
3️⃣ **Copy the token** from the login response.  
4️⃣ **Use the token for protected routes in Postman** by adding it to the **Authorization** header as `Bearer <your_token>`.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Feel free to fork the project, open issues, and submit pull requests. 

---

## 📧 Contact
For any inquiries, reach out to:  
**Sumeet Bidhan**  
📩 [sumeetbidhanwork@gmail.com](mailto:sumeetbidhanwork@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/sumeetbidhan/) | [GitHub](https://github.com/sumeetbidhan/)
