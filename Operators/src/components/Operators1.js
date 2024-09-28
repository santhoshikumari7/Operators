import React from 'react'

function Operators() {
  let score =0;
  return (
    <div>
      <button type='button' onClick={()=>{
        let a= 10+15;
        console.log(a)

        let b= 20-5;
        console.log(b)

        let c= 30*5;
        console.log(c)

        let d= 100/4;
        console.log(d)
        
        let e= 50%2;
        console.log(e)

        }}>Arithmatic Operators</button>
        <button type='button' onClick={()=>{
          score ++;
          console.log(score)
         }}>Increment</button>
          
          <button type='button' onClick={()=>{
          score --;
          console.log(score)
         }}>Decrement</button>

         <button type='button' onClick={()=>{
          let a= 12/6+24-15*4;
          console.log(a)

         }}>Precedence</button>

         <button type='button' onClick={()=>{
          let a = 40;
          a += 25;
          a *= 4;
          a -= 12;
          console.log(a)
         }}>Assignment Operators</button>

         <button type='button' onClick={()=>{
          let engMarks = 70;
          console.log(engMarks == 70);
          console.log(engMarks >= 40);
          console.log(engMarks <= 75);
          console.log(engMarks != 30);
          console.log(engMarks > 35);
          console.log(engMarks < 80);

         }}>Comparision Operators</button>
    </div>
  )
}

export default Operators
