import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";
import logo from "../../assets/header-logo.svg";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import css from '../../components/Header/Header.module.css'

const Header = () => {
  return (
    <div className="container">
      <header className={css.head}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{display: 'flex', gap: '40px', fontSize: '22px', color: '#807D7E', marginLeft: '100px'}}>
          <h4>Shop</h4>
          <h4>Women</h4>
        </div>
        <div>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 472,
              height: 44,
              ml: '100px'
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </div>
        <div className={css.head_icon}>
            <div style={{border: 'none', backgroundColor: '#F6F6F6',  padding: '12px',  borderRadius: '8px'}}><FaRegHeart color="#807D7E" /></div>
            <div style={{border: 'none', backgroundColor: '#F6F6F6',  padding: '12px', borderRadius: '8px'}}><FaRegUser color="#807D7E" /></div>
            <div style={{border: 'none', backgroundColor: '#F6F6F6',  padding: '12px', borderRadius: '8px'}}><FiShoppingCart color="#807D7E" /></div>
            <div style={{border: 'none', backgroundColor: '#F6F6F6',  padding: '12px', borderRadius: '8px'}}><IoLanguage color="#807D7E" /></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
