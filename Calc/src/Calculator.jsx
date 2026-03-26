import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => setInput("");

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleSymbol = (btn) => {
    if (btn === "C") return clearDisplay();
    if (btn === "=") return calculateResult();
    if (btn === "÷") return handleClick("/");
    if (btn === "×") return handleClick("*");
    return handleClick(btn);
  };

  const buttons = [
    "C", "÷", "×", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "=",
    "1", "2", "3",
    "0", "."
  ];

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{input || "0"}</div>

        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleSymbol(btn)}
              className={
                btn === "C"
                  ? "clear"
                  : btn === "="
                  ? "equal"
                  : ["+", "-", "×", "÷"].includes(btn)
                  ? "operator"
                  : btn === "0"
                  ? "zero"
                  : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;