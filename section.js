import React from "react";
import { useRef, useState } from 'react';
import Card from "../Card/Card";
import Carousal from "../Carousal/Carousal";

import './Section.css';

function Section ({navID, title, data})  {

    const [isCollapsed, setIsCollapsed] = useState(false)
    
        return (<div className='section'>
            <div className='section-header'>
            <h1 className='title'>{title}</h1>
            <h1 className='section-toggle-btn' 
            onClick={()=>{
                setIsCollapsed(!isCollapsed)
            }}>{isCollapsed ? 'Show All' : 'Collapse'}</h1>
            </div>
            {isCollapsed ? <Carousal navID={navID} data={data} /> : <div className='card-container'>
                {data.map(cardData => <Card 
                key={cardData.id}
                imgSrc={cardData.image}
                label={cardData.title}
                followersCount={cardData.follows}
                 songs={cardData.songs?cardData.songs.length:null}
                />)}
            </div>}
        </div>)
}

export default Section;