// import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import AlertTemplate from 'react-alert-template-basic'
// import React, { Component } from 'react';


const Components = () => {
  

   const [result,setResult]=useState("");
   const clickHand=(event)=>{
       setResult(result.concat(event.target.value))
   }
     const clearD=()=>{
      setResult("");
     }
// const undo=()=>{
//   event.target.value(0, -1)
//     }

     const calculate=()=>{
      try {
      setResult(eval(result).toString());
    } catch (e) {
              setResult({
          result:"Error",
          // alert.show('Oh look, an alert!')

        
        })
      
    }
      
     }

  return (
   <>
   <div className={styles.Allbutton}>
               
               <p className={styles.resultD}>
                <input className={styles.input} type="text" placeholder="0" value={result}/>
               </p>
                <button name="(" value="(" onClick={clickHand}>(</button>
                <button name="CE" value="CE" onClick={clearD}>CE</button>
                <button name=")" value=")" onClick={clickHand}>)</button>
                <button name="C" value="C" >C</button><br/>

 
                <button name="1" value="1" onClick={clickHand}>1</button>
                <button name="2" value="2" onClick={clickHand}>2</button>
                <button name="3" value="3" onClick={clickHand}>3</button>
                <button name="+" value="+" onClick={clickHand}>+</button><br/>

 
                <button name="4" value="4" onClick={clickHand}>4</button>
                <button name="5" value="5" onClick={clickHand}>5</button>
                <button name="6" value="6" onClick={clickHand}>6</button>
                <button name="-" value="-" onClick={clickHand}>-</button><br/>

                <button name="7" value="7" onClick={clickHand}>7</button>
                <button name="8" value="8" onClick={clickHand}>8</button>
                <button name="9" value="9" onClick={clickHand}>9</button>
                <button name="*" value="*" onClick={clickHand}>*</button><br/>


                <button name="." value="." onClick={clickHand}>.</button>
                <button name="0" value="0" onClick={clickHand}>0</button>
                <button name="=" value="=" onClick={calculate}>=</button>
                <button name="/" value="/" onClick={clickHand}>÷</button><br/>
            </div>
   </>
  )
}

export default Components