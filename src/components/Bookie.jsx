import { useEffect, useState } from "react"
import axios from 'axios'
 function Bookie(){
const [books,setBooks]=useState([]);
useEffect(()=>{
    getapi();
},[])
async function getapi(){
    const xo = await axios.get('http://localhost:9000/api/books')
    setBooks(xo.data);
}
async function deletebooks(id){
    if(window.confirm(`Are you sure you want to delete`)){
        await axios.delete(`http://localhost:9000/api/books/${id}`);
        getapi();
    };
}


    return <div>
        <h1 className="  flex justify-center items-center  text-2xl font-bold mx-auto ">List of Books</h1>
        <div className="flex justify-center">
        <table border={"2"} >
        <thead>
            <tr>
                <th>title</th>
                <th>author</th>
                <th>price</th>
                <th>date</th>
                <th>action</th>

            </tr>
        </thead>
        <tbody>
                {books.map((b,index)=>{
                    return <tr>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.price}</td>
                    <td>{b.published_date}</td>
                    <td><button onClick={()=>deletebooks(b._id)}>Delete</button></td>
                    </tr>
                      })}

                    
        </tbody>
        </table>
        </div>
        </div>
        
        
        }
        export default Bookie