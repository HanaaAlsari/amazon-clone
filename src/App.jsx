import { Routes, Route } from "react-router-dom";
import Header from "./Header"; // تأكد من صحة مسارات الـ Imports حسب مشروعك
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import './App.css'
function App() {
  return (
    <div className="app">
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        {/* صفحة الدفع والطلب */}
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        {/* صفحة بوابة الدفع */}
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />

        {/* صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />

        {/* صفحة الخطأ 404 عند كتابة مسار غير موجود */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
