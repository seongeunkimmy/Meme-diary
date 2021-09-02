
import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Diaries from './Diaries';
import AddDiary from './AddDiary'
import './DiaryApp.css';

export default function DiaryApp() {
    const [diaries, setDiaries] = useState([]);

   
        const location = useLocation();
    

//delete Diary 
const deleteDiary = (id) => {
 setDiaries(diaries.filter((diary) => diary.id !== id))
}

//add Diary 
const addDiary = (diary) => {
const id = Math.floor(Math.random() * 10000) + 1;
const newDiary = {id, ...diary};
console.log(newDiary);
setDiaries([...diaries, newDiary])
}
    return (
        <div className="container">
        <div className="header">
        <Navbar />
        </div>
        <div>{location.data}</div>
        <div className="main">
        <Diaries diaries={diaries} onDelete={deleteDiary} />
        </div>
        </div>
    )
}



