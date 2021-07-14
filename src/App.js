import React from 'react'; 
import './index.css';
import Header from './components/Header';
import AddDiary from './components/AddDiary';
import Diaries from './components/Diaries';
import { useState } from 'react'



function App() {
  
  const [diaries, setDiaries] = useState([

{
  id: 1,
  text: 'Happy', 
  content: 'I had a nice day'
},
{
  id: 2,
  text: 'Bad',
  content: 'I had a bad day'
}
]);

const [showAddForm, setShowAddForm] =useState(false);

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
    <div className = 'container'>
    <Header showAddForm={showAddForm} onAdd={() => setShowAddForm(!showAddForm)}/>
    {showAddForm && <AddDiary addDiary={addDiary} />}
    <Diaries diaries={diaries} onDelete={deleteDiary} />
    </div>
  )
}

export default App;
