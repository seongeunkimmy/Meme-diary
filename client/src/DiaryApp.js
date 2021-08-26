
import React, { useState } from 'react'
import Header from './components/Header';
import AddDiary from './components/AddDiary';
import Diaries from './components/Diaries';
import './DiaryApp.css';

export default function DiaryApp() {

const [diaries, setDiaries] = useState([]);
const [showAddForm, setShowAddForm] =useState(false);
const addToggle = () => setShowAddForm(!showAddForm);

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
        <Header addToggle={addToggle} />
        <div className="form">
         {showAddForm && <AddDiary addDiary={addDiary} />}
        </div>
        </div>
        <div className="main">
        <Diaries diaries={diaries} onDelete={deleteDiary} />
        </div>
        </div>
    )
}



