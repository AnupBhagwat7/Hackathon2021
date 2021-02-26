import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import useSpeechToText from './Hooks';
import micIcon from './mic.svg';
import Button from "components/CustomButtons/Button.js";
import { TextField, Box } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';
import IconButton from '@material-ui/core/IconButton';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MicNoneIcon from '@material-ui/icons/MicNone';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  input: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  output: {
    background: 'linear-gradient(45deg, #008000 30%, #0000FF 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  // const {
  //   startSpeechToText,
  //   stopSpeechToText,
  //   isRecording,
  //   error,
  //   results
  // } = useSpeechToText({
  //   timeout: 10000,
  //   continuous: true,
  //   crossBrowser: true,
  //   googleApiKey: process.env.REACT_APP_API_KEY
  // });

  // if (error) {
  //   return (
  //     <div
  //       style={{
  //         maxWidth: '600px',
  //         margin: '100px auto',
  //         textAlign: 'center'
  //       }}
  //     >
  //       <p>
  //         {error}
  //         <span style={{ fontSize: '3rem' }}>🤷‍</span>
  //       </p>
  //     </div>
  //   );
  // }
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const command = {
    "open" : "open side bar"
  }

  const handleSaveNote = () => {

    setSavedNotes([...savedNotes, note, command[note]?command[note]:"sorry, I didnt get that."])
    setNote("")
  }
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Voice Recognition</h4>
        <p className={classes.cardCategoryWhite}>
          Welcome to Admin support
        </p>
      </CardHeader>
      <CardBody>
      <div>
      <div className="container">
        <Grid container spacing={2} noValidate>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={8}>
            <form noValidate autoComplete="off">
              <TextField fullWidth label={note} variant="outlined" disabled={true}/>
            </form>
          </Grid>
          <Grid item xs={12} sm={2}>
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleSaveNote} disabled={!note}>
                <SendIcon />
              </IconButton>
            {/* <button onClick={handleSaveNote} disabled={!note}> Save Note </button> */}
            {isListening ? 
            (
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setIsListening(prevState => !prevState)}>
                <MicIcon />
              </IconButton>
            // <button onClick={() => setIsListening(prevState => !prevState)}> Stop
            // </button>

             ) : (
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setIsListening(prevState => !prevState)}>
                <MicNoneIcon />
              </IconButton>
            //  <button onClick={() => setIsListening(prevState => !prevState)}> Start</button>
             )}
          </Grid>
        </Grid>
        </div>
        <div className="box">
          {savedNotes.map((n,i) => 
          i%2==0 ? 
          (<Grid container spacing={2} noValidate>
              <Grid item xs={12} sm={2}>  
              </Grid>
              <Grid item xs={12} sm={10}>
                <Box className={classes.input}><p key={n}>{n}</p></Box>
              </Grid>
            </Grid>
          ) :
          (<Grid container spacing={2} noValidate>
              <Grid item xs={12} sm={10}>
                <Box className={classes.output}><p key={n}>{n}</p></Box>  
              </Grid>
              <Grid item xs={12} sm={2}>
              </Grid>
          </Grid>)
        )
        }
        </div>
      </div>
    
          {/* <div
          style={{
            maxWidth: '600px',
            margin: '100px auto',
            textAlign: 'center'
          }}
        >
          <h1>Recording: {isRecording.toString()}</h1>
          <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
            <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
            <img data-recording={isRecording} src={micIcon} alt="" />
          </button>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div> */}
      </CardBody>
    </Card>
  );
}
