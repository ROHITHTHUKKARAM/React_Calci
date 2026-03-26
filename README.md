# Ex04 Simple Calculator - React Project
## Date:26.03.2026

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM
App.jsx
```
import React from "react";
import Calculator from "./Calculator.jsx";

function App() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
```
Calculator.jsx
```
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
```
Calculator.css
```
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(135deg, #1e1e2f, #2c2c54);
}

/* Center the calculator */
.app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Calculator container */
.calculator {
  backdrop-filter: blur(20px);
  background: rgba(30, 30, 50, 0.85);
  padding: 25px;
  border-radius: 20px;
  width: 320px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

/* Display */
.display {
  background: #0f0f1a;
  color: #00ffcc;
  font-size: 2.5rem;
  padding: 20px;
  border-radius: 12px;
  text-align: right;
  margin-bottom: 20px;
  overflow-x: auto;
}

/* Grid layout */
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

/* Buttons */
button {
  height: 60px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  background: #2e2e42;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

/* Hover */
button:hover {
  background: #3e3e5a;
  transform: scale(1.05);
}

/* Special buttons */
.operator {
  background: #ff9f43;
}

.operator:hover {
  background: #ff7f00;
}

.clear {
  background: #ff4757;
}

.equal {
  background: #2ed573;
  grid-row: span 2;
}

.zero {
  grid-column: span 2;
}
```
## OUTPUT
![alt text](<Screenshot 2026-03-26 204655.png>)
![alt text](<Screenshot 2026-03-26 204956.png>)
![alt text](<Screenshot 2026-03-26 205008.png>)

## RESULT
The program for developing a simple calculator in React.js is executed successfully.
