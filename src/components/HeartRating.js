import React, { useState }from 'react'
import {IoMdHeartEmpty} from 'react-icons/io'
import "./HeartRating.css"

export default function HeartRating({selectedHeart, setSelectedHeart, totalHearts, hover, setHover}) {
   
  

    return (
        <div>
            {[...Array(totalHearts)].map((n, i) => {
                i += 1
            return <IoMdHeartEmpty
              key={i}
              className={i <= (hover || selectedHeart) ? "selectedHeart" : "heart"}
              onMouseEnter={()=> setHover(i)}
              onMouseLeave={()=> setHover(selectedHeart)}
              onClick={() => setSelectedHeart(i)}
              
            />
            })}


        </div>
    )
}
