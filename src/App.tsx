import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState<string>(''); // Weight should be a string
  const [height, setHeight] = useState<string>(''); // Height should be a string
  const [bmi, setBmi] = useState<string | null>(null); // BMI can be string or null
  const [category, setCategory] = useState<string>(''); // Category is a string

  const calculateBMI = () => {
    if (weight && height) {
      // Convert weight and height to numbers and calculate BMI
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
      const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      if (parseFloat(bmiValue) < 18.5) {
        setCategory('Underweight');
      } else if (parseFloat(bmiValue) >= 18.5 && parseFloat(bmiValue) <= 24.9) {
        setCategory('Normal weight');
      } else if (parseFloat(bmiValue) >= 25 && parseFloat(bmiValue) <= 29.9) {
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

export default App;

