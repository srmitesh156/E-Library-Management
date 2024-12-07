import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Bookdetails = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:3000/Book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        alert("Failed to load books. Please try again later.");
      });
  };

  const handleDelete = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    if (window.confirm(`Are you sure you want to delete "${book?.title}"?`)) {
      axios
        .delete(`http://localhost:3000/Book/${bookId}`)
        .then(() => {
          setBooks(books.filter((book) => book.id !== bookId));
          alert(`Book "${book?.title}" deleted successfully.`);
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
          alert("Failed to delete the book. Please try again.");
        });
    }
  };

  const handleUpdate = (bookId) => {
    navigate(`/update-book/${bookId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Book Details</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Add Book
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Genre</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left">Published Date</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr
                  key={book.id}
                  className="hover:bg-gray-100 border-b last:border-b-0"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{book.title}</td>
                  <td className="p-4">{book.genre}</td>
                  <td className="p-4">{book.author}</td>
                  <td className="p-4">{book.publishedDate}</td>
                  <td className="p-4">
                     <img
                            src={book.image}
                            alt={book.title}
                            className="w-12 h-12 object-cover rounded"
                            />
                  </td>
                  <td className="p-4 text-center">
                    <button
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 mr-2"
                      onClick={() => handleUpdate(book.id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-6 text-gray-500 italic"
                >
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookdetails;
