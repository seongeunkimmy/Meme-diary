import React from 'react'
import { FaTimes } from 'react-icons/fa'


export default function Diary( { diary, onDelete } ) {
    

    return (
        <div className="diary">
            <h2>{diary.text} <FaTimes onClick={() => onDelete(diary.id)} style={{color: 'white', backgroundColor: '#845ec2'}} /></h2>
             {diary.startDate ? `${diary.startDate.getDate()}/${diary.startDate.getMonth()}/${diary.startDate.getFullYear()}` : null}
            <p>{diary.content}</p>
        </div>
    )
}
