import React, { useEffect, useState }from 'react'
import Diary from './Diary'
import HeartRating from "./HeartRating.js"


  export default function Diaries() {
  const [diaries, setDiaries] = useState([{
      title: '',
      content: '',
      selectedHeart: 0, 
      date: null,
      bodyChecked: ''
  }])

  useEffect(() => {
      fetch('/diaries').then(res => {
          if(res.ok) {
              return res.json()
          }
      }).then(jsonRes => setDiaries(jsonRes))
  })
//   const deleteDiary = (_id) => {
//     setDiaries(diaries.filter((diary) => diary._id !== _id))
//    }
      return (
          <div>
            {diaries.map(diary => 
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
           <button className="sm-btn" >
           Delete
          </button>
           </div>
         
          
          </div>
         
    
  )}
         </div>
    
        
      )
  }
  