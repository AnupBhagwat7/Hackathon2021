import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StepForm from './StepForm';
//import { AppBar, CssBaseline, IconButton, SvgIcon, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Fork © "}
      <Link color="inherit" href="https://github.com/awran5/react-material-ui-step-form">
        Github
      </Link>
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10
  },
  svg: {
    verticalAlign: "middle"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1)
    }
  }
}))


const UserProfile = () => {
  const classes = useStyles()
  return (
    <div className="App">
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <StepForm />
        </Paper>
        {/* <Copyright /> */}
      </main>
    </div>
  )
}

export default UserProfile