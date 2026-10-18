import "./Products.css"
import starIcon from "./images/icons/star.png";
import { useAuth } from "./contexts/GlobalContext";
import shortid from 'shortid';
const Products = ({ image, price, rating, title }) => {
  const { dispatch } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: shortid.generate(),
        price: price,
        title: title,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      

        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src={starIcon} alt="starIcon" />
              </p>
            ))}
        </div>

        <img src={image} alt="product" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    
  );
};
export default Products;
