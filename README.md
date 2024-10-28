# 💸 Expense Tracker Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [GraphQL API](#graphql-api)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction
**Expense Tracker** is a web application designed to help users manage their expenses and income, providing insights into their financial habits. Users can add, update, and delete transactions, categorize them, and view their expense history in an intuitive interface. This project uses **Node.js**, **Express.js**, **React.js**, **MongoDB**, and **GraphQL** to provide a full-stack solution.

## Features
- 🔐 **User Authentication**: Secure user login and registration.
- 💵 **Add Expenses/Income**: Easily track your spending and income.
- 📊 **View Transactions**: Display a list of all transactions with filters.
- 🏷 **Categorization**: Assign categories to each transaction.
- 📅 **Date Filtering**: Filter transactions by date range.
- 📈 **Graphical Reports**: Visual representation of expenses over time.
- ⚙️ **GraphQL API**: Flexible and efficient data fetching with GraphQL.

## Tech Stack
### Backend:
- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Fast, unopinionated, and minimalist web framework.
- **MongoDB**: NoSQL database for storing transaction data.
- **GraphQL**: Query language for API and runtime to execute queries.

# Backend Packages
## Installation Command
```bash
npm install express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose

npm install nodemon --save-dev
```

### Frontend:
- **React.js**: Component-based frontend library for building user interfaces.
- **Apollo Client**: Manage and fetch GraphQL data from the backend.
- **Tailwind css**: Customizable React components for consistent design.

## Getting Started
To get a local copy up and running, follow these steps.

### Prerequisites
- Node.js (>= 14.x)
- MongoDB (local instance or MongoDB Atlas)
- npm (comes with Node.js)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker

## Environment Variables

In order to run this project, you will need to add a `.env` file to the `backend` directory with the following environment variables:

### Backend `.env` File:

```plaintext
MONGODB_URI=mongodb://localhost:27017/expense-tracker  # MongoDB connection URI
JWT_SECRET=your_jwt_secret_key                          # Secret key for JWT token generation
PORT=5000                                               # Port for the Express server

