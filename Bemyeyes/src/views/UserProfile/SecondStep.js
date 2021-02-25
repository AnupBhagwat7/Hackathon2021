import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Card } from "@material-ui/core"
import CardHeader from "components/Card/CardHeader"
import CardBody from "components/Card/CardBody"
import Webcam from "react-webcam"

// Destructuring props
const SecondStep = ({ handleNext, handleBack, handleChange, values: { otp }, formErrors }) => {
  
  // Check if all values are not empty or if there are some error
  const isValid =  otp.length > 0 && !formErrors.otp 
  const videoConstraints = {
    width: 800,
    height: 600,
    facingMode: "user"
  };
  
    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        //console.log(imageSrc);
      },
      [webcamRef]
    );
    
  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="OTP"
            name="otp"
            placeholder="xxxxx"
            value={otp || ""}
            onChange={handleChange}
            error={!!formErrors.otp}
            helperText={formErrors.otp}
            margin="normal"
            required
          />
        </Grid>

        <Card>
          <CardHeader color="primary">
            <h4>Capture Photo</h4>
          </CardHeader>
          <CardBody>
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={600}
              videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture</button>
          </CardBody>
        </Card>

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
