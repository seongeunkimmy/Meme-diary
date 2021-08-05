import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import HeartRating from "./HeartRating.js"

import "./AddDiary.css"
import "react-datepicker/dist/react-datepicker.css";


export default function AddDiary(props) {
  const {addDiary} = props;
  // const [hoverHeart, setHoverHeart] = useState(0);
  const [selectedHeart, setSelectedHeart] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [checked, setChecked] = useState('')
  
  const handleChange = (e) => {
   setChecked(e.target.value)
   console.log(e.target.value)
  }
  
  
  
  const onSubmit = (e) => {
    e.preventDefault(); 

    addDiary({text, content, startDate, selectedHeart, checked})
    
    setStartDate(null)
    setText('')
    setContent('')
    setSelectedHeart(0)
    setChecked('')

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
              <input 
              text={text} 
              onChange={(e) => setText(e.target.value)} 
              type="text" 
              placeholder="Today.."/>
            </div>
            <div className="form-item">
              <label>Giving your hearts</label>
            
              <HeartRating
              totalHearts={5} 
              // hoverHeart={hoverHeart}
              // setHoverHeart={setHoverHeart}
              selectedHeart={selectedHeart}
              setSelectedHeart={setSelectedHeart}
              
               />
             
            </div>

            <div className="form-item">
              <label>Meditation / Exercise</label>
              <div className="checkbox">
              <div className="check-opt">
              <label>Yes</label>
                <input 
                type="radio" 
                checked={checked === "Yes"}
                value="Yes" 
                onChange={handleChange}/>
              </div>
              <div className="check-opt">
              <label>No</label>
              <input 
              type="radio" 
              checked={checked === "No"}
              value="No"
              onChange={handleChange} />
              </div>
              </div>
            </div>
             <div className="form-item">
              <label>Today I feel</label>
              <textarea 
              content={content} 
              onChange={(e) => setContent(e.target.value)} 
              name="Content" 
              placeholder="Tell me about your day! What happened?" 
              cols="15" 
              rows="5" />
             </div>
              
            </div>
            <input type='submit' value= "Upload it!" className="btn" />
            
            </form>
           
        </div>
    )
}
