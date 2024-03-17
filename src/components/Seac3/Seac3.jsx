import React from "react";
import img from "../../assets/img.svg";
import css from "../Seac3/Seac3.module.css";

const Seac3 = () => {
  return (
    <div>
      <section className="container">
        <div className={css.imageContainer}>
          <img src={img} alt="" className={css.image} />
          <div className={css.textOverlay}>
            <h4>Jeans/ T-shirt</h4>
            <h1>Spring Value Package</h1>
            <p>cool / colorful / comfy</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seac3;
