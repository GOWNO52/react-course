

import React, { useState } from "react";

function WelcomeMessage({ username }) {
  return <h2>Привет, {username}!</h2>;
}

function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <button onClick={toggle}>
      {isOn ? "Включено" : "Выключено"}
    </button>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Счётчик не может быть больше 10!");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    } else {
      setMessage("Счётчик не может быть меньше 0!");
    }
  };

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={decrement}>- count</button>
      <button onClick={increment}>+ count</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
}

function FruitApp() {
  const fruits = ["Яблоко", "Банан", "Апельсин"];

  return (
    <div>
      <h1>Пример</h1>
      <WelcomeMessage username="Davut Gay" />

      <ToggleButton />

      <Counter />

      <h2>Список фруктов:</h2>
      <ItemList items={fruits} />
    </div>
  );
}

export default FruitApp;


