import React from "react";
import img1 from "../../../assets/img1.svg";
import css from "../Seac3/Seac3.module.css";

const Seac1 = () => {
  return (
    <div className="container">
  <div style={{marginTop: '100px'}} className={css.wrapper}>
    <section className={css.main}>
      <div className={css.imageContainer}>
        <img width={1240} src={img1} alt="" />
        <div className={css.textOverlay}>
          <h4 className={css.hh}>T-shirt / Tops</h4>
          <h1>
            Spring
            <br />
            Value Package
          </h1>
          <h4>cool / colorful / comfy</h4>
          <div className={css.btn_three}>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

  );
};

export default Seac1;
