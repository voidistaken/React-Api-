import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Books from './components/Books';
import Bookie from './components/Bookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
// function Books(){
//     const books=[{id:1,name:"yassine",price:100},
//                  {id:2,name:"nour",price:200},
//                  {id:3,name:"ali",price:300}]
//     return(
//       <table border={1}>
//         <tr><td>id</td><td>name</td><td>price</td></tr>
//         {books.map(p=>(
//            <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.price}</td></tr>
//         ))}
//       </table>
//     )
// }
// function Incrementer(){
//   const [count,setCount]=useState(0)
//   const [color,setColor]=useState("black")
  

//   return (<>
//         <h1 style={{color:color}}>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>++</button>
//         <button onClick={()=>setColor("red")}>red</button>
//         <button onClick={()=>setCount(count-1)}>--</button>
//         <button onClick={()=>setCount(0)}>reset</button>


//   </>)
// }
root.render(
  <React.StrictMode>
     <Bookie></Bookie>
  </React.StrictMode>
);

reportWebVitals();
