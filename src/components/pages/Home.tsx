import {data, contactItems, skills} from '../../constants/Data'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Button, Typography, Grid, CardActions, Icon } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  paper: {
    minHeight: "65px",
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  media: {
    width: "100%",
    minHeight: 250,
    minWidth: 250,
  },
  skills: {
    fontVariant: "all-small-caps",
    fontSize: "large",
    border: "thin",
    borderStyle: "dotted",
    borderRadius: "5px",
    margin: "5px 5px 5px 8px",
    padding: "5px",
    background: "#dbe9f1",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#0a3f5e"
  },
  contact: {
    margin: "20px 10px 0px 0px",
  },
  items: {
    margin: "5px",
  },
  links: {
    color: "black",
    borderBottomStyle: "dotted",
    border: "thin",
  },
  header: {
    textAlign: "left",
    padding: "5%",
    margin: "1%"
  }
});

const Home = (props:any) => {
  const {firstName, lastName, headline, profilePic} = data
  const profilepic= "images/" + profilePic;
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={12}>
        <Card>
          <Grid container className={classes.root}>
            <Grid item sm={3} className={classes.media}>
              <CardMedia
                className={classes.media}
                image={profilepic}
              />
            </Grid>
            {/* Main card title and text */}
            <Grid item sm={6}>
              <CardContent className={classes.header}>
                <Typography gutterBottom variant="h2" component="h2">
                  Hi, I'm {firstName}, {lastName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {headline}
                </Typography>
                
                {contactItems.map(item => {
                return <Button
                    variant="contained"
                    color="default"
                    className={classes.contact}
                    href={item.href}
                    key={contactItems.indexOf(item)}
                    aria-label={item.text}>
                    <Icon className={item.icon}/>
                </Button>})}
                
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
{/* End main card */}

{/* Begin 'about me' card */}
      <Grid item xs={12} >
        <Card className={classes.root}>
            <CardContent>
              <Typography variant="body2" gutterBottom>
              Strong Cloud knowledge. AWS certified professional. Oracle cloud software developer.
Strong Java knowledge. Familiar with Spring Framework, Microservices, etc.
Strong Containerization and Serverless knowledge. Familiar with Kubernetes and Docker, and AWS Lambda.
Strong DevOps knowledge. AWS Certified DevOps Professional. Familiar with CI/CD tools.
Actively learning new technologies.

AWS Certified Solutions Architect - Professional | AWS Certified DevOps Engineer - Professional | AWS Certified Solutions Architect – Associate | AWS Certified SysOps Administrator - Associate | AWS Certified Developer - Associate 
              </Typography>
            </CardContent>
        </Card>
      </Grid> 
{/* End about me */}

{/* Begin skills card */}
      <Grid item >
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Technical Skills
            </Typography>
            <CardActions className={classes.paper}>
              {skills.map(skill => <span className={classes.skills} key={skill.name}><code>{skill.name}</code></span>)}
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid> // End container
  );
}

export default Home;