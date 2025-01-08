import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const text = `hi how are you i am fine my name is gaurav and i work at paytm`;
  const words = text.split(" ");
  const [colors, setColors] = useState(Array(words.length).fill("#000000"));
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  console.log(getRandomColor());
  useEffect(() => {
    let interval = setInterval(() => {
      setColors(colors.map(() => getRandomColor()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {words.map((word, index) => (
        <span key={index} style={{ color: colors[index], marginRight: "5px" }}>
          {word}
        </span>
      ))}
    </div>
  );
}
