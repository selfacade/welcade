import React, {useEffect} from 'react';
import './Product.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Product() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='pricing' className="product_container">
        <div className="product_title" data-aos="fade-right">Products we Made & Pricing</div>
        <div className="product_cards">
          <div className="product">
            <div className="product_logo product1"></div>
            <div className="product_card_title">Simple webpage</div>
            <div className="product_card_desc">Website with Plain HTMl CSS & <br /> Javascript</div>
            <div className="product_price">₹ 4999/-</div>
          </div>
          <div className="product">
            <div className="product_logo product2"></div>
            <div className="product_card_title">Wordpress site</div>
            <div className="product_card_desc">Fast | Beautifull | Nocode low price <br /> website with "Wordpress"</div>
            <div className="product_price">₹ 8499/-</div>
          </div>
          <div className="product">
            <div className="product_logo product3"></div>
            <div className="product_card_title">Ecommerce site</div>
            <div className="product_card_desc">website for online Store & Bookings</div>
            <div className="product_price">₹ 14999/-</div>
          </div>
        </div>
    </div>
  )
}
