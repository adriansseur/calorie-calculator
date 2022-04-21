import { Paper, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';


function App() {
  return (
    <div className="app">
      <Paper elevation={24 } id="paper">
        <form id="form">
          <Typography id="title" variant='h3'>
            Calorie Calculator
          </Typography>
          {/* Age */}
          <FormLabel id="age-label">Age</FormLabel>
          <TextField id="age-input" label="age" helperText="Ages 15-80" />
          {/* Gender */}
          <FormLabel id="gender-label">Gender</FormLabel>
          <FormControl id="gender-form">
            <RadioGroup
              aria-labelledby="gender-label"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          {/* Height */}
          <FormLabel id="height-label">Height</FormLabel>
          <div className="height-inputs">
            <TextField id="input-feet" label="feet"  />
            <TextField id="input-inches" label="inches" />
          </div>
          {/* Weight */}
          <FormLabel id="weight-label">Weight</FormLabel>
          <TextField id="weight-input" label="pounds" />
          {/* Activity */}
          <FormLabel id="activity-label">Activity</FormLabel>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">select activity level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="select activity level"
              // onChange={handleChange}
            >
              <MenuItem value={1.00}>BMR</MenuItem>
              <MenuItem value={1.20}>Sedentary</MenuItem>
              <MenuItem value={1.37}>Light</MenuItem>
              <MenuItem value={1.46}>Moderate</MenuItem>
              <MenuItem value={1.55}>Active</MenuItem>
              <MenuItem value={1.73}>Very Active</MenuItem>
              <MenuItem value={1.90}>Extra Active</MenuItem>
            </Select>
          </FormControl>
          <Button id="calculate" variant="contained" endIcon={<CalculateIcon />}>
            Calculate
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
