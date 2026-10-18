
// استبدل الاستيراد القديم بهذا الاستيراد الحديث:
import { NumericFormat } from 'react-number-format';
import "./Subtotal.css"
import { useAuth } from "./contexts/GlobalContext";
import { getBasketTotal } from "./contexts/AppReducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
    const { basket } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="subtotal">
            <NumericFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                 displayType={"text"}
    thousandSeparator={true}
    // تفصل الآلاف بفواصل //
    prefix={"$"}
/>
<button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
            
        </div>
    );
};

export default Subtotal;
