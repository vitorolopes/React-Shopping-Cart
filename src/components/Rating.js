import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating, style, onClick}) => {
  return (
    <>
      {
        //[...Array(5)] creates an array of 5 "undefined" elements
        // The elements themselves do not interest me. I am only 
        // interested in the index
        [...Array(5)].map((_, i)=> {
            return(
              <span key={i} style={style} onClick={()=>onClick(i)}>
                { 
                  rating > i  // 3>0->T->1st star Filled ;...; 3>3->F->4th star Outline
                  ?
                  (<AiFillStar fontSize="15px"/>)
                  :
                  (<AiOutlineStar fontSize="15px"/>)
                }
              </span>
            )
        })
      }
    </>
  )
}

export default Rating