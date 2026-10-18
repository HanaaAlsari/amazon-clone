

import loginLogo from "./images/icons/logo.jpg";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase.jsx";
import "./login.css"
const Login = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // 🛠️ تأكد من وجود هذا السطر داخل المكون وقبل الدوالي:
const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    // هاي دالة من Firebase Authentication:
    // نتحقق من الإيميل وكلمة المرور
    // إذا صح ⬅ تسمح بالدخول //
    // إذا غلط ⬅ ترجع خطأ //
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    // هاي دالة من Firebase Authentication وظيفتها:
    // نبعت للموقع حساب جديد بـ email, password
    // وبيرجع حساب مسجل في Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={loginLogo} alt="login-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          {/* نص الشروط أو الوصف المكمل أسفل النموذج */}
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login-registerBtn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
