import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
  },
  paper: {
    marginTop: '45px',
    background: "white",
    borderTopLeftRadius: 20,
  }
});


const Buttons = styled.div`
img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    justify-self: flex-end;
    border: 2px solid var(--dark-blue);
  }
`

const ProfileS = styled.div`
display: flex;
align-items: center;
img {
    width: 50pxx;
    height: 50px;
    border-radius: 50%;
    justify-self: flex-end;
    border: 2px solid var(--dark-blue);
  }
.firstDiv {
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: right;
}
.secondDiv {
    margin-top: 10px;
}
a {
    font-size: 10px;
    color: var(--green-natoure);
}
`

export default function ProfileDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor): JSX.Element => (
    <div
      
      className={classes.drawer}
      role="presentation"   
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ProfileS>
            <div className="firstDiv">
                  <div>
                      <b>Jose Correa</b>
                  </div>
                  <div>
                      <a href="#">Ver y editar Perfil</a>
                  </div>
            </div>
            <div className="secondDiv">
                <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg' alt="avatar"/>
            </div>
     </ProfileS>
                
      <Divider />
      <List>
        {['Mis Métodos de Pago', 'Mis Preferencias de Viaje', 'Mensajes', 'Configuración', 'Ayuda y Asistencia', 'Danos tu Opinión'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Convertirme en Anfitrión'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Buttons>
              
              <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
            alt="profile-pic"
          />
              </Buttons> 
          </Button>
          <Drawer
          classes={{ paper: classes.paper }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
