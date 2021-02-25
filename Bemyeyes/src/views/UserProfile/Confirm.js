import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"

// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {
  const { firstName, lastName, email, phone , adhar,pan } = values

  const handleSubmit = () => {
    // Do whatever with the values
    console.log(values);
    // Show last compinent or success message
/*      const axios = require('axios')

    axios.post('https:sample-endpoint.com/user', {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone:values.phone,
      adhar: values.adhar,
      pan: values.pan      
    })
    .then(function (response) {
      console.log(response);
    });  */

    handleNext()
  }

  return (
    <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Mobile" secondary={phone} />
        </ListItem>
 
        <Divider />

         <ListItem>
          <ListItemText primary="Aadhar number" secondary={adhar} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="PAN number" secondary={pan} />
        </ListItem>
      </List>

      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" onClick={handleSubmit}>
          Confirm & Submit
        </Button>
      </div>
    </Fragment>
  )
}

export default Confirm
