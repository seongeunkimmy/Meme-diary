import React from 'react'
import HeartRating from "./HeartRating.js"
import './Diary.css';


export default function Diary( { diaries } ) {
   
    return (
      
        <div className="diary">
            <div className="diary-item">
            <div className="diary-grid">
            <div>
            <h2>{diaries.title}</h2>
            </div>
            <div className="grid-flex">
           
            <HeartRating 
             totalHearts={5} 
             selectedHeart={diaries.selectedHeart}
             setSelectedHeart={diaries.setSelectedHeart}
             />
          
      
             </div>
            </div>
            
            <div className="diary-grid">
            <div>
            {diaries.date ? `${diaries.date.getDate()}/${diaries.date.getMonth()}/${diaries.date.getFullYear()}` : null}
            </div>
            <div className="grid-flex">
             <h4>Treat your body well?</h4>
             <p>{diaries.bodyChecked}</p>
             </div>
            </div>
            </div>
            
             <div className="diary-item">
             <p>{diaries.content}</p>
             </div>
             <div className="diary-item">
             <button className="sm-btn" >
             Delete
            </button>
             </div>
           
            
            </div>
           
      
    )
}
