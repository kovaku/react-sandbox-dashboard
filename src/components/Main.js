import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../context/AppContext'
import Tags from './views/Tags'
import About from './views/About'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function Main(props) {
  const classes = useStyles();
  const context = useContext(AppContext);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      { context.state.view === 'Tags' ? <Tags /> : <About /> }
    </main>
  )
}
