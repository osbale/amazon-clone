import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12341231232"
          title="The lean startup how constant innovation creates radically successful businesses"
          price={11.96}
          rating={5}
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/101118-best-books-2018-lead-1539273412.png"
        />
        <Product
          id="12341231233"
          title="The lean startup how constant innovation creates radically successful businesses"
          price={11.96}
          rating={5}
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/101118-best-books-2018-lead-1539273412.png"
        />
      </div>
      <div className="home__row">
      <Product
          id="12341231234"
          title="The lean startup how constant innovation creates radically successful businesses"
          price={11.96}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310993739i/567610._UY310_SS310_.jpg"
        />
        <Product
          id="12341231235"
          title="The lean startup how constant innovation creates radically successful businesses"
          price={11.96}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310993739i/567610._UY310_SS310_.jpg"
        />
        <Product
          id="12341231236"
          title="The lean startup how constant innovation creates radically successful businesses"
          price={11.96}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310993739i/567610._UY310_SS310_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
