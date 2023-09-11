import "./styles.css";
import { useState } from "react";

export default function App() {
  console.log("Resetting values...#1"); // 1
  let c = 0;
  console.log(`${++c} - App() triggered#2`); // 2
  const [count, setCount] = useState(0);

  const handleCountChange = (e) => {
    console.log(`${++c} - handleCountChange() triggered#3`); // 3
    setCount(e.target.value);
  };

  console.log(`${++c} - count=${count}#4`); // 4

  return (
    <div>
      {console.log(`${++c} - JSX returned#5`)} {/* // 5 */}
      <input
        type="number"
        name="name"
        value={count}
        onChange={handleCountChange}
      />
    </div>
  );
}
