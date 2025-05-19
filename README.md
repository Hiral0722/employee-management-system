# 🧑‍💼 Employee Management System (EMS)

## 📌 Project Overview

A Task Management System built with the MERN stack and MySQL that supports role-based access control. This application helps organizations streamline task assignment, progress tracking, and productivity management for Admin, HR, and Employee roles.

---

## 🚀 Features

- 🔐 Secure Login with Role-Based Access (Admin, HR, Employee)
- 👥 Employee Profile Management
- 📅 Attendance Logging with Time In/Out
- 📝 Task Creation, Assignment, and Tracking
- 👨‍💼 HR/Managers can assign tasks to employees
- 📅 Set Deadlines and Priorities
- 📌 Task Status: Pending, Completed
- 📱 Responsive UI for all devices

---

## 🛠️ Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Database     | MySQL, Sequelize ORM   |
| Authentication | JWT, bcrypt          |

---

## 👥 User Roles and Permissions

| Role     | Permissions |
|----------|-------------|
| Admin    | Full Access: Add users, assign tasks, view all progress |
| HR       | Assign tasks, update tasks, view employees’ tasks       |
| Employee |  Assign tasks junior,View assigned tasks, update task status|


## 🧪 Steps to Run the Project Locally
Follow these steps to get the full-stack application up and running on your local machine:

## 🔧 1. Clone the Repository
``` base
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```
## ⚙️ 2. Set Up the Backend
``` base
cd backend
npm install
node index.js
```
## 🖥️ 3. Set Up the Frontend
```base
cd frontend
npm install
npm start
```

## This will start the React app on http://localhost:3000.

## 🗄️ 4. Set Up the Database
Open MySQL or any SQL client.<br>
Create a new database<br>
Import the provided SQL schema from backend/employ.sql.

## 🖼️ Screenshots

![home](https://github.com/user-attachments/assets/5bbd940c-7cce-4f1a-a76d-23d89316f2dc)




