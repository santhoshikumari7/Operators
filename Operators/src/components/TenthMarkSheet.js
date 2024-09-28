import React, { useRef } from 'react'

function TenthMarkSheet() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let telInputRef = useRef();
    let hindInputRef = useRef();
    let mathsInputRef = useRef();
    let sociInputRef = useRef();
    let sciInputRef = useRef();
    
    let engSpanRef = useRef();
    let telSpanRef = useRef();
    let hindSpanRef = useRef();
    let mathsSpanRef = useRef();
    let sciSpanRef = useRef();
    let sociSpanRef = useRef();   
    
    let resultLblRef =useRef();
   

  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input  ref={firstNameInputRef}></input>
            <span></span>
        </div>

        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}></input>
            <span></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={engInputRef}
            onFocus={() => {
                console.log("eng onFocus");
                engInputRef.current.style.backgroundColor = "yellow";
            }} 
            onChange={() => {
                if(engInputRef.current.value >= 35){
                    engSpanRef.current.innerHTML = "Pass";
                    engSpanRef.current.style.backgroundColor="green"

                }else{
                    engSpanRef.current.innerHTML = "Fail"
                    engSpanRef.current.style.backgroundColor="red"

                }
                console.log("eng onChange")
            }} 
            onBlur={() => {
                console.log("eng onBlur");
                engInputRef.current.style.backgroundColor = "";
            }} ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' ref={telInputRef} 
            onFocus={() => {
                console.log("tel onFocus");
             telInputRef.current.style.backgroundColor = "yellow";
            }}
             
            onChange={() => {
                
                if(telInputRef.current.value >= 35){
                 engSpanRef.current.innerHTML = "Pass";
                 engSpanRef.current.style.backgroundColor= "green"
                }else {
                    engSpanRef.current.innerHTML = "Fail";
                    engSpanRef.current.style.backgroundColor= "red" 
                }
                console.log("tel onChange");
            }}
            onBlur={() => {
                console.log("tel onBlur");
                telInputRef.current.style.backgroundColor = "";
            }} ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hindInputRef} 
            onFocus={()=>{
                console.log("hind onFocus");
                hindInputRef.current.style.backgroundColor = "yellow";
            }} 
            onChange={() => {

                if(engInputRef.current.value >= 35) {
                engSpanRef.current.innerHTML = "Pass";
                engSpanRef.current.style.backgroundColor= "green"
                }else{
                    engSpanRef.current.innerHTML = "Fail";
                    engSpanRef.current.style.backgroundColor= "red"  
                }
                console.log("hind onChange");
                
            }}
                
            onBlur={() => {
                console.log("hind onBlur");
                hindInputRef.current.style.backgroundColor = "";
                }} 
                ></input>
            <span ref={hindSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={mathsInputRef}
             onFocus={()=>{
                console.log("mathsInput onFocus");
                mathsInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                if(mathsInputRef.current.value >= 35) {
                    mathsSpanRef.current.innerHTML = "Pass";
                    mathsSpanRef.current.style.backgroundColor= "green"
                    }else{
                        mathsSpanRef.current.innerHTML = "Fail";
                        mathsSpanRef.current.style.backgroundColor= "red"  
                    }
                    console.log("maths onChange")
            }}
            onBlur={() => {
                console.log("mathsInputRef onBlur");
                mathsInputRef.current.style.backgroundColor = "";
            }}
                ></input>
            <span ref={mathsSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={sciInputRef} 
            onFocus={() => {
                console.log("sciInputRef onFocus");
                sciInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                if(sciInputRef.current.value >= 35) {
                    sciSpanRef.current.innerHTML = "Pass";
                    engSpanRef.current.style.backgroundColor= "green"
                    }else{
                        sciSpanRef.current.innerHTML = "Fail";
                        sciSpanRef.current.style.backgroundColor= "red"  
                    }
                    console.log("sci onChange")
            }}
            onBlur={() => {
                console.log("sciInputRef onBlur");
                sciInputRef.current.style.backgroundColor = "";
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={sociInputRef}
           onFocus={() => {
                console.log("sociInputRef onFocus");
                sociInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                if(sociInputRef.current.value >= 35) {
                    sociSpanRef.current.innerHTML = "Pass";
                    sociSpanRef.current.style.backgroundColor= "green"
                    }else{
                        sociSpanRef.current.innerHTML = "Fail";
                        sociSpanRef.current.style.backgroundColor= "red"  
                    }
                    console.log("soci onChange")
            }}
            onBlur={() => {
                console.log("sociInputRef onBlur");
                sociInputRef.current.style.backgroundColor = "";
            }}
            ></input>
            <span ref={sociSpanRef}></span>
        </div>
        <button type='button' onClick={()=>{

        let firstName = firstNameInputRef.current.value;
        let lastName =  lastNameInputRef.current.value;
        let engMarks =  Number(engInputRef.current.value);
        let telMarks =  Number(telInputRef.current.value);
        let hindMarks = Number(hindInputRef.current.value);
        let mathMarks = Number(mathsInputRef.current.value);
        let sciMarks =  Number(sciInputRef.current.value);
        let sociMarks = Number(sociInputRef.current.value);

        let totalMarks=engMarks+telMarks+hindMarks+mathMarks+sciMarks+sociMarks;
    
         //alert(`${firstName} ${lastName} got total marks of ${totalMarks}`//);
        
        
        resultLblRef.current.innerHTML =(`${firstName} ${lastName} got total marks of ${totalMarks}`);
      }}>Calculate Results</button>

      <br></br>
      <label ref={resultLblRef} className="resultLbl"></label>
      </form>
    </div>
  )
}

export default TenthMarkSheet
