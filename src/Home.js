import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ searchRenderList }, set] = useStateValue();
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        {searchRenderList.map((item) => {
          return (
            <Product
              title={item.title}
              id={item.id}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
