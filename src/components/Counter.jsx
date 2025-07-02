import { useState } from "react";

function CounterWithLimit() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Счётчик не может быть больше 10!");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    } else {
      setMessage("Счётчик не может быть меньше 0!");
    }
  };

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={increase}>Увеличить</button>
      <button onClick={decrease}>Уменьшить</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}

export default CounterWithLimit;
