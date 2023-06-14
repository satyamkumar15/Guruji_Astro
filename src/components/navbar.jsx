import React from "react";
import Style from "../Styles/navbar.module.css";
import MenuBarForMobile from "./MenuBarForMObile";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.menuIcon}>
        {/* <i className="fa-solid fa-bars"></i> */}
        <MenuBarForMobile />
      </div>
      <div className={Style.navbarLogo}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg"
          alt="web-logo"
        />&nbsp;
        <span>Guruji</span>
      </div>
      <div className={Style.menu}>
        <p>Home</p>
        <p>Call with Astrologer</p>
        <p>Live(Comming Soon)</p>
      </div>
      <div className={Style.user}>
        <img
          src="https://i.ibb.co/bdvKrjC/1676363239264.jpg"
          alt="1676363239264" border="0"
        />
      </div>
    </div>
  );
};

export default Navbar;
