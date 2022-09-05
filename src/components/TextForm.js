import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Changed to UpperCase", "danger")

  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Changed to Lowercase", "danger")
  }
  const Reset = () => {

    setText(" ")
    props.showAlert("Reseted", "danger")

  }
  const Copy = () => {
    var text = document.getElementById("text")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied", "danger")

  }
  const handleOnChange = (event) => {
    setText(event.target.value)//yh text ki value change kray ga
  }
  const RemoveExtreSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed from text", "danger")

  }
  const [text, setText] = useState("");

  return (
    <>

      <div className="mb-3 container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <h1 >{props.heading}</h1>
        <textarea className="form-control mt-2 " style={{ backgroundColor: props.mode === 'dark' ? '#85b5b9' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="text" placeholder='enter your text here' value={text} onChange={handleOnChange} rows={10} defaultValue={""} />
        {/* onChange  : agr may yh use nhi kru ga to text ki value by default hay to may textarea may kuch likh nhi paon ga textarea may likhnay k liye handleOnChage function use krna pra ga jo text may value change kr day ga
     */}
        <div className='m-2'>
          <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={handleLoClick}>Convert To LowerCase</button>
          <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={Reset}>Reset</button>
          <button className="btn btn-primary m-2" disabled={text.length === 0} onClick={Copy}>Copy</button>
          <button className="btn btn-primary m-2"  disabled={text.length === 0} onClick={RemoveExtreSpaces}>Remove Extra Spaces</button>



        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className=''>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
        {/* /\s+/ this count words */}
        {/* .split(" ")this will count spaces  */}
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes required to read this</p>
        <h2 className=''>Preview</h2>
        <p>{text.length > 0 ? text : "please enter the text "}</p>

      </div>
    </>

  )
}
