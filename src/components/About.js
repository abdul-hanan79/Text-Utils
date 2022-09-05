import React,{useState} from 'react'

export default function About(props) {

    // const[btnText,getBtnText]=useState("Enable Dark Mode")
    //         const[myStyle,getMyStle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })
    // let darkMode=()=>{
    //     if(myStyle.color==="black"){
    //         getMyStle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         getBtnText("Enable Light Mode")
    //     }
    //     else
    //     {
    //         getMyStle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         getBtnText("Enable Dark Mode")

    //     }
    // }
    
    return (
                <div className="accordion container"  style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="accordionExample">
                <h1 className='m-2'>About Us</h1>
                <div className="accordion-item " >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Textutils gives you a way to analyze your text quickly </strong> and efficiently.Be it word count,character counter
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>TextUtils is a free character counter tool </strong> that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ Character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body " style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>This word counter software works in any web browsers</strong> such as Chrome, Firefox , Internet Explorer, Safari , Opera. It suits to count characters  in facbook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
                {/* <div className="container">
          <button className="btn btn-outline-success m-3" onClick={darkMode} type="submit">{btnText}</button>

                </div> */}
            </div>

        
    )
}
