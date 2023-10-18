import React, { useState } from "react";

const App = () => {
  const [values, setvalues] = useState({
    title: "",
    text: "",
  });

  const henelChenge = (e) => {
    const { name, value } = e.target;

    setvalues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSub = async (e) => {
    e.preventDefault();

    // Assuming 'values' is an object containing the data you want to send

    try {
      const response = await fetch("http://localhost:3500/creatP", {
        method: "POST", // Use the correct HTTP method (e.g., POST)
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(values), // Convert 'values' to JSON format
      });

      if (response.ok) {
        // Request was successful (status code 200)
        const responseData = await response.json(); // If the server sends JSON response
        console.log(responseData);
      } else {
        // Handle error responses here
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Attach the 'handleSub' function to a form or button's click event as needed

  return (
    <div>
      <form onSubmit={handleSub}>
        <input
          type="text"
          placeholder="enter heda"
          name="title"
          onChange={henelChenge}
          value={values.title}
        />
        <textarea
          placeholder="enter heda"
          name="text"
          id=""
          cols="30"
          rows="10"
          value={values.text}
          onChange={henelChenge}
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
