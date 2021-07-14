
import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
// import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";


export default function AddDiary({ addDiary }) {
    
  const [startDate, setStartDate] = useState(null);
  // const [time, setTime] = useState('');
  
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  // function formatDate(str) {
  //   var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  //   return new Date().([], options);
  // }

  // const handleChange = (date) => {
  //   date = moment(date).format('MM-dd-yyyy')
  //   setStartDate(date);
  //   console.log(date);
  // }
 
  const onSubmit = (e) => {
    e.preventDefault(); 
   
   
    

    
    addDiary({text, content, startDate})
    
    
    setStartDate(null)
    setText('')
    setContent('')

    e.target.reset();
  }

    return (
        <div>
          
           <form onSubmit={onSubmit}>
            <div className="form-control">
              <label>Select Date</label>
              {/* <input date={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="Add Date"/> */}
              <DatePicker selected={startDate} 
                          onChange={(date) => setStartDate(date)} />
            </div>
            <div className="form-control">
              <label>Diary</label>
              <input text={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Today.."/>
              <textarea content={content} onChange={(e) => setContent(e.target.value)} name="Content" id="" placeholder="Write here!"cols="15" rows="5"></textarea>
            </div>
            <input type='submit' value= "Upload it!" className="btn" />
            
            </form>
           
        </div>
    )
}
