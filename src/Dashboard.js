import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseLine'
import Navbar from './NavBar';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="">
        <CssBaseline />
        <Navbar title="Dashboard" />
      </div>
    );
  }
}

export default Dashboard;
