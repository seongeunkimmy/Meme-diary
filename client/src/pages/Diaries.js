import React, { Component } from 'react';
// import axios from 'axios';
import HeartRating from "./HeartRating.js"
import Navbar from "../components/Navbar"
import './Diaries.css'

import { connect } from 'react-redux';
import { getDiaries, deleteDiary } from '../actions/diaryAction';
import { PropTypes } from 'prop-types';

// import React, { useEffect, useState }from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import axios from 'axios';
// import HeartRating from "./HeartRating.js"
// import Navbar from "../components/Navbar"
// import { getDiaries, deleteDiary } from '../actions/diaryAction';
// import './Diaries.css'

//   export default function Diaries() {
// //   const [diaries, setDiaries] = useState([{
// //       title: '',
// //       content: '',
// //       selectedHeart: 0, 
// //       date: null,
// //       bodyChecked: ''
// //   }])

// //   function deleteDiary(id) {
// //      axios.delete('/delete/' + id)
// //      alert('item deleted')
// //      console.log(`deleted item is ${id}`)
// //   } 

// //   useEffect(() => {
// //       fetch('/api/diary/diaries').then(res => {
// //           if(res.ok) {
// //               return res.json()
// //           }
// //       }).then(jsonRes => setDiaries(jsonRes))
// //         .catch((err) => {
// //             console.log(err);
// //         })
// //   })

// const diaries = useSelector((state) => state.diaries)
// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(getDiaries());
// }, [dispatch])

//       return (
          
//           <div>
//           <Navbar />
//           <div className="diary-container">
//         <h1 className="diary-title">forMe.</h1>
//         <div>

//             {diaries.map(diary => 
//             <>
//         <div className="diary">
//           <div className="diary-item">
//           <div className="diary-grid">
//           <div>
//           <h2>{diary.title}</h2>
//           </div>
//           <div className="grid-flex">
         
//           <HeartRating 
//            totalHearts={5} 
//            selectedHeart={diary.selectedHeart}
//            setSelectedHeart={diary.setSelectedHeart}
//            />
        
//            </div>
//           </div>
          
//           <div className="diary-grid">
//           <div>
//           {diaries.date ? `${diary.date.getDate()}/${diaries.date.getMonth()}/${diaries.date.getFullYear()}` : null}
//           </div>
//           <div className="grid-flex">
//            <h4>Treat your body well?</h4>
//            <p>{diary.bodyChecked}</p>
//            </div>
//           </div>
//           </div>
          
//            <div className="diary-item">
//            <p>{diary.content}</p>
//            </div>
//            <div className="diary-item">
//            <button onClick={() => deleteDiary(diary._id)} className="sm-btn" >
//            Delete
//           </button>
//            </div>
         
//           </div>
         
      
//           </> 
            
//   )}
//   </div>
            
//   </div>  
//          </div>
    
        
//       )
//   }
  



//-----------------------------------------------------------------------------------------------------------------



class Diaries extends Component {
   
    componentDidAmount() {
        this.props.getDiaries();
    }
    // deleteDiary = (id) => {
    //     axios.delete('/delete/' + id)
    //     alert('item deleted')
    //     console.log(`deleted item is ${id}`)
    //  } 

    onDeleteClick = (_id) => {
        this.props.deleteDiary(_id)
    }

   render() {
       const { diaries } = this.props.diary;
    
       return(
        <div>
        <Navbar />
        <div className="diary-container">
      <h1 className="diary-title">forMe.</h1>
      <div>

          {diaries.map(({_id, title, content, date, selectedHeart, bodyChecked})=> 
          <>
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
         setSelectedHeart={this.props.selectedHeart}
         />
      
         </div>
        </div>
        
        <div className="diary-grid">
        <div>
        {date ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` : null}
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
         <button onClick={this.onDeleteClick.bind(this, _id)} className="sm-btn" >
         Delete
        </button>
         </div>
       
        </div>
       
    
        </> 
          
)}
</div>
          
</div>  
       </div>
  
       )
   }
   };

   Diaries.propTypes = {
       getDiaries: PropTypes.func.isRequired, 
       diary: PropTypes.object.isRequired
   }

   const mapStateToProps = (state) => ({
       diary: state.diary

   })


export default connect(mapStateToProps, { getDiaries, deleteDiary })(Diaries);