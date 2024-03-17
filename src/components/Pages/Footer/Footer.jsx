import React from "react";
import css from "../Footer/Footer.module.css";
import karta from "../../../assets/karta.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#3C4242" }}>
      <div className="container">
        <footer className={css.footer_pad}>
          <div className={css.foot_df}>
            <div>
              <h2>Need Help</h2>
              <ul>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h2>More Info</h2>
              <ul>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h2>Location</h2>
              <ul>
                <li>support@euphoria.in</li>
              </ul>
            </div>
          </div>
          <div className={css.footer_pos}>
            <img src={karta} alt="" />
          </div>
          <div className={css.foot_df2}>
            <div style={{backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '10px 13px'}}><FaFacebook /></div>
            <div style={{backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '10px 13px'}}><FaInstagram /></div>
            <div style={{backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '10px 13px'}}><RxTwitterLogo /></div>
            <div style={{backgroundColor: '#F6F6F6', borderRadius: '10px', padding: '10px 13px'}}><BsGithub /></div>
          </div>
          <hr style={{marginTop: '8px',}}/>
          <center>
            <p style={{fontSize: '18px', fontWeight: '400', color: '#fff', marginTop: '62px'}}>Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.</p>
          </center>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
