import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '../styles/general/Button'
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Jumbo from '../styles/onboarding/Jumbo'
import Jumbo1 from '../styles/onboarding/Jumbo1'
import Jumbo2 from '../styles/onboarding/Jumbo2'
import Global from '../styles/onboarding/Global'
import Head from 'next/head'
import { useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import { ApolloLink, from, HttpLink } from '@apollo/client';

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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
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
    h2: {
      textAlign: 'center',
    },
    buttonmodal: {
      width: '100%',
      marginBottom: '20px',
      border: '1px solid',
      fontWeight: 'normal',
      fontSize: '12px',
    },
    flexModal: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      color: 'gray',
      marginTop: '10px',
      marginBottom: '10px',
    },
    buttonmodal2: {
      width: '100%',
      marginBottom: '20px',
      border: '1px solid',
      background: 'white',
      fontWeight: 'normal',
      fontSize: '12px',
      color: 'black'
    },
    marginauto: {
      marginRight: '10px',
    },
    bold: {
      fontWeight: 'bold',
    },
    paper: {
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 'auto',
      width: '70%',
      height: '70%',
      borderRadius: 16,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function getSteps() {
  return ['', '', ''];
}



export default function CustomizedSteppers() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getStepContent (step: number)  {
    switch (step) {
      case 0:
        return <Global>
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
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
         </Button>
         
        <img className="dots" src="https://i.postimg.cc/rsmjn6vz/Stepper1.png" alt="Stepper DOTS"></img>
          </main>
        </Jumbo>
        </Global>
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
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Siguiente'}
              </Button>
            <img className="dots" src="https://i.postimg.cc/QN1yH53y/Stepper2.png" alt="Stepper DOTS"></img>
          </main>
        </Jumbo1>

        </Global>;
      case 2:
        return  <Global>
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
                onClick={handleOpen}
              >
                {activeStep === steps.length - 1 ? 'Comienza tu experiencia' : 'Siguiente'}
              </Button>
              <img className="dots" src="https://i.postimg.cc/W3R7vWhb/Stepper-3.png" alt="Stepper DOTS"></img>
          </main>
        </Jumbo2>
        </Global>
        
      default:
        return 'Unknown step';
    }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.h2}>Inicia Sesión</h2>
      <p id="simple-modal-description" className={classes.h2}>
        <Button
        btnType="secondary"
        className={classes.buttonmodal}>
          <img className={classes.marginauto} src="https://i.postimg.cc/qRdZLMcL/facebook-logo-3x.png" alt="Facebook Logo" width="5%"></img> INGRESAR CON <span className={classes.bold}>FACEBOOK</span>
        </Button>
        <Button
        btnType="secondary"
        className={classes.buttonmodal2}>
          INGRESAR CON <span className={classes.bold}>GOOGLE</span>
        </Button>
        <p>--O ingresa con tu Correo--</p>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Correo Electronico"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Password"
          type="password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.flexModal}>
        <p>Registrate</p> <p>Olvidaste tu contraseña?</p>
        </div>
      <Button
        btnType="primary">
          Ingresar
        </Button>
      </p>
      
    </div>
  );


  return (
      <>
    <div className={classes.root}>
      <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        {activeStep === steps.length ? (
          <div>
          </div>
        ) : (
          <div>
              {getStepContent(activeStep)}
            <div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
     );
    }