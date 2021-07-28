import React from 'react';
import style from './styles.module.css';
import allyLogo from '../../assets/Allyship_Color_White.png';
import SocialMediaBar from '../SocialMediaBar';

function Hero() {
    return (
        
        <div className={style.heroContainer}>
            <div className={style.contentContainer} >
            <div className={style.logoContainer}>
                <img className={style.heroLogo} src={allyLogo} alt ="" />
            </div>
            <div className={style.heroDescription}>
                <h1>Democracy For Everyone</h1>
                <p>Hold elected officals accountable with our data driven digital tools. 
                    Understand and leverage their <strong>Legislative choices, voting history, 
                    and online behavior</strong> to demand action and drive change within the Black community.</p>
                    <br />
                    <p className={style.boldDemocracyText}>
                        Follow us on social media to stay informed on the release!
                    </p>
                    <SocialMediaBar />
            </div>
            
        </div>
       
        </div>
    )
}

export default Hero;
