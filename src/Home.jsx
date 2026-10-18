import homeImg from "./images/icons/Home.jpg";
import Products from "./Products";
import"./Home.css"
import ProductImg1 from "./images/products/1.jpg";
import ProductImg2 from "./images/products/2.jpg";
import ProductImg3 from "./images/products/3.jpg";
import ProductImg4 from "./images/products/4.jpg";
import ProductImg5 from "./images/products/5.jpg";
import ProductImg6 from "./images/products/6.jpg";
import shortid from "shortid";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={homeImg} alt="home" />
        <div className="home-row">
          <Products 
            id={shortid.generate()}
            image={ProductImg1}
            price={64}
            rating={5}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset"
          />
          <Products
            id={shortid.generate()}
            image={ProductImg2}
            price={682.95}
            rating={4}
            title="HP Pavilion Laptop,15.6 Inch Full HD Display,AMD Ryzen 5,512GB SSD,Windows 11"

          />
        </div>
        <div className="home-row2">
          <Products
            id={shortid.generate()}
            image={ProductImg3}
            price={449}
            rating={5}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document,"
          />
          <Products
            id={shortid.generate()}
            image={ProductImg4}
            price={229}
            rating={3}
            title="Meta Quest 2 - Advanced All-In-One Virtual Reality Headset - 128 GB"
          />
          <Products
            id={shortid.generate()}
            image={ProductImg5}
            price={239}
            rating={5}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable M"
          />
        </div>

        <div className="home_row3">
          <Products
            id={shortid.generate()}
            image={ProductImg6}
            price={1142}
            rating={5}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
