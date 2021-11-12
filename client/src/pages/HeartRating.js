import React from 'react'
import {HiOutlineHeart} from 'react-icons/hi'
import "./HeartRating.css"


export default function HeartRating({
    totalHearts,
    selectedHeart,
    setSelectedHeart
    }) {
        

        return (
            <div>
            {[...Array(totalHearts)].map((n, i) => {
                i += 1
                return <HiOutlineHeart
                  size={18}
                  key={i}
                  className={i <= selectedHeart ? "selectedHeart" : "heart"}
                  onClick={() => setSelectedHeart(i)}
                
                  />
                  
                })}
            </div>
            
        )
    
    }

    

