import React from 'react';
import './App.css';
import { Box, Container, CssBaseline, makeStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ResumePageEN from './components/pages/ResumePageEN';
import Nav from './components/Nav';
import ResumePage from './components/pages/ResumePage';
import Footer from './components/pages/Footer';
import Projects from './components/pages/Projects';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: "100%"
  },
  footer: {
    padding: "2%",
    marginTop: 'auto',
    marginLeft: 'auto',
  }
})

const App = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />      
      <Container className={classes.root}>
        <Box my={5}>
          <Nav />
        </Box>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={ResumePageEN} />
        <Route path="/resume.cn" component={ResumePage} />
        <footer className={classes.footer}>
          <Footer/>
        </footer>
      </Container>
  </div>
  );
}

export default App;
