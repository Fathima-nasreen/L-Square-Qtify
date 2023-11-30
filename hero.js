import React from "react";
import "./Hero.css";
import Heroimage from "../../assects/Hero Image 1.png";
function Hero () {
    return (
        <div className="heroSection">
           {/* <img src={Heroimage} alt = "HeroSection" className="hero" />  */}
           <div>
                <h1>100 Thousand songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img
                    src={Heroimage}
                    width={212}
                    alt="headphones"
                    />
            </div>
        </div>
    )
}

export default Hero;