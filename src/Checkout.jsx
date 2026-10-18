
// import checkoutImg from "../images/checkoutAd.jpg";
import { useAuth } from "./contexts/GlobalContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css"
const Checkout = () => {
    const { user, basket } = useAuth();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img 
                    className="checkout-ad" 
                    src={checkoutImg} 
                    alt="checkoutImg" 
                /> */}
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout-title">Your shopping Basket</h2>

                    {basket.length > 0 ? (
                        basket.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        )) ) : (
                        <p>
                            You have no items in your basket. To buy one or more 
                            items, click "Add to basket".
                        </p>
                    )} {/* 🛠️ تم إضافة قوس إغلاق الشرط هنا */}
                </div> {/* 🛠️ تم إعادة إغلاق الـ div الداخلي الذي يحتوي على العناوين والمنتجات */}</div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;
