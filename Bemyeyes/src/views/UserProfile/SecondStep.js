import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Card } from "@material-ui/core"
import CardHeader from "components/Card/CardHeader"
import CardBody from "components/Card/CardBody"
import Webcam from "react-webcam"
import { Fragment } from "react"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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
    
    const axios = require('axios');

    const verifyOtp = () => {
  
      console.log(otp);
  
      NotificationManager.success('OTP Verified successfully');

      /* NotificationManager.error('Error in verifying aadhar OTP', 'Click me!', 5000, () => {
        alert('callback');
      }); */
/*       axios.post('https:sample-endpoint.com/user', {
        otp : otp    
      })
      .then(function (response) {
        console.log(response);
      })  */
  
    };

  return (
    <div>
    <Fragment>
      <Grid container spacing={2} noValidate>
      <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="OTP"
            name="otp"
            placeholder="Enter OTP"
            value={otp || ""}
            onChange={handleChange}
            error={!!formErrors.otp}
            helperText={formErrors.otp}
            margin="normal"
            required
          />
          <NotificationContainer/>
          <Button variant="contained" color="default" onClick={verifyOtp} style={{ marginRight: 10 }}>
          Verify
        </Button>
      </Grid>

      <Grid>
        <Card>
          <CardHeader color="primary">
            <h5>Capture Photo</h5>
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

      </Grid>


      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
      
    </Fragment>
    
    </div>
  )
}

export default SecondStep
