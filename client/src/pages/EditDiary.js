import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditDiary(props) {

 

  return (
      <>
    <Modal.Dialog show={props.show} close={props.close} >
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button onClick = {props.close}variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </>
  )
}

export default EditDiary;