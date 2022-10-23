
import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  }

  const handleElClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);
    setText(newText);
  }

  const handleClClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = ' ';
    setText(newText);
    props.showAlert("Text deleted", "success");
  }

  const handleLoClick = ()=>{
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // setText("Fuck U");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleElClick}>Extract Email</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.lenght>0?text:'Enter Something in textbox above to preview it here'}</p>
</div>
</>
  )
}
