import React, { useState } from "react";

const FactChecker = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const queryReason = document.getElementById("queryReason").value;
    
    const query = `Reason: ${queryReason}`;

    setLoading(true);
    setOutput(""); // Clear previous output

    try {
      const response = await fetch(`https://api-617960092201.us-central1.run.app/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server");
      }

      const data = await response.json();

      // Hide the loading indicator and display the response
      setLoading(false);
      setOutput(data.response); // Use innerHTML for HTML content
    } catch (error) {
      // Hide the loading indicator and display an error message
      setLoading(false);
      setOutput("Failed to fetch data from the server.");
      console.error(error);
    }
  };

  return (
    <div className="main" style={{ margin: "20px auto", padding: "20px", maxWidth: "600px", textAlign: "center" }}>
      <h1>Fact Checker</h1>
      <p>This tool is used to fact check statements from messages. Input your message and AI will show you what was correct and what was false.</p>
      
      <input
        type="text"
        id="queryReason"
        placeholder="Enter the reason for the query."
        maxLength="500"
        className="fact-checker"
      />
      <br />
      <button id="submitQuery" onClick={handleSubmit} className="fact-checker">
        Submit
      </button>
      {loading && <div id="loading">Loading...</div>} {/* Loading indicator */}
      <div id="output">{output}</div> {/* Text for the prompt answer. */}
      <footer>
        Disclaimer: This is AI. It can (and often will) get things wrong. Take
        it with a grain of salt.
      </footer>
    </div>
  );
};

export default FactChecker;