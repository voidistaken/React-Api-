import React, { useState } from "react";

import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics", author: "John Doe" },
    { id: 2, title: "Advanced React", author: "Jane Smith" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (newBook.title && newBook.author) {
      const newId = books.length + 1;
      const newBookWithId = { ...newBook, id: newId };
      setBooks([...books, newBookWithId]);
      setNewBook({ title: "", author: "" });
    }
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Liste des Livres</h1>
      <input
        type="text"
        placeholder="Rechercher"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => deleteBook(book.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Titre"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          placeholder="Auteur"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <br></br>
        <button onClick={addBook}>Ajouter</button>
        <br></br>
      </div>
    </div>
  );
};

export default Books;