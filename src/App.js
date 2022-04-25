import React, { useContext } from 'react';
import { Paper, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import foodBowl from "./media/food_bowl.png"
import { ValidationContext } from './validationContext';


function App() {
  const { validateInput, inputErrors } = useContext(ValidationContext)
  const [calories, setCalories] = React.useState({
    maintainWeight: undefined
  })

  const [formValues, setFormValues] = React.useState({
    age: "",
    gender: "",
    feet: "",
    inches: "",
    pounds: "",
    activity: "1.20"
  })
  
  const [resetMode, setResetMode] = React.useState(false)

  const results = React.useRef()

  function handleInputChange(e) {
    const { name, value } = e.target
    // validation
    validateInput(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  function calculate() {
    const { age, gender, feet, inches, pounds, activity } = formValues
    const weight = parseFloat(pounds) * 0.453592
    const height = ((parseFloat(feet) * 12) + parseFloat(inches)) * 2.54
    const maintainWeightCalories = mifflinStJeorEq(weight, height, age, gender, activity)
    setCalories({
      maintainWeight: maintainWeightCalories
    })
    results.current.classList.toggle("hidden")
    setResetMode(true)
  }

  function reset() {
    setResetMode(false)
    results.current.classList.toggle("hidden")
    setFormValues({
      age: "",
      gender: "",
      feet: "",
      inches: "",
      pounds: "",
      activity: "1.20"
    })
    // console.log(formValues)
  }

  function mifflinStJeorEq(weight, height, age, gender, activity) {
    const maintainWeightCalories = gender === "male" ?
      ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity :
      ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity
    return Math.round(maintainWeightCalories)
  }

  return (
    <div className="app">
      <Paper elevation={24} className="paper">
        <form id="form">
          <Typography id="title" variant='h3'>
            Calorie Calculator
          </Typography>
          {/* Age */}
          <FormLabel id="age-label">Age</FormLabel>
          <TextField id="age-input" label="age" helperText="Ages 15-80" onChange={handleInputChange} name="age" value={formValues.age} error={inputErrors.age} />
          {/* Gender */}
          <FormLabel id="gender-label">Gender</FormLabel>
          <FormControl id="gender-form">
            <RadioGroup
              aria-labelledby="gender-label"
              name="gender"
              row
              onChange={handleInputChange}
              value={formValues.gender}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          {/* Height */}
          <FormLabel id="height-label">Height</FormLabel>
          <div className="height-inputs">
            <TextField id="input-feet" label="feet" onChange={handleInputChange} name="feet" value={formValues.feet} error={inputErrors.feet} />
            <TextField id="input-inches" label="inches" onChange={handleInputChange} name="inches" value={formValues.inches} error={inputErrors.inches} />
          </div>
          {/* Weight */}
          <FormLabel id="weight-label">Weight</FormLabel>
          <TextField id="weight-input" label="pounds" onChange={handleInputChange} name="pounds" value={formValues.pounds} error={inputErrors.pounds} />
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
              // value={formValues.activity}
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
          {resetMode ?
            <Button id="calculate" variant="contained" onClick={reset}>Reset</Button> :
            <Button id="calculate" variant="contained" endIcon={<CalculateIcon />} onClick={calculate}>Calculate</Button>
          }
        </form>
      </Paper>
      <div className='hidden' ref={results}>
        <Paper className='paper' elevation={4}>
          <img src={foodBowl} alt="a food bowl" width="200px" />
          <Typography variant="h5">Calories: {calories.maintainWeight}</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default App;
