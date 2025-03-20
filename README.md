# EchoSphere


EchoSphere is an anonymous discussion platform where users can engage in conversations about current and hot topics. The platform features a cyberpunk-themed UI, allowing users to take sides in discussions, view summaries, and participate in debates with potential rewards.

# EchoSphere Frontend 🔥  

### **Anonymous Debates on Trending Topics**  

EchoSphere is a cyberpunk-themed platform where users can **discuss hot topics, take sides, debate in real-time, and even place virtual bets** on the winning arguments.  

---

## **🎨 UI Theme**  
- **Dark Mode** with **gray, red, and blue neon accents**  
- **Cyberpunk Fonts & Animated Effects**  
- **Minimal yet futuristic design**  



### Backend
- Node.js
- Express.js
- MongoDB

## Project Structure

```
├── backend/
│   ├── app.js
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── fonts/
│   │   └── images/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── router.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB

### Backend Setup
1. Navigate to backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/echosphere
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Cyberpunk Theme

The UI follows a cyberpunk aesthetic with:
- Neon colors (cyan, pink, purple)
- Animated elements (glowing text, flashing letters)
- Grid backgrounds
- Futuristic form elements
- Custom font styling

## Authentication

EchoSphere offers two authentication pages:
- **Login**: For existing users
- **Register**: For new users to create an account

Both pages maintain the cyberpunk aesthetic with animated elements and neon styling.

## Developer Notes

### Tailwind CSS Configuration
- The project uses a custom Tailwind configuration for the cyberpunk theme
- The configuration is in `tailwind.config.js`
- Custom utilities are defined in `src/index.css`

### Adding New Pages
1. Create a new component in the `src/pages` directory
2. Add the route in `src/router.jsx`
3. Maintain the cyberpunk theme with utility classes

### API Integration
- API services are in `src/services`
- Authentication service is in `src/services/auth.service.js`
- Use the API utility in `src/services/api.js` for HTTP requests

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
