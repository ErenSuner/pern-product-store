# PostgreStore - PERN Stack E-commerce Platform

## 🌟 Overview

PostgreStore is a full-stack e-commerce platform built with the PERN stack (PostgreSQL, Express, React, Node.js). It demonstrates a complete product management system with features like adding, updating, viewing, and deleting products. The application includes advanced features such as rate limiting, bot detection, theme customization, and responsive design.

👉 **Live Demo**: [https://pern-product-store-y3sq.onrender.com/](https://pern-product-store-y3sq.onrender.com/)

## ✨ Key Features

- **Complete CRUD Operations**: Manage products with full create, read, update, and delete functionality
- **Modern UI**: Responsive design with Tailwind CSS and Daisy UI components
- **Theme Customization**: Multiple built-in themes that persist across sessions
- **API Security**: Rate limiting and bot detection powered by Arcjet
- **Global State Management**: Efficient state management with Zustand
- **Production Ready**: Optimized for deployment with proper error handling
- **PostgreSQL Integration**: Serverless database connection with Neon Database

## 🚀 Tech Stack

### Backend
- **Node.js & Express**: Server framework
- **PostgreSQL**: Database (via Neon's serverless PostgreSQL)
- **@neondatabase/serverless**: Serverless SQL connection
- **Arcjet**: API protection with rate limiting and bot detection
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger
- **CORS**: Cross-Origin Resource Sharing middleware

### Frontend
- **React**: UI library
- **React Router**: Client-side routing
- **Zustand**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Daisy UI**: Component library for Tailwind
- **Axios**: HTTP client
- **React Hot Toast**: Toast notifications
- **Lucide React**: Icon library

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn
- PostgreSQL database (or Neon account)
- Arcjet account for API protection (optional)

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```
PORT=3000

PGUSER=your_postgres_user
PGPASSWORD=your_postgres_password
PGHOST=your_postgres_host
PGDATABASE=your_postgres_database

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pern-product-store.git
cd pern-product-store
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

3. Seed the database (optional)
```bash
node backend/seeds/products.js
```

4. Start the development server
```bash
# Start the backend server
npm run dev

# In a separate terminal, start the frontend
cd frontend
npm run dev
```

## 🚀 Deployment

The project is configured for easy deployment on platforms like Render, Vercel, or Heroku.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📚 Project Structure

```
pern-product-store/
├── backend/
│   ├── config/        # Database configuration
│   ├── controllers/   # Request handlers
│   ├── lib/           # Utilities (Arcjet setup)
│   ├── routes/        # API routes
│   ├── seeds/         # Database seeding scripts
│   └── server.js      # Main server file
├── frontend/
│   ├── public/        # Static files
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── constants/     # App constants
│       ├── pages/         # Page components
│       ├── store/         # Zustand state management
│       ├── App.jsx        # Main React component
│       └── main.jsx       # React entry point
└── package.json       # Project dependencies and scripts
```

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Neon Database](https://neon.tech/)
- [Arcjet](https://arcjet.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com/)
