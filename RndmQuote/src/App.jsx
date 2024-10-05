import React, { useState, useEffect } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("/quotes/random");
      const data = await response.json();
      const randomQuote = data.en;
      const quoteAuthor = data.author;
      localStorage.setItem("lastQuote", randomQuote);
      localStorage.setItem("lastAuthor", quoteAuthor);
      setQuote(randomQuote);
      setAuthor(quoteAuthor);
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    alert("Copied to clipboard!");
  };

  return (
    <div style={styles.container}>
      <p style={styles.quoteText}>{quote}</p>
      <p style={styles.authorText}>- {author}</p>
      <button style={styles.button} onClick={fetchQuote}>
        New Quote
      </button>
      <button style={styles.button} onClick={copyToClipboard}>
        Copy to Clipboard
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
  },
  quoteText: {
    fontSize: "24px",
    textAlign: "center",
    marginBottom: "10px",
  },
  authorText: {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
