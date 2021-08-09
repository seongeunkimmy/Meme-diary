import React from 'react'
import HeartRating from "./HeartRating.js"
import './Diary.css';


export default function Diary( { diary, onDelete, selectedHeart, setSelectedHeart } ) {
    

    return (
        <div className="diary">
            <div className="diary-item">
            <div className="diary-grid">
            <div>
            <h2>{diary.text}</h2>
            </div>
            <div className="grid-flex">
           
            <HeartRating 
             totalHearts={5} 
             selectedHeart={diary.selectedHeart}
             setSelectedHeart={diary.setSelectedHeart}
             />
          
             
             </div>
            </div>
            
           
            
           
            <div className="diary-grid">
            <div>
            {diary.startDate ? `${diary.startDate.getDate()}/${diary.startDate.getMonth()}/${diary.startDate.getFullYear()}` : null}
            </div>
            <div className="grid-flex">
             <h4>Treat your body well?</h4>
             <p>{diary.checked}</p>
             </div>
            </div>
            </div>
            
             <div className="diary-item">
             <p>{diary.content}</p>
             </div>
             <div className="diary-item">
             <button className="sm-btn" onClick={() => onDelete(diary.id)} >
             Delete
            </button>
             </div>
           
            
            </div>
           
      
    )
}
