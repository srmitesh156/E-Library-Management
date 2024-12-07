import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: "",
    publishedDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Book/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        alert("Failed to fetch book data. Please try again.");
      });
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/Book/${id}`, book)
      .then(() => {
        alert("Book updated successfully");
        navigate("/bookdetails");
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Failed to update book. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Update Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={book.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publishedDate" className="block text-gray-700 font-medium mb-2">
              Published Date
            </label>
            <input
              type="date"
              id="publishedDate"
              name="publishedDate"
              value={book.publishedDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={book.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={book.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;