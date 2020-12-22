import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
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
        <Product
          title="The Suble Art of not giving"
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1"
          rating={5}
          id={1}
        />
        <Product
          title="The Suble Art of not giving"
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1"
          rating={5}
          id={2}
        />
      </div>
      <div className="home__row">
        <Product
          title="The Suble Art of not giving"
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1"
          rating={5}
          id={3}
        />
        <Product
          title="The Suble Art of not giving"
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1"
          rating={5}
          id={4}
        />
        <Product
          title="The Suble Art of not giving"
          price={29.99}
          image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1"
          rating={5}
          id={5}
        />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
