# Tamsoft Introduction Site

Marketing and presentation website for Tamsoft Cloud ERP software, built with Vue 3.

## Tech Stack

- **Vue 3** + Vite
- **Tailwind CSS**
- **Vue Router** — SPA navigation
- **vue-i18n** — TR / EN language support
- **Axios** — API requests for the contact form and admin panel
- **Express.js** — REST API for content management
- **MongoDB Atlas** — Database for TR / EN content
- **Netlify** — Deployment

## Setup

**Client**

```bash
cd client
npm install
npm run dev
```

App runs at `http://localhost:5173`.

**Server**

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
MAIL_USER=your_email
MAIL_PASS=your_email_password
```

```bash
cd server
npm install
npm run startDev
```

## Project Structure

```
├── client/
│   └── src/
│       ├── views/          # Page components
│       ├── components/     # Header, Footer, etc.
│       ├── locales/        # tr.json / en.json translation files
│       ├── router/         # Vue Router definitions
│       └── services/       # API and language services
└── server/
    ├── server.js           # Entry point
    ├── seed.js             # Database seed script
    └── app/
        ├── config/
        │   └── db-config.js        # MongoDB Atlas connection
        ├── models/
        │   └── language-model.js   # TR / EN content schema
        ├── controllers/
        │   ├── language-controller.js  # Get / update translations
        │   ├── admin-controller.js     # Admin auth
        │   └── contact-controller.js  # Contact form handler
        ├── middleware/
        │   └── admin-auth.js       # JWT authentication
        ├── routes/                 # Express route definitions
        └── services/
            └── mail-sender.js      # Nodemailer integration
```

## Content Management

TR / EN content is stored in MongoDB Atlas and editable via the admin panel at `/admin`. On first run, populate the database with:

```bash
cd server
node seed.js
```
