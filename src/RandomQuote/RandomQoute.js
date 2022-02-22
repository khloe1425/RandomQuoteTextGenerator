import React from 'react'
import { useState } from "react";

const quotes = [
  {
    quote:
      "One of my most productive days was throwing away 1,000 lines of code.",
    cite: "Ken Thompson"
  },
  {
    quote:
      "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    cite: "Bjarne Stroustrup"
  },
  {
    quote: "When in doubt, use brute force.",
    cite: "Ken Thompson"
  },
  {
    quote: "Talk is cheap. Show me the code.",
    cite: "Linus Torvalds"
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    cite: "Martin Golding"
  },
  {
    quote:
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    cite: "Linus Torvalds"
  },
  {
    quote:
      "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    cite: "Alan Kay"
  },
  {
    quote:
      "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
    cite: "Larry Wall"
  },
  {
    quote:
      "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
    cite: "George Carrette"
  }
];
export default function RandomQoute(props) {

  const [index, setIndex] = useState(0);
  const generate = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  };

  
  return (
      <div className='p-5'  style={{height:'800px',backgroundColor:'#ab47bc'}}  >
            <div className="container">
        <div className=' w-75 bg-white' style={{margin:'auto',padding:'3rem',borderRadius:'2rem',boxShadow:'12px 13px 15px -1px rgba(0,0,0,0.68)'}}> 
            
            <p style={{color:'#790e8b',fontSize:'2rem',fontWeight:'600'}} > <i style={{marginRight:'1rem',fontSize:'2rem'}} class="fa-solid fa-quote-left"></i> {quotes[index] && quotes[index].quote}</p>
            <p style={{textAlign:'right',fontSize:'25px',color:'#790e8b'}}>
                <i  >{quotes[index] && quotes[index].cite}</i>
            </p>
           
            
            <div >
                <button style={{background:'#790e8b',color:'white'}} className='btn p-3' onClick={generate}>generate</button>
            </div>
            
        </div>
    </div>
      </div>
      
  
  );
}