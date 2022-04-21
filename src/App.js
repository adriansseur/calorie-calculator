import { Paper, TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, InputLabel, Select, MenuItem } from '@mui/material'


function App() {
  return (
    <div className="app">
      <Paper elevation={24 } id="paper">
        <form>
          <div className="age-wrapper">
            <FormLabel id="age-label">Age</FormLabel>
            <TextField id="age-input" label="age" helperText="Ages 15-80"/>
          </div>
          <div className="gender-wrapper">
            <FormControl id="gender-form">
              <FormLabel id="gender-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender-label"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="height-wrapper">
            <FormLabel id="height-label">Height</FormLabel>
            <TextField id="height-input" label="feet" />
            <TextField id="height-input" label="inches" />
          </div>
          <div className="weight-wrapper">
            <FormLabel id="weight-label">Weight</FormLabel>
            <TextField id="weight-input" label="pounds" />
          </div>
          <div className="activity-wrapper">
            <FormLabel id="activity-label">Activity</FormLabel>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">select activity level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                // label="Age"
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
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default App;
