import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// Destructuring props
const SecondStep = ({ handleNext, handleBack, handleChange, values: { city, date, phone }, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid = city.length > 0 && !formErrors.city && date.length > 0 && phone.length > 0 && !formErrors.phone

  return (
    <>
      <Grid container spacing={2}>
        
      </Grid>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </>
  )
}

export default SecondStep
