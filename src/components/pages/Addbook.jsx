import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishedDate: "",
    image: "", 
  });

  const navigate = useNavigate();


  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.genre) newErrors.genre = "Genre is required";
    if (!formData.publishedDate) newErrors.publishedDate = "Published date is required";
    if (!formData.image) newErrors.image = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:3000/Book", formData);
      console.log("Book added successfully:", response.data);

      
      setFormData({
        title: "",
        author: "",
        genre: "",
        publishedDate: "",
        image: "",
      });
      setSuccessMessage("Book added successfully!");
       navigate("/bookdetails");
    } catch (error) {
      console.error("Error adding book:", error.message);
  
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-gray-100 rounded shadow-md w-full max-w-md"
      >
        <h3 className="text-lg font-bold mb-4">Add Book</h3>

        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.publishedDate && (
            <p className="text-red-500 text-sm">{errors.publishedDate}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
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
