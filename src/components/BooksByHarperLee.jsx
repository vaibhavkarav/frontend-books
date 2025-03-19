import useFetch from "../useFetch";

const BooksByHarperLee = ({ author }) => {
  const { data, loading } = useFetch(
    `https://backend-books-beryl.vercel.app/books/author/${author}`
  );

  return data ? (
    <div>
      <h2>Books by Harper Lee</h2>
      <ul>
        {data.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BooksByHarperLee;
