import React, { useEffect, useState }from 'react'
import axios from 'axios';
import HeartRating from "./HeartRating.js"
import Navbar from "../components/Navbar"
import './Diaries.css'

  export default function Diaries() {
  const [diaries, setDiaries] = useState([{
      title: '',
      content: '',
      selectedHeart: 0, 
      date: null,
      bodyChecked: ''
  }])

  function deleteDiary(id) {
     axios.delete('/delete/' + id)
     alert('item deleted')
     console.log(`deleted item is ${id}`)
  } 

  useEffect(() => {
      fetch('/diaries').then(res => {
          if(res.ok) {
              return res.json()
          }
      }).then(jsonRes => setDiaries(jsonRes))
  })

      return (
          
          <div>
          <Navbar />
          <div className="diary-container">
        <h1 className="diary-title">forMe.</h1>
        <div>

            {diaries.map(diary => 
            <>
        <div className="diary">
          <div className="diary-item">
          <div className="diary-grid">
          <div>
          <h2>{diary.title}</h2>
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
          {diaries.date ? `${diary.date.getDate()}/${diaries.date.getMonth()}/${diaries.date.getFullYear()}` : null}
          </div>
          <div className="grid-flex">
           <h4>Treat your body well?</h4>
           <p>{diary.bodyChecked}</p>
           </div>
          </div>
          </div>
          
           <div className="diary-item">
           <p>{diary.content}</p>
           </div>
           <div className="diary-item">
           <button onClick={() => deleteDiary(diary._id)} className="sm-btn" >
           Delete
          </button>
           </div>
         
          </div>
         
      
          </> 
            
  )}
  </div>
            
  </div>  
         </div>
    
        
      )
  }
  