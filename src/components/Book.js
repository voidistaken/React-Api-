import React from "react";
export  const Book=({book,onDelete})=>{
    return(
        <>
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
        <button onClick={()=>onDelete(book.id)}>Supprimer</button>
        </>
    )
}