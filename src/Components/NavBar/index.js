import React from "react";
import style from "./styles.module.css";
import logoImg from "../../assets/BB-Logo.png";
import { MenuItems } from "./MenuItems.js";

function NavBar() {
  return (
    <div className={style.navBar}>
      <nav className={style.navItems}>
        <div className={style.logoContainer}>
          <img className={style.logo} src={logoImg} alt="" />
        </div>
        <div className={style.title}>BlackBirds.io</div>

        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName} href={item.url}>
                {item.title}
              </li>
            );
          })}
          <li>
            <button className={style.navBtn}>GET INVOLVED</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
