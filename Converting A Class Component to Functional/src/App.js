import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="emoji">
      {" "}
      💓 {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Like!</button>
      <button onClick={() => setCount(count - 1)}>Dislike!</button>
    </div>
  );
}
