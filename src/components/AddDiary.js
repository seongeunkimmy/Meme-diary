import React from 'react'
import { useState } from 'react'

export default function AddDiary({ onAdd }) {
    
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = (e) => {
    e.preventDefault(); 

    onAdd({date, text, content})
    
    setDate('')
    setText('')
    setContent('')

    e.target.reset();
  }

    return (
        <div>
          
           <form onSubmit={onSubmit}>
            <div className="form-control">
              <label>Select Date</label>
              <input date={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="Add Date"/>
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
