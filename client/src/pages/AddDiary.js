import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import DatePicker from "react-datepicker";
import HeartRating from "./HeartRating.js"
import { store } from '../App.js'
import { loadUser } from '../actions/authAction';

import { addDiary } from "../actions/diariesAction"

import "./AddDiary.css"
import "react-datepicker/dist/react-datepicker.css";



function AddDiary({diaries, auth}) {

  useEffect(() => {
    store.dispatch(loadUser())
  },[loadUser])

  const user_id = useSelector(state => state.auth.user._id);
  console.log(user_id);
  const [selectedHeart, setSelectedHeart] = useState(0);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bodyChecked, setBodyChecked] = useState('')

  

  const handleChange = (e) => {
   setBodyChecked(e.target.value)
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault(); 
   
    const newDiary = {
      user_id,
      title, 
      content, 
      date, 
      selectedHeart, 
      bodyChecked,
    }  
      console.log(newDiary);
      dispatch(addDiary(newDiary));
    
      // history.push('/diaries');
      
    setDate(null)
    setTitle('')
    setContent('')
    setSelectedHeart(0)
    setBodyChecked('')

    e.target.reset();
  }

    return (
        <div>
        <Navbar />
           <form className="form" onSubmit={onSubmit}>
           <h1 className="form-title">How are you today? </h1>
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
              <label>GIVE YOURSELF HEARTS</label>
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
              placeholder="Tell me about your day! What happened? How do you feel?" 
              cols="15" 
              rows="5" />
             </div>
           
            </div>
            
            <div className="form-upload">
            <button type='submit' value= "Upload it!"  className="lg-btn">Upload it!</button> 
            </div>

            </form>
           
        </div>
    )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addDiary })(AddDiary);