# ShareKit

ShareKit is a Node.js and Express file-sharing application with user authentication, file uploads, profile pictures, storage plans, email-based file sharing, and Razorpay order creation.

## Features

- User signup and login with JWT authentication
- Password hashing with bcrypt
- Profile picture upload
- File upload, fetch, delete, download, and share
- Email sharing with Nodemailer
- Storage plan support with MongoDB
- Razorpay payment order API
- Static frontend pages served from the `view` folder

## Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- JWT
- Multer
- Nodemailer
- Razorpay
- HTML, CSS, and JavaScript frontend

## Project Structure

```text
sharekit/
├── controller/
├── middleware/
├── model/
├── storage/
├── view/
├── index.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Ajaynarera2k1/Sharekit.git
cd Sharekit
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root folder and add these values:

```env
DB_URL=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret
JWT_FILE_SECRET=your_file_share_jwt_secret
SMTP_EMAIL=your_gmail_address
SMTP_PASSWORD=your_gmail_app_password
SERVER=http://localhost:8080
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Do not commit your `.env` file to GitHub.

## Run Locally

Start the server:

```bash
node index.js
```

Open the app in your browser:

```text
http://localhost:8080
```

## API Routes

### Public Routes

```text
POST /api/signup
POST /api/login
POST /api/verify-token
GET  /api/plan
POST /api/plan
POST /api/razorpay/order
```

### Protected Routes

```text
POST   /api/upload-profile-picture
POST   /api/file
GET    /api/file
DELETE /api/file/:id
POST   /api/file/download
GET    /api/file/download
POST   /api/file/share
GET    /api/dashboard
GET    /api/storage
```

Protected routes require a valid JWT token.

## GitHub Deployment

Initialize Git and push the project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/Ajaynarera2k1/Sharekit.git
git push -u origin main
```

If the remote already exists, update it:

```bash
git remote set-url origin https://github.com/Ajaynarera2k1/Sharekit.git
git push -u origin main
```

## Notes

- The app runs on port `8080`.
- MongoDB must be connected before using the app.
- A `starter` plan should exist in the database for new user signup.
- For Gmail SMTP, use an app password instead of your normal Gmail password.

