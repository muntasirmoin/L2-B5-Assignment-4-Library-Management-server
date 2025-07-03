<!-- git add .
git commit -m"style added"
git push origin main -->

<h1 align="center">📚 Library Management System Server 📚</h1>
<h3 align="center">Develop a Library Management System using Express, TypeScript, and MongoDB (via Mongoose). </h3>

<p align="center">
  A full-featured RESTful API for managing books & borrowing in a library.
</p>

## 📖 Overview

This project is managing a library system. It supports operations like adding, updating, deleting, and retrieving books, as well as borrowing books also tracking books & borrow records.

---

## ✅ API Overview

| Sl  | Method | Endpoint           | Description             |
| --- | ------ | ------------------ | ----------------------- |
| 1   | POST   | /api/books         | Create a new Book       |
| 2   | GET    | /api/books         | Get all book            |
| 3   | GET    | /api/books/:bookId | Get book by id          |
| 4   | PUT    | /api/books/:bookId | Update an existing book |
| 5   | DELETE | /api/books/:bookId | Delete a book           |
| 6   | POST   | /api/borrow        | Create Borrow a book    |
| 7   | GET    | /api/borrow        | Borrowed books summary  |

---

## 🚀 Features

- **1. 📚 Create a Book**

  - Add a new book to the library book collection.

- **2. 🔍 Get All Books**

  - Retrieve a list of books. Supports filtering, sorting, and limiting.

- **3. 🔍 Get Book by ID**

  - Get detailed information of a single book.

- **4. ✏️ Update Book**

  - Update book information like the number of copies.

- **5. ❌ Delete Book**

  - Remove a book from the book collection.

- **6. 📊 Borrow a Book**

  - Record a borrowing book, update available status, deduct book copies base on borrow quantity .

- **7. 📊 Borrowed Books Summary**
  - View total quantities borrowed per book, with book titles and isbn using aggregation.

---

## 📂 Structure Overview

src/ </br>
│ </br>
├── app/ </br>
│ ├── controller/ </br>
│ │ ├── books.controller.ts </br>
│ │ └── borrow.controller.ts </br>
│ │ </br>
│ ├── interface/ </br>
│ │ ├── books.interface.ts </br>
│ │ └── borrow.interface.ts </br>
│ │ </br>
│ ├── middlewares/ </br>
│ │ ├── notFoundHandler.ts </br>
│ │ └── globalErrorHandler.ts </br>
│ │ </br>
│ ├── model/ </br>
│ ├── books.model.ts </br>
│ └── borrow.model.ts </br>
│ </br>
│ </br>
├── config/ </br>
│ └── index.ts </br>
│ </br>
├── app.ts </br>
└── server.ts </br>

## 🛠️ Local Setup Instructions

Follow the steps below to set up and run the project locally

### 📦 Installation Steps

1. **Clone the Repository**

   ```bash

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create Environment Variables File**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   DATABASE_URL=database_url
   ```

   > ⚠️ Replace the `DATABASE_URL` with MongoDB connection string.

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

   You should see output like:

   ```
    Library Management Connected to mongodb using mongoes
    Library Management Running on port 5000
   ```

### 🔗 API Base URL

    ```
        http://localhost:5000/
    ```

## Submission

- **GitHub Repository Link:**  
  [GitHub Repo] ()

- **Live Deployment Link:**  
  [Live Demo] ()
