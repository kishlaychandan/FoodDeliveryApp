import { useState } from "react";
import styles from "./Recipes.module.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Recipes() {
  const [dish, setDish] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyDL82cBQnkqhjKqXzSYvVQKaD17fhg2Hxk"; // Replace with your actual API key

  async function getRecipe(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecipe("");

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: `Give me a recipe for ${dish}` }] }],
        },
      });

      setRecipe(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.error(error);
      setError("Sorry - Something went wrong. Please try again!");
    }

    setLoading(false);
  }

  return (
  <>
  <Navbar/>
    <div className={styles.recipeContainer}>
      <h1 className={styles.heading}>Find a Recipe</h1>
      <form onSubmit={getRecipe} className={styles.formContainer}>
        <input
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          placeholder="Enter dish name"
          className={styles.inputField}
        />
        <button
          type="submit"
          className={`${styles.submitButton} ${loading ? styles.disabled : ''}`}
          disabled={loading}
        >
          Get Recipe
        </button>
      </form>
      {loading && <p className={styles.loadingMessage}>Loading...</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      {recipe && (
        <div className={styles.recipeResult}>
          <h2>Recipe for {dish}</h2>
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Recipes;
