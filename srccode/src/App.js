import React,{useState} from 'react'

function App() {
  const [show1,setShow1]=useState(false)
  const [show2,setShow2]=useState(false)
  const [show3,setShow3]=useState(false)
  const [show4,setShow4]=useState(false)
  const [show5,setShow5]=useState(false)
  return (
    <div className='box'>
      <div className="container">
        <div className='img'/>
        <div className="text">
        <h1 className='head'>FAQ</h1>
        <div className="questions">
          <div className="question1" onClick={()=>setShow1(!show1)}>
            <h2 className={(show1)?"active":""}>How many team members can I invite?</h2>
            <div className={(show1)?"turn":"icon"}>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
          </div>
          {(show1)?<div className="answer1">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>:<></>}
          <div className='line'/>
          <div className="question2"  onClick={()=>setShow2(!show2)}>
            <h2 className={(show2)?"active":""}>What is the maximum file upload size?</h2>
            <div className={(show2)?"turn":"icon"}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
          </div>
          {(show2)?<div className="answer1">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>:<></>}
          <div className='line'/>
          <div className="question3"  onClick={()=>setShow3(!show3)}>
            <h2 className={(show3)?"active":""}>How do I reset my password?</h2>
            <div className={(show3)?"turn":"icon"}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
          </div>
          {(show3)?<div className="answer1">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>:<></>}
          <div className='line'/>
          <div className="question4"  onClick={()=>setShow4(!show4)}>
            <h2 className={(show4)?"active":""}>Can I cancel my subscription?</h2>
            <div className={(show4)?"turn":"icon"}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
          </div>
          {(show4)?<div className="answer1">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>:<></>}
          <div className='line'/>
          <div className="question5"  onClick={()=>setShow5(!show5)}>
            <h2 className={(show5)?"active":""}>Do you provide additional support?</h2>
            <div className={(show5)?"turn":"icon"}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </div>
            
          </div>
          {(show5)?<div className="answer1">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>:<></>}
          <div className='line'/>
        </div>
        </div>
      </div>

    </div>
  )
}

export default App