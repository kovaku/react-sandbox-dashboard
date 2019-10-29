import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Typography component="h4" align="center">
          About...
        </Typography>
      </Container>
    </div>
  )
}
