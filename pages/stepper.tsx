import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '../styles/general/Button'
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/onboarding/Jumbo'
import Jumbo1 from '../styles/onboarding/Jumbo1'
import Jumbo2 from '../styles/onboarding/Jumbo2'
import Global from '../styles/onboarding/Global'
import Head from 'next/head'

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    position: 'absolute',
    height: 22,
    alignItems: 'center',
    backgroundColor: '#06bc68'
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['', '', ''];
}



export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent (step: number)  {
    switch (step) {
      case 0:
        return  <Global>
        <Jumbo>
          <main>
          <img width="10%" src="https://i.postimg.cc/TYmh7Jp3/natoure-logo.png" alt="logo" />
          <h3>
            Explora
          </h3>
          <p>
          los lugares más espectaculares de Latinoamérica, las especias que existen, así como <span>actividades únicas</span> que cambiaran tu forma de viajar.
          </p>
          <Button
                btnType="primary"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
         </Button>
         
          </main>
        </Jumbo>

        </Global>;
      case 1:
        return <Global>
        <Jumbo1>
          <main>
          <img width="10%" src="https://i.postimg.cc/TYmh7Jp3/natoure-logo.png" alt="logo" />
          <h3>
          Conéctate
          </h3>
          <p>
          con comunidades y personas que te guiarán a <span>aventuras inolvidables</span>
          </p>
          <Button
                btnType="primary"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
              </Button>
          </main>
        </Jumbo1>

        </Global>;
      case 2:
        return <> 
        <Global>
        <Jumbo2>
          <main>
          <img width="10%" src="https://i.postimg.cc/TYmh7Jp3/natoure-logo.png" alt="logo" />
          <h3>
            Conserva
          </h3>
          <p>
          la biodiversidad en <span>Áreas protegidas</span> donde cada uno de tus viajes apoyará este fin
          </p>
          <Button
                btnType="primary"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
              </Button>
          </main>
        </Jumbo2>
        </Global>
      </>
        
      default:
        return 'Unknown step';
    }
  }

  return (
      <>
    <Head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta name="description" content="Description" />
    <meta name="keywords" content="Keywords" />
    <title>Natoure</title>
    <link rel="manifest" href="/manifest.json" />
    <link href="/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
    <link rel="apple-touch-icon" href="/apple-icon.png"></link>
    <meta name="theme-color" content="#317EFB" />
  </Head>
    <div className={classes.root}>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button btnType="primary" onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
              
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
     );
    }