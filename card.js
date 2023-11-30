
import React from 'react';
import { Tooltip } from '@mui/material';
import './Card.css';

function Card ({
   imgSrc,
   followersCount,
   label,
   songs
})  {
    return (
      <Tooltip title={`${songs} songs`} placement="top" arrow>
      <div className='card-wrapper'>
        <div className='card'>
           <div className='card-img-frame'>
              <img className='card-img' src={imgSrc} alt='cardimg' loading='lazy' />
           </div>
          <div className='card-content'>
            <span className='card-content-pill'>
               {followersCount} follows
            </span>
          </div>
        </div>
        <p className='card-label'>{label}</p>
      </div>
      </Tooltip>)
}

export default Card;