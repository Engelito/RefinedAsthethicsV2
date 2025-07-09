import React from 'react';
import Hero from "../Hero.jsx";
import Side from "./Side.jsx";
import ContentVideo from '../Components/ContentVideo';
import painPointsVideo from '../assets/heroVideo.mov';
import HeroVideo from '../HeroVideo.jsx'; // Adjust path if needed
function Home(){
    return(
        <>
        <Hero/>
        <ContentVideo videoSrc={painPointsVideo} />
        <Side/>
        </>
    );

}
export default Home;