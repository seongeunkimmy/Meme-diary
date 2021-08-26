import React from 'react'
import Diary from './Diary'


  export default function Diaries({diaries, onDelete}) {
     
      return (
          <>
              {diaries.map((diary) => (
                  <Diary key={diary.id} diary={diary} onDelete={onDelete} />
              ))}
          </>
      )
  }
  