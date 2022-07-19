import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import moment from 'moment';
import HeartRating from "./HeartRating.js"
import Navbar from "../components/Navbar"

import './Diaries.css'

import { connect } from 'react-redux';
import { getDiary, deleteDiary, editDiary } from '../actions/diariesAction'



function Diaries({diaries, getDiary, deleteDiary, editDiary, auth}) {

  // const [show, setShow] = useState(false);
  // console.log(show)

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
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
       console.log(id);
    }

    const handleUpdate = (id) => {
       editDiary(id);
     
    }

   

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

        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
          </Button> */}
       
         <button onClick={() => handleUpdate(_id)}> 
         Edit 
         </button>
         {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
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



export default connect(mapStateToProps, { getDiary, deleteDiary, editDiary })(Diaries);


