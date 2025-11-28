E-Commerce REST API – Node.js, Express, PostgreSQL, Cloudinary

A fully featured E-commerce REST API built using Node.js, Express.js, PostgreSQL (Sequelize ORM), Cloudinary image upload, JWT authentication, Swagger documentation, and Jest testing.
This API supports product management, category management, filtering with pagination, cart system with persistent pricing, and order management.

   Live API & Documentation

🔹 Live API Base URL: https://ailoitte-assignment-server-5.onrender.com
🔹 Swagger Documentation: https://ailoitte-assignment-server-5.onrender.com/api-docs
🔹 GitHub Repository: https://github.com/Janna007/Ailoitte-Assignment-Server/


1. Clone Repository
git clone https://github.com/Janna007/Ailoitte-Assignment-Server.git


2. Install Dependencies
npm install

3. Environment Variables

Create a .env.dev file:
PORT=
NODE_ENV=
CORS_ORIGIN=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
ACEESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
ADMIN_USERNAME=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

BASE_URL=


Running Tests
Create a .env.test file:
npm run test
