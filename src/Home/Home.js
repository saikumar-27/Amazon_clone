import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
            price={95908}
            rating={5}
            image="https://i.ytimg.com/vi/efaYhyieooA/maxresdefault.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="84903850"
            title="Smart Watch 2022(Call Receive/Dial), 1.70 in HD Full Touch Screen Smartwatch Fitness Tracker with Call/Text/Heart Rate (Black)"
            price={4952.06}
            rating={5}
            image="https://sc04.alicdn.com/kf/H8d71f701b9fb4a009697fadd66501b1cf.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White"
            price={5499}
            rating={4}
            image="https://i.gadgets360cdn.com/products/large/amazon-echo-dot-4th-gen-with-clock-850x800-1601012657.jpg"
          />
          <Product
            id="3254354345"
            title="APPLE iPhone 13 Pro Max (Silver, 512 GB)"
            price={159900}
            rating={5}
            image="https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/16/22/162230.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="79549850"
            title="Nikon D850 FX-Format Digital SLR Camera Body"
            price={230129}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVTDox337zvfk0jf8uYSOkMTQ3sWiiRceFw&usqp=CAU"
            rating={5}
          />
          <Product
            id="98624571"
            title="FLYBIRD Adjustable Dumbbell,25/55lb Dumbbell Set for Men with Anti-Slip Metal Handle,Fast Adjust Weight by Turning Handle,Black Dumbbell with Tray Suitable for Full Body Workout Fitness"
            price={22999}
            image="https://m.media-amazon.com/images/I/61WnBdPh4nL._AC_SX425_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="63829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={49000.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
