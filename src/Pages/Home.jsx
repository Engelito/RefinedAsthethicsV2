import React from 'react';
import Hero from "../Hero.jsx";
import Side from "./Side.jsx"
import HeroVideo from '../HeroVideo.jsx'; // Adjust path if needed
function Home(){
    return(
        <>
        <HeroVideo/>
        <Side/>
        </>
    );

}
export default Home;