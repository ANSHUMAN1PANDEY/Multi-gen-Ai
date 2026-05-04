export const callAI = async (prompt) => {
  try {
    const res = await fetch("http://localhost:5000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    return data.output;

  } catch (error) {
    return "Error: AI not responding. Please try again.";
  }
};
