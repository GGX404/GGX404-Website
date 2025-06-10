import React, { useState } from "react";
import Example from "./assets/Components/newnav";

const FactChecker = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("submitQuery").click();
    }
  });
  
 
  const handleSubmit = async () => {
    const queryReason = document.getElementById("queryReason").value;
    
    const query = `Reason: ${queryReason}`;

    setLoading(true);
    setOutput(""); // Clear previous output

    try {
      const response = await fetch(`https://gemini-api-6140554430.europe-west1.run.app/api`, {
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
  const titleObject = document.getElementById("title-object");
  if (titleObject) {
    titleObject.innerHTML = "Fact Checker";
  } else {
    document.title = "Fact Checker"; // Fallback for older browsers
  }
  return (
    <div className="text-center text-gray-100 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-8/12 text-center ml-auto mr-auto p-2.5">
      <h1 className="text-6xl">Fact Checker</h1>
      <p id="factchecker">This tool is used to fact check statements from messages. Input your message and AI will show you what was correct and what was false.</p>
      <input
        type="text"
        id="queryReason"
        placeholder="Input statement to fact check"
        maxLength="500"
        className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-100 outline-1 -outline-offset-1 outline-gray-900/50 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-md/6 md:w-[60%] sm:max-sm:w-[120%]  m-4"
      />
      <br />
      <button id="submitQuery" onClick={handleSubmit} className=" bg-gradient-to-l to-blue-500 from-green-400 inset-x-0 bottom-0 w-6/12 ml-auto mr-auto mb-3 p-2.5 rounded-md hover:text-gray-700 text-white shadow-md/90 shadow-blue-700 sm:max-sm:grid-cols-1">
        Submit
      </button>
      {loading && <div id="loading">Loading...</div>} {/* Loading indicator */}
      <div id="output" style={{ margin: "10px"}}>{output}</div> {/* Text for the prompt answer. */}
      <footer style={{ fontSize: "12px", marginTop: "20px", color: "#888" }}>
        Disclaimer: This is AI. It can (and often will) get things wrong. Take
        it with a grain of salt.
      </footer>
      </div>
    </div>
  );
};

export default FactChecker;