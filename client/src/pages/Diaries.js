import React, { useEffect, useState } from 'react';
import moment from 'moment';
import HeartRating from "./HeartRating.js"
import Navbar from "../components/Navbar"
import EditDiary from "./EditDiary.js"
import './Diaries.css'

import { connect } from 'react-redux';
import { getDiary, deleteDiary } from '../actions/diariesAction'



function Diaries({diaries, getDiary, deleteDiary, auth}) {

  const [show, setShow] = useState(false)
  
    // useEffect(() => {
    //     store.dispatch(loadUser());
    //   },[loadUser])

  
      
   useEffect(() => {
    const user = auth.user._id;
      if(user) {
        return getDiary(user);
      }
        
    
   }, [getDiary, auth.user._id])
    

   const handleDelete = (id) => {
       deleteDiary(id);
    }

    // const handleUpdate = (id) => {
       
    // }

   

    return (
        <div>
        <Navbar />
        <div className="diary-container">
      <h1 className="diary-title">forMe</h1>
      <div>
          { diaries && diaries.length ? diaries.map(({_id, title, content, date, selectedHeart, bodyChecked}) => (
            <li key={_id}>
            <div className="diary">
           
        <div className="diary-item">
        <div className="diary-grid">
        <div>
        <h2>{title}</h2>
        </div>
        <div className="grid-flex">
       
        <HeartRating 
         totalHearts={5} 
         selectedHeart={selectedHeart}
         />
      
         </div>
        </div>
        
        <div className="diary-grid">
        <div>
        {date ? moment(date).format('l') : null}
        </div>
        <div className="grid-flex">
         <h4>Treat your body well?</h4>
         <p>{bodyChecked}</p>
         </div>
        </div>
        </div>
        
         <div className="diary-item">
         <p>{content}</p>
         </div>
         <div className="diary-item">
         {/* <button onClick={() => handleUpdate(_id)} className="sm-btn" > */}
         {/* <button onClick={() => setShow(true)} className="sm-btn">
         Edit
         </button>
         <EditDiary show={show} close={() => setShow(false)}/> */}
        {/* </button> */}
         <button onClick={() => handleDelete(_id)} className="sm-btn" >
         Delete
        </button>
      
         </div>
        
        </div>
        </li>
          )) : null } 
                 
</div>        
</div>  
       </div>
  
       )
          }
        




   const mapStateToProps = state => ({
    //    diary: state.diary,
       diaries: state.diaries.diaries,
       auth: state.auth
     
   })



export default connect(mapStateToProps, { getDiary, deleteDiary })(Diaries);


