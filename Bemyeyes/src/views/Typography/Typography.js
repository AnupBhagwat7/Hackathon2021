import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
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
  const {
    startSpeechToText,
    stopSpeechToText,
    isRecording,
    error,
    results
  } = useSpeechToText({
    timeout: 10000,
    continuous: true,
    crossBrowser: true,
    googleApiKey: process.env.REACT_APP_API_KEY
  });

  if (error) {
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '100px auto',
          textAlign: 'center'
        }}
      >
        <p>
          {error}
          <span style={{ fontSize: '3rem' }}>🤷‍</span>
        </p>
      </div>
    );
  }
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Voice Recognition</h4>
        <p className={classes.cardCategoryWhite}>
          Created using Roboto Font Family
        </p>
      </CardHeader>
      <CardBody>
          <div
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
        </div>
      </CardBody>
    </Card>
  );
}
