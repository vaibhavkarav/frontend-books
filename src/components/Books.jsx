import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading } = useFetch(
    "https://backend-books-beryl.vercel.app/books"
  );

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://backend-books-beryl.vercel.app/books/${bookId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        console.log("Failed to delete book.");
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  return data ? (
    <div>
      <h2>All Books</h2>
      <ul>
        {data.map((book) => (
          <li key={book._id}>
            {book.title} {""} {""}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default Books;
