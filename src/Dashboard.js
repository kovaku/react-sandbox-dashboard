import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import Main from './components/Main';
import { ContextProvider } from './context/AppContext'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

export default function Dashboard() {

  const classes = useStyles();

  return (
    <ContextProvider>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <SidePanel />
        <Main />
      </div>
    </ContextProvider>
  );
}