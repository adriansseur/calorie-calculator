import React from 'react';
import { Paper, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';


function App() {
  const [formValues, setFormValues] = React.useState({
    age: undefined,
    gender: undefined,
    feet: undefined,
    inches: undefined,
    pounds: undefined,
    activity: "1.20"
  })

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  function calculate() {
    console.log(formValues)
  }

  return (
    <div className="app">
      <Paper elevation={24} id="paper">
        <form id="form">
          <Typography id="title" variant='h3'>
            Calorie Calculator
          </Typography>
          {/* Age */}
          <FormLabel id="age-label">Age</FormLabel>
          <TextField id="age-input" label="age" helperText="Ages 15-80" onChange={handleInputChange} name="age" />
          {/* Gender */}
          <FormLabel id="gender-label">Gender</FormLabel>
          <FormControl id="gender-form">
            <RadioGroup
              aria-labelledby="gender-label"
              name="gender"
              row
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          {/* Height */}
          <FormLabel id="height-label">Height</FormLabel>
          <div className="height-inputs">
            <TextField id="input-feet" label="feet" onChange={handleInputChange} name="feet" />
            <TextField id="input-inches" label="inches" onChange={handleInputChange} name="inches" />
          </div>
          {/* Weight */}
          <FormLabel id="weight-label">Weight</FormLabel>
          <TextField id="weight-input" label="pounds" onChange={handleInputChange} name="pounds" />
          {/* Activity */}
          <FormLabel id="activity-label">Activity</FormLabel>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">select activity level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValues.activity}
              label="select activity level"
              onChange={handleInputChange}
              name="activity"
            >
              <MenuItem value={"1.00"}>BMR</MenuItem>
              <MenuItem value={"1.20"}>Sedentary</MenuItem>
              <MenuItem value={"1.37"}>Light</MenuItem>
              <MenuItem value={"1.46"}>Moderate</MenuItem>
              <MenuItem value={"1.55"}>Active</MenuItem>
              <MenuItem value={"1.73"}>Very Active</MenuItem>
              <MenuItem value={"1.90"}>Extra Active</MenuItem>
            </Select>
          </FormControl>
          <Button id="calculate" variant="contained" endIcon={<CalculateIcon />} onClick={calculate}>
            Calculate
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
