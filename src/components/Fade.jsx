import React, { useState, useEffect } from "react";


export default function FadeComponent() {
  const [visible, setVisible] = useState(true);      
  const [shouldRender, setShouldRender] = useState(true); 

  const handleHide = () => {
    setVisible(false);
  };

  useEffect(() => {

    if (!visible) {
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div className={`fade-box ${visible ? "fade-in" : "fade-out"}`}>
      <p>Это элемент с анимацией появления и исчезновения.</p>
      <button onClick={handleHide}>Скрыть элемент</button>
    </div>
  );
}
