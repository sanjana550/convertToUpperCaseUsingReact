import React,{useState} from 'react'

export default function TextForm(props) {
   const [text,setText]= useState('Enter Text here')

   const handleClick=()=>{
    setText(text.toUpperCase());
   }
   const onChaneHandler=(e)=>{
    setText(e.target.value);
    console.log(e.target.value)
   }
  return (
    <div>
        <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control"  id="myBox" rows="8" value={text} onChange={onChaneHandler}></textarea>
  <label htmlFor="myBox">Comments</label>
</div>
<button className="btn-btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </div>
  )
}
