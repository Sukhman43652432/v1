import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOeKEH0FOqserH6EhUm6t_JLAVMpxQvAo",
  authDomain: "vertex-apps-e2f98.firebaseapp.com",
  projectId: "vertex-apps-e2f98",
  storageBucket: "vertex-apps-e2f98.firebasestorage.app",
  messagingSenderId: "86737190329",
  appId: "1:86737190329:web:05e94d8e6732cc32004a68",
  measurementId: "G-YD0T621TTF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
