import React from 'react'
import { FaTimes } from 'react-icons/fa'
import HeartRating from "./HeartRating.js"
import './Diary.css';


export default function Diary( { diary, onDelete, selectedHeart, setSelectedHeart } ) {
    

    return (
        <div className="diary">
            <h2>{diary.text} <FaTimes onClick={() => onDelete(diary.id)} style={{color: 'white', backgroundColor: '#845ec2'}} /></h2>
             {diary.startDate ? `${diary.startDate.getDate()}/${diary.startDate.getMonth()}/${diary.startDate.getFullYear()}` : null}
             <div><HeartRating totalHearts={5} selectedHeart={diary.selectedHeart} setSelectedHeart={diary.setSelectedHeart}/></div>
            <p>{diary.content}</p>
        </div>
    )
}
