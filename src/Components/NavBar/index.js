import React from 'react';
import style from './styles.module.css';
import logoImg from '../../assets/BB-Logo.png';

function NavBar() {
    return (
        <div className={style.navBar}>
            <nav className={style.navItems}>
                <div className={style.logoContainer}>             
                    <img className={style.logo} src={logoImg} alt="" />
                </div>
            <div className={style.title}>BlackBirds.io</div>

                <ul>
                    <li>Home</li>
                    <li>Why BlackBirds.io?</li>
                    <li>Allyship</li>
                    <li>Events</li>
                    <li>
                        <button>GET INVOLVED</button>
                    </li>
                </ul>       
            </nav>
        </div>
    )
}

export default NavBar
