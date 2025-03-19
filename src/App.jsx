import "./App.css";
import AddBookForm from "./components/AddBookForm";
import BookByTitle from "./components/BookByTitle";
import Books from "./components/Books";
import BooksByHarperLee from "./components/BooksByHarperLee";

function App() {
  return (
    <main>
      <AddBookForm />
      <Books />
      <BookByTitle title={"Shoe Dog"} />
      <BooksByHarperLee author={"Harper Lee"} />
    </main>
  );
}

export default App;
