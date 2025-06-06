import React from "react";
import styles from'./hero.module.css';
import localHeroImage from './assets/wideShot.JPG';

function Hero(){
    // Use the imported local image as the initial source
  const [imgSrc] = React.useState(localHeroImage);
return(
    <div className={styles.heroContainer}>
        <img
            src={imgSrc} // Use the state variable which holds the imported image path
            alt="Inspiring hero banner"
            className={styles.heroImage}
        />
        <div className={styles.heroContent}>
            <h1 className='styles.heroH1'>It's time to change</h1>
            <p>Let's begin with a free consultation</p>
            <button>Start Button</button>
        </div>
    </div>
    );
}

export default Hero;