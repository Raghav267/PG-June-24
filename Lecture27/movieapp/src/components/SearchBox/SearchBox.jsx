import { useState } from "react";
import axios from "axios";
import styles from "./SearchBox.module.css";
import MovieDisplay from "../MovieDisplay/MovieDisplay";

function SearchBox() {
  const [inputText, setInputText] = useState("");
  const [initialList, setMovieList] = useState([]);

  function handleTextSearch(event) {
    // console.log(event.target.value);
    setInputText(event.target.value);
    // console.log(inputText);
  }

  const baseUrl = "https://api.tvmaze.com/search/shows?q=";

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(inputText);
    axios
      .get(baseUrl + inputText)
      .then((res) => {
        setMovieList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className={styles.sectionClass}>
      <h1>Movie Search Application</h1>
      <div>
        <form onSubmit={handleFormSubmission}>
          <input
            type='text'
            placeholder='Search here !!'
            onChange={handleTextSearch}
          />
          <button type='submit'>Search</button>
        </form>
      </div>

      {initialList.map((movie) => {
        return <MovieDisplay img={movie.show.image.medium}></MovieDisplay>;
      })}
    </section>
  );
}

export default SearchBox;
