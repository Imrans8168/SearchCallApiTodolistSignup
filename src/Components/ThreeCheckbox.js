import React,{useState} from 'react'

function App(){

     const [text,settext]=useState();
     const [data,setdata]=useState();
     const [hand,sethand]=useState();

 const textChange=(event)=>{
     settext(event.target.checked);
 }
 const texthandled =(event)=>{
  setdata(event.target.checked);
}
const texttransfer=(event)=>{
  sethand(event.target.checked);
}
    return(
        <>
        

       <input type="checkbox" onChange={textChange} />      

       <input type="checkbox" onChange={texthandled} />       

       <input type="checkbox" onChange={texttransfer} />
      
       <button disabled={!text}  >Submit</button>
          </>
    )
}


 export default App;