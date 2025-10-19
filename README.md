# personal-finance-tracker
Personal Finance Tracker web application
# 💰 Personal Finance Tracker

A full-stack web application for managing personal finances, built with HTML5, CSS3, JavaScript, Node.js, and SQLite.

![Web Technologies](https://img.shields.io/badge/Web-Techologies-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-lightgrey)

## ✨ Features

- ➕ **Add Expenses**: Log expenses with category, amount, and date
- 👀 **View History**: See all transactions in a clean table
- 🗑️ **Delete Expenses**: Remove unwanted entries
- 💾 **Data Persistence**: Automatic SQLite database storage
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎯 **Simple UI**: Clean and intuitive user interface

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and forms
- **CSS3** - Responsive styling and layouts
- **Vanilla JavaScript** - DOM manipulation and API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite** - Database management

## 📁 Project Structure

```
finance-tracker/
├── server.js # Backend server and API routes
├── package.json # Project dependencies
├── package-lock.json # Dependency lock file
├── .gitignore # Git ignore rules
├── public/
│ ├── index.html # Main application page
│ ├── style.css # Styling and responsive design
│ └── script.js # Frontend logic and API integration
└── README.md # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/finance-tracker.git
   cd finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📖 How to Use

1. **Adding an Expense**
   - Fill in the category (e.g., "Food", "Transport")
   - Enter the amount
   - Select the date
   - Click "Add Expense"

2. **Viewing Expenses**
   - All expenses are displayed in the table below
   - Sorted by date (newest first)

3. **Deleting an Expense**
   - Click the "Delete" button next to any expense
   - The entry will be immediately removed

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/expenses` | Get all expenses |
| POST | `/expense` | Add new expense |
| DELETE | `/expense/:id` | Delete specific expense |

## 🎯 Syllabus Alignment

This project covers the following Web Technologies syllabus modules:

- **Module 1**: HTML5 & CSS3 (Forms, responsive design)
- **Module 2**: JavaScript (DOM manipulation, events, API calls)
- **Module 4**: Backend Development (Node.js, Express.js)
- **Module 6**: Database Integration (SQLite CRUD operations)

## 🗃️ Database Schema

```sql
CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL
);
```

## 🌐 Real-World Applications

- **Personal Budget Management** - Track daily expenses
- **Financial Awareness** - Understand spending patterns
- **Tax Preparation** - Log deductible expenses
- **Goal Tracking** - Monitor savings progress

## 👨‍💻 Developer

**R Rahul Gnani**  
- GitHub: [rg-1094](https://github.com/yourusername)
- Email: rahulgnani.r@gmail.com

## 🙏 Acknowledgments

- My Course faculty for guidance and requirements
- Node.js and Express.js communities
- SQLite for lightweight database solution

---

**⭐ Star this repository if you find it helpful!**

---

## **📋 Key Sections Included:**

✅ **Project overview** with badges  
✅ **Features list** with emojis  
✅ **Tech stack** breakdown  
✅ **Installation instructions**  
✅ **Usage guide**  
✅ **API documentation**  
✅ **Syllabus alignment**  
✅ **Database schema**  
✅ **Real-world applications**  
✅ **Developer information**  

---

## **🎯 How to Use This README:**

1. **Copy the entire content** above
2. **Create `README.md`** in your project folder
3. **Replace placeholders**:
   - `yourusername` → Your GitHub username
   - `Your Name` → Your actual name
   - `your.email@example.com` → Your email
4. **Save and commit** to GitHub
