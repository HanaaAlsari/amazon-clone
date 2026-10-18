import { Link } from "react-router-dom";
import { useAuth } from "./contexts/GlobalContext";
// استبدل الاستيراد القديم بهذا الاستيراد الحديث:
import { NumericFormat } from 'react-number-format';
import "./Payment.css"
import { getBasketTotal } from "./contexts/AppReducer";
// استبدل الاستيراد القديم بهذا الاستيراد الحديث:



const Payment = () => {
  const { user, basket } = useAuth();

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* Delivery Address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Alexandria, Egypt</p>
          </div>
        </div>
        {/* Review Items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <NumericFormat
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <NumericFormat
            // eslint-disable-next-line no-unused-vars
            renderText={(value) => <h3>order total:(value)</h3>}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
          <button>Bay now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
