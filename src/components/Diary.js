import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Diary( { diary, onDelete } ) {
    return (
        <div className="diary">
            <h2>{diary.text} <FaTimes onClick={() => onDelete(diary.id)} style={{color: 'white', backgroundColor: '#845ec2'}} /></h2>
            <h5>{diary.date}</h5>
            <p>{diary.content}</p>
        </div>
    )
}
