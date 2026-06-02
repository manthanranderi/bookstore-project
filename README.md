# 📚 Book Store Management System

A Book Store Management System built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **EJS**, and **Multer**.

The application allows users to add, view, update, and delete books along with image upload functionality.

---

## 🚀 Features

* Add New Books
* View All Books
* View Single Book Details
* Edit Book Information
* Delete Books
* Upload Book Images
* Update Book Images
* Delete Images Automatically When Book Is Deleted
* Store Data in MongoDB
* Responsive Card-Based UI
* MVC Folder Structure

---

## 🛠 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Multer
* HTML5
* CSS3

---

## 📂 Folder Structure

```txt
Book Store
│
├── controller
│   └── bookController.js
│
├── middleware
│   └── upload.js
│
├── models
│   └── bookModel.js
│
├── public
│   └── css
│       └── style.css
│
├── routes
│   └── Routers.js
│
├── uploads
│
├── screenshots
│   ├── home-page.png
│   ├── add-book.png
│   ├── edit-book.png
│   └── view-book.png
│
├── views
│   ├── add.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   └── view.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## 📸 Screenshots

### Index Page

<img width="1919" height="905" alt="Screenshot 2026-06-02 142148" src="https://github.com/user-attachments/assets/cb2428b5-6f18-42f7-a66e-3536124fd04b" />


Displays all books in card format with View, Edit, and Delete options.

---

### Add Book Page

<img width="1900" height="1215" alt="localhost_8080_add" src="https://github.com/user-attachments/assets/261b7f7c-ad7d-4535-b532-8bacde2eaf0f" />


Form to add a new book with image upload support.

---

### Mongodb database
  <img width="1349" height="658" alt="Screenshot 2026-06-02 143100" src="https://github.com/user-attachments/assets/e1e82be1-a804-441f-9caf-e55318bdaf50" />



Update book information and replace the existing image.

---

### View Book Page

<img width="1893" height="830" alt="Screenshot 2026-06-02 143037" src="https://github.com/user-attachments/assets/e55a45cc-9ae1-40f1-92cb-e6fdfcb96b59" />


Displays complete details of a selected book.

---

## 📌 Routes

| Method | Route       | Description    |
| ------ | ----------- | -------------- |
| GET    | /           | Home Page      |
| GET    | /add        | Add Book Page  |
| POST   | /insertBook | Insert Book    |
| GET    | /book/:id   | View Book      |
| GET    | /edit/:id   | Edit Book Page |
| POST   | /update/:id | Update Book    |
| GET    | /delete/:id | Delete Book    |

---

The image filename is stored in MongoDB.

Features:

* Upload image while adding a book
* Change image while editing a book
* Delete old image automatically on update
* Delete image automatically when book is deleted

---

## 🎨 UI Theme

Color Palette:

* Grey: #6e6e6d
* Soft Pink: #fad0c9
* Cream Background: #f7f4f2

The UI is designed with a modern bookstore aesthetic.

---

## 📖 Learning Outcomes

This project demonstrates:

* CRUD Operations
* MongoDB Integration
* Express Routing
* MVC Architecture
* EJS Templates
* File Upload Using Multer
* Static File Handling

---

## 👨‍💻 Author

Developed as a learning project using Node.js, Express.js, MongoDB, and EJS.

UI styling and design assistance were created with the help of AI.
