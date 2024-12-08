import React, { useState } from 'react';

// MUI components
const { Button, TextField, Typography, Box } = window['material-ui'];

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
      setBmi(parseFloat(bmiValue));

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
    <Box style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>BMI Calculator</Typography>

      <Box style={{ marginBottom: '15px' }}>
        <TextField
          label="Weight (kg)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          fullWidth
        />
      </Box>

      <Box style={{ marginBottom: '15px' }}>
        <TextField
          label="Height (m)"
          variant="outlined"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          fullWidth
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={calculateBMI}
        style={{ margin: '10px' }}
      >
        Calculate BMI
      </Button>

      {bmi && (
        <Box style={{ marginTop: '20px' }}>
          <Typography variant="h5">Your BMI: {bmi}</Typography>
          <Typography variant="h6">Category: {category}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default App;
