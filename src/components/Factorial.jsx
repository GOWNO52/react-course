import React, { useState, useMemo } from "react";


function factorial(n) {
  console.log("Вычисляем факториал..."); 
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export default function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        <label>
          Введите число (1–20):{" "}
          <input
            type="number"
            min="1"
            max="20"
            value={number}
            onChange={(e) => {
              let val = parseInt(e.target.value, 10);
              if (isNaN(val)) val = 1;
              if (val < 1) val = 1;
              if (val > 20) val = 20;
              setNumber(val);
            }}
          />
        </label>
      </div>

      <div style={{ marginTop: 10 }}>
        <label>
          Введите имя:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Факториал числа {number} равен: {fact}</strong>
      </div>
    </div>
  );
}

