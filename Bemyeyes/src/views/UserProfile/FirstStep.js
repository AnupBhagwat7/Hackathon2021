import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

// Destructuring props
const FirstStep = ({ handleNext, handleChange, values: { firstName, lastName, email, gender ,city, date, phone,states,adhar,pan }, formErrors }) => {
  // Check if all values are not empty or if there are some error
   const isValid = 
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email &&
    //states.length > 0 &&
    //!formErrors.states &&
    adhar.length > 0 &&
    !formErrors.adhar &&
    pan.length > 0 &&
    !formErrors.pan 

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            margin="normal"
            value={firstName || ""}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
            required
          />
        </Grid>
{/*        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleChange} name="gender">
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
         <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            value={city || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.city}
            helperText={formErrors.city}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State"
            name="states"
            placeholder="Enter your state"
            value={states || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.states}
            helperText={formErrors.states}
            required
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="date"
            type="date"
            defaultValue={date || "1999-12-31"}
            onChange={handleChange}
            margin="normal"
            required
          />
        </Grid>*/}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone || ""}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
            margin="normal"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Adhar number"
            name="adhar"
            placeholder="i.e: xxxx-xxxx-xxxx"
            value={adhar || ""}
            onChange={handleChange}
            error={!!formErrors.adhar}
            helperText={formErrors.adhar}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="PAN number"
            name="pan"
            placeholder="i.e: XXXXX1111X"
            value={pan || ""}
            onChange={handleChange}
            error={!!formErrors.pan}
            helperText={formErrors.pan}
            margin="normal"
            required
          />
        </Grid>

      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default FirstStep
