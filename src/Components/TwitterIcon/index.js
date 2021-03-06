import React from 'react';
import style from './styles.module.css';

function TwitterIcon() {
    return (
        <div className={style.mainContainer}>
          <a href="https://twitter.com">
            <svg width="70" height="59" viewBox="0 0 70 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M65.5458 6.60966C63.2825 7.58599 60.8195 8.28866 58.2825 8.56233C60.9165 6.9975 62.8889 4.52534 63.8298 1.60967C61.3582 3.08 58.6505 4.11102 55.8269 4.657C54.6467 3.39536 53.2194 2.39029 51.6339 1.7044C50.0483 1.01851 48.3385 0.666503 46.6109 0.670319C39.6213 0.670319 34 6.336 34 13.2887C34 14.265 34.1183 15.2413 34.3106 16.1807C23.8447 15.6333 14.5103 10.6333 8.30473 2.97801C7.174 4.90934 6.58146 7.10838 6.58876 9.34635C6.58876 13.725 8.81508 17.586 12.2101 19.8567C10.2093 19.7779 8.25549 19.228 6.50739 18.2517V18.407C6.50739 24.5386 10.8417 29.62 16.6183 30.7886C15.5337 31.0704 14.4179 31.2145 13.2973 31.2176C12.4763 31.2176 11.6997 31.1363 10.9157 31.0253C12.5133 36.0253 17.1657 39.657 22.7056 39.7753C18.3713 43.1703 12.9423 45.1673 7.04734 45.1673C5.98964 45.1673 5.01331 45.1303 4 45.012C9.59171 48.5993 16.2263 50.6703 23.3713 50.6703C46.5665 50.6703 59.2588 31.4543 59.2588 14.7753C59.2588 14.228 59.2588 13.6807 59.2219 13.1333C61.6775 11.336 63.8298 9.10966 65.5458 6.60966Z" fill="#EF6848"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0.670288" width="69.5458" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
            </a>  
        </div>
    )
}

export default TwitterIcon;
