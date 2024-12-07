import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Booklist = () => {
  const [books, setBooks] = useState([]); 
  const [filters, setFilters] = useState({
    genre: "",
    author: "",
    publicationDate: "",
  });

  const [filteredBooks, setFilteredBooks] = useState([]); 
  useEffect(() => {
    
    axios
      .get("http://localhost:3000/Book")
      .then((response) => {
        setBooks(response.data);
        setFilteredBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Update filters
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    // Apply filters to books
    const filtered = books.filter((book) => {
      const matchesGenre =
        newFilters.genre === "" ||
        book.genre.toLowerCase().includes(newFilters.genre.toLowerCase());
      const matchesAuthor =
        newFilters.author === "" ||
        book.author.toLowerCase().includes(newFilters.author.toLowerCase());
      const matchesPublicationDate =
        newFilters.publicationDate === "" ||
        new Date(book.publicationDate)
          .getFullYear()
          .toString()
          .includes(newFilters.publicationDate);

      return matchesGenre && matchesAuthor && matchesPublicationDate;
    });

    setFilteredBooks(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">E-Library Books</h1>

      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          name="genre"
          placeholder="Filter by Genre"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.genre}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Filter by Author"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.author}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="publicationDate"
          placeholder="Filter by Year (e.g., 2023)"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.publicationDate}
          onChange={handleFilterChange}
        />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
            <p className="text-gray-600">
              Published: {new Date(book.publicationDate).toDateString()}
            </p>
            {/* <Link
              to={`/book/${book.id}`} // Navigate to book details page
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link> */}
          </div>
        ))}
      </div>

     
      {filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No books found!</p>
      )}
    </div>
  );
};

export default Booklist;
