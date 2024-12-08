import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

 function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      // Calculate BMI
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div className="input-container">
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>

          <div>
            <label>Height (m):</label>
            <input
              type="number"
              step="0.01"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </div>
        </div>

        <button onClick={calculateBMI} className="calculate-btn">
          Calculate BMI
        </button>

        {bmi && (
          <div className="result">
            <h3>Your BMI: {bmi}</h3>
            <h4>Category: {category}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
