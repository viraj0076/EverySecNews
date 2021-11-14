import React, { useState } from 'react';
import { MdKeyboardVoice } from "react-icons/md";




const Speech = () => {
    // let playButton = document.getElementById('play-button')
    //let pauseButton = document.getElementById('pause-button')
   let stopButton = document.getElementById('stop-button')
    
    const [text , setText] = useState('')


    const playButton = () => {
       const utterance = new  SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance)
    }
    stopButton = () => { stopText() }


    function stopText() {
        speechSynthesis.resume()
        speechSynthesis.cancel()
    }
    const ClearText =  ()=>
    {
       let cltxt = ''
       setText(cltxt)
    }

    const handleOnClick = (event) =>
    {
        setText(event.target.value)
    }
    return (
        <>
        <div class ="container my-3">
            <center>
                <h1 style={{marginTop:'60px',background: 'red',width:'500px',height:'54px',borderRadius:'22px',color:'white'}}>
                <MdKeyboardVoice  style={{marginRight:'12px',marginBottom:'6px'}}/>Text to Voice
                </h1>
            </center>
            <textarea class="form-control" placeholder="Enter the Text"  value={text} onChange={handleOnClick} id="text" style={{ height: '350px', margin: '35px 0px', marginTop: '32px', borderColor:'red',boxShadow: '0 0 0 0.25rem red' }} />

            <button className="btn btn-primary mx-1" id="play-button" style={{background:'red' ,width:'150px', fontFamily: 'Cairo',borderRadius:'105px'}} onClick={playButton}> Play Text</button>
            <button className="btn btn-primary mx-1" id="stop-button" style={{background:'red' ,width:'150px', fontFamily: 'Cairo',borderRadius:'105px'}}  onClick={stopButton}> Stop Text</button>
            <button className="btn btn-primary mx-1" id="clear-button" style={{background:'red' ,width:'150px', fontFamily: 'Cairo',borderRadius:'105px'}}  onClick={ClearText}> Clear Text</button>

  
             </div>
        </>
    )
}
export default Speech