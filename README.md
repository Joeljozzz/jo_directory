# 🗂️ jo_directory

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**jo_directory** is a full-stack directory and organizational management web application built with Node.js, Express, and PostgreSQL. It delivers secure user authentication via bcrypt, robust relational data storage, and integrated financial analytics for association and member directory tracking.

---

## ✨ Features

- 🔐 **Secure Authentication**: User credential protection and password hashing with `bcrypt`.
- 📊 **Financial Analytics (ITSA)**: Specialized analytics module for financial tracking, metrics, and reporting.
- 🗄️ **Relational Persistence**: PostgreSQL database integration leveraging the `pg` client library.
- 🌐 **RESTful Architecture**: Clean HTTP API routing with `cors` and `body-parser` middleware.
- ⚙️ **Environment-Driven Configuration**: Secure credential and environment separation with `dotenv`.

---

## 📁 Project Structure

```text
jo_directory/
├── financial_analytics_ITSA/   # Financial analytics and reporting module
├── home_page/                  # Web directory interface and frontend assets
├── jo_directoy_docs.docx       # Project documentation and specifications
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── LICENSE                     # MIT License
└── README.md                   # Repository documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) (running instance with a created database)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Joeljozzz/jo_directory.git
   cd jo_directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   DB_USER=your_postgres_user
   DB_HOST=localhost
   DB_NAME=jo_directory_db
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

---

## 💻 Usage

1. **Start the application:**
   ```bash
   node index.js
   ```

2. **Access the application:**
   - API endpoints will be accessible at `http://localhost:5000` (or your configured `PORT`).
   - Frontend and directory pages can be accessed via the `home_page/` module.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
