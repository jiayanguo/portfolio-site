import { Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { images } from "../../constants/Data";
import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  });

const Projects = (props: any) => {
    const classes = useStyles();
    return (
        <Grid container spacing={5} className={classes.root}>
            <Grid item xs={12}>
                <div>
                    <SimpleImageSlider
                        showNavs={true}
                        showBullets={true}
                        width={896}
                        height={504}
                        images={images}
                    />
                </div>
            </Grid>
        </Grid>   
                    
       )

}

export default Projects