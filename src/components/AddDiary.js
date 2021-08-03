import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import HeartRating from "./HeartRating.js"

import "./AddDiary.css"
import "react-datepicker/dist/react-datepicker.css";


export default function AddDiary({addDiary, handleHover}) {

  const [selectedHeart, setSelectedHeart] = useState(0);
  const [hover, setHover] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [checkedYes, setCheckedYes] = useState(false); 
  const [checkedNo, setCheckedNo] = useState(false);

  const handleChangeYes = () => {
    setCheckedYes(!checkedYes);
  }
  
  const handleChangeNo = () => {
    setCheckedNo(!checkedNo);
  }
  
  const onSubmit = (e) => {
    e.preventDefault(); 

    addDiary({text, content, startDate, selectedHeart})
    
    setStartDate(null)
    setText('')
    setContent('')
    setSelectedHeart(0)
    setHover(0)

    e.target.reset();
  }

    return (
        <div>
          
           <form onSubmit={onSubmit}>
            
            <div className="form-control">
            <div className="form-item">
              <label>Select Date</label>
              <DatePicker selected={startDate} 
                          onChange={(date) => setStartDate(date)} />
            </div>
            <div className="form-item">
              <label>One thing I am grateful for</label>
              <input text={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Today.."/>
            </div>
            <div className="form-item">
              <label>Giving your hearts</label>
            
              <HeartRating totalHearts={5} selectedHeart={selectedHeart} setSelectedHeart={setSelectedHeart} hover={hover} setHover={setHover}/>
              
            </div>
            <div className="form-item">
              <label>Meditation / Exercise</label>
              <div className="checkbox">
              <div className="check-opt">
              <label>Yes</label>
                <input type="checkbox" value={checkedYes} onChange={handleChangeYes}></input>
              </div>
              <div className="check-opt">
              <label>No</label>
              <input type="checkbox" value={checkedNo} onChange={handleChangeNo}></input> 
              </div>
              </div>
            </div>
             <div className="form-item">
              <label>Today I feel</label>
              <textarea content={content} onChange={(e) => setContent(e.target.value)} name="Content" id="" placeholder="Tell me about your day! What happened?" cols="15" rows="5"></textarea>
             </div>
              
            </div>
            <input type='submit' value= "Upload it!" className="btn" />
            
            </form>
           
        </div>
    )
}
