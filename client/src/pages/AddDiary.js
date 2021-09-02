import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
// import Navbar from '../components/Navbar'
import DatePicker from "react-datepicker";
import HeartRating from "./HeartRating.js"

import "./AddDiary.css"
import "react-datepicker/dist/react-datepicker.css";


export default function AddDiary() {

  const [selectedHeart, setSelectedHeart] = useState(0);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bodyChecked, setBodyChecked] = useState('')
  
  const handleChange = (e) => {
   setBodyChecked(e.target.value)
  }
  
  // const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault(); 

  
    const newDiary = {
      title, 
      content, 
      date, 
      selectedHeart, 
      bodyChecked,
    }  
    console.log(newDiary);
    axios.post("http://localhost:3001/diaries/new", newDiary);
      //  history.push('/diaries');
   
    
    setDate(null)
    setTitle('')
    setContent('')
    setSelectedHeart(0)
    setBodyChecked('')

    e.target.reset();
  }

    return (
        <div>
        
           <form onSubmit={onSubmit}>
            <div className="form-control">
            <div className="form-item">
              <label>SELECT DATE</label>
              <DatePicker selected={date} 
                          onChange={(date) => setDate(date)}
                          placeholderText="Choose a date" />
            </div>
            <div className="form-item">
              <label>ONE THING I AM GRATEFUL FOR</label>
              <input 
              title={title} 
              onChange={(e) => setTitle(e.target.value)} 
              type="text" 
              placeholder="Today.."/>
            </div>
            <div className="form-item">
              <label>GIVE YOUR HEARTS</label>
              <span>How many hearts would you give to yourself?</span>
            
            <div className="hearts">
             <HeartRating 
              totalHearts={5} 
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
                checked={bodyChecked === "Yes"}
                value="Yes" 
                onChange={handleChange}/>
              </div>
              <div className="check-opt">
              <label>NO</label>
              <input 
              type="radio" 
              checked={bodyChecked === "No"}
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
