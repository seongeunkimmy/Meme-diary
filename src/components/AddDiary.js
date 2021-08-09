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
              <label>SELECT DATE</label>
              <DatePicker selected={startDate} 
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Choose a date" />
            </div>
            <div className="form-item">
              <label>ONE THING I AM GRATEFUL FOR</label>
              <input 
              text={text} 
              onChange={(e) => setText(e.target.value)} 
              type="text" 
              placeholder="Today.."/>
            </div>
            <div className="form-item">
              <label>GIVE YOUR HEARTS</label>
              <span>How many hearts would you give to yourself?</span>
             <div className="hearts">
             <HeartRating 
              totalHearts={5} 
              // hoverHeart={hoverHeart}
              // setHoverHeart={setHoverHeart}
              selectedHeart={selectedHeart}
              setSelectedHeart={setSelectedHeart}
               />
               
             </div>
             
            </div>

            <div className="form-item">
              <label>TREAT YOUR BODY WELL?</label>
              <span>Eat Healthy/ Meditation / Exercise </span>
              <div className="checkbox">
              <div className="check-opt">
              <label>YES</label>
                <input 
                type="radio" 
                checked={checked === "Yes"}
                value="Yes" 
                onChange={handleChange}/>
              </div>
              <div className="check-opt">
              <label>NO</label>
              <input 
              type="radio" 
              checked={checked === "No"}
              value="No"
              onChange={handleChange} />
              </div>
              </div>
            </div>
             <div className="form-item">
              <label>TODAY I FEEL</label>
              <textarea 
              content={content} 
              onChange={(e) => setContent(e.target.value)} 
              name="Content" 
              placeholder="Tell me about your day! What happened?" 
              cols="15" 
              rows="5" />
             </div>
            </div>
            
            <div className="form-upload">
            <button type='submit' value= "Upload it!"  className="btn">Upload it!</button> 
            </div>

            </form>
           
        </div>
    )
}
