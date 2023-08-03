import React from "react";
import "./Home.css";
import banner from "../images/banner.jpg";
import mightyPatch from "../images/mighty_hero.jpg";
import Product from "./Product";
import asus from "../images/asus.jpg";
import crayola from "../images/crayola.jpg";
import summerTop from "../images/summerTop.jpg";
import handWash from "../images/handWash.jpg";
import towels from "../images/towels.jpg";
import dress from "../images/dress.jpg";

function Home() {
  return (
    <section>
      <img className="banner" src={banner} />
      <div className="row">
        <Product
          title=" Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne
              Pimple Patch for Covering Zits and Blemishes, Spot Stickers for
              Face and Skin, Vegan-friendly and Not Tested on Animals"
          price="11.96"
          rating={4}
          productImg={mightyPatch}
        />
        <Product
          title='ASUS TUF F15 Gaming Laptop, 15.6" 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor, GeForce GTX'
          price="745"
          rating={5}
          productImg={asus}
        />
      </div>
      <div className="row">
        <Product
          title="Crayola Colored Pencils (36ct), Kids Pencil Set, Back to School Supplies, Assorted Colors, Great for Classrooms,"
          price={13.99}
          rating={3}
          productImg={crayola}
        />
        <Product
          title="Womens Summer Tops 2023 Dressy Casual 3/4 Sleeve Blouses Floral Work Shirts"
          price={14.1}
          rating={5}
          productImg={summerTop}
        />
        <Product
          title="Baylis & Harding Sweet Mandarin & Grapefruit 16.9 Ounces Hand Wash, Pack Of 3"
          price={14.99}
          rating={4}
          productImg={handWash}
        />
      </div>
      <div className="row">
        <Product
          title="BELIZZI HOME 100% Cotton Ultra Soft 6 Pack Towel Set, Contains 2 Bath Towels 28x55 inchs, 2 Hand Towels 16x24"
          price={20}
          rating={5}
          productImg={towels}
        />
        {/* <Product
          title="Adrianna Papell Women's Short Sleeve Blouson Beaded Gown"
          price={134.0}
          rating="rating"
          productImg={dress}
        /> */}
      </div>
    </section>
  );
}

export default Home;
