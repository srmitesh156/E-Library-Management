import React, { useState } from "react";

const Addbook = ({ onSave }) => {
  const [book, setBook] = useState({ title: "", author: "", genre: "", publishedDate: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book);
    setBook({ title: "", author: "", genre: "", publishedDate: "" });
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">Add/Edit Book</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Genre</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Published Date</label>
        <input
          type="date"
          name="publishedDate"
          value={book.publishedDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
      </div>
  );
};

export default Addbook;
