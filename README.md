# Marketing Data Hub

Marketing Data Hub is a full-stack application designed to centralize, process, and visualize marketing data. It provides a backend API for data ingestion and a Next.js dashboard frontend for analytics and reporting.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch and store marketing data via APIs
- ETL pipeline for data processing
- Dashboard with interactive analytics
- GraphQL support for advanced queries
- Responsive Next.js frontend for data visualization

## Tech Stack

**Backend:**

- Node.js & TypeScript
- Express / Custom server
- GraphQL
- MySQL or PostgreSQL (configurable)
- REST API endpoints

**Frontend Dashboard:**

- Next.js 13+
- React & TypeScript
- Tailwind CSS
- Client-side API integration

**Dev Tools:**

- ESLint & Prettier
- Vite / Next.js dev server
- Git & GitHub

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Git

### Installation

**1. Clone the repository:**

git clone git@github.com:dianamacias01218/Marketing-Data-Hub.git
cd marketing-data-hub

**2.Install backend dependencies:**

cd backend
npm install

**3.Install dashboard dependencies:**

cd ../dashboard
npm install

**4.Configure environment variables:**

Create .env files for backend and frontend as needed.

Example variables: DB_HOST, DB_USER, DB_PASS, API_KEY, etc.

## Running the Project

**Backend:**

cd backend
npm run dev

**Frontend Dashboard:**

cd dashboard
npm run dev

Open your browser at http://localhost:3000 for the dashboard.

## Folder Structure

marketing-data-hub/
├── backend/        # Backend server, APIs, ETL scripts
├── dashboard/      # Frontend Next.js dashboard
└── README.md
