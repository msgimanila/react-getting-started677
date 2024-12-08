import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";

// Custom theme for Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

function App() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    if (weight && height) {
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
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            BMI Calculator
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Weight (kg)"
                variant="outlined"
                fullWidth
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Height (m)"
                variant="outlined"
                fullWidth
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                type="number"
                step="0.01"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={calculateBMI}
            >
              Calculate BMI
            </Button>
          </Box>

          {bmi && (
            <Box mt={4} textAlign="center">
              <Typography variant="h6" color="textSecondary">
                Your BMI: {bmi}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Category: {category}
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
