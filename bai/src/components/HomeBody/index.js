import { Button, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

const image1 = require('./../../assets/img/header/bai-img-13.jpg');
const image2 = require('./../../assets/img/header/bai-img-11.jpg');
const image3 = require('./../../assets/img/header/bai-img-14.jpg');

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        position: 'relative',
        padding: theme.spacing(0),
    },
    cardMedia: {
        flexGrow: 1,
        height: 380,
        color: theme.palette.common.white,
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    title: {
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    cardText: {
        margin: theme.spacing(5),
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}))(Button);

function HomeBody(props) {
    const { classes } = props;

    return (
        <Container className={classes.root}> 
        
        <Container className={classes.root}> 
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.container}>    
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" className={classes.cardMedia} image={image1}>
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            Fostering an including, end-to-end ecosystem
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            Our initiatives include an academic positions mentorship program, events at 
                            various conferences related to AI, advocacy, and community building 
                            (through our online forums).
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/#/programs">
                            See Our Programs
                        </ColorButton>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        
        <Container className={classes.root}> 
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.container}>    
                    <Grid item xs={12} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            A vibrant online community
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            We use the Facebook group for social discussions related to AI or being a Black 
                            researcher. We use the forum to aggregate scholarships, fellowships, internship 
                            and job opportunities, summer schools, or research related discussions.
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="https://docs.google.com/forms/d/1pv34QhQE74gBnDu2xTdLmMNnWykY5tN2wihWIh7mwrQ/viewform?edit_requested=true">
                            Join Us
                        </ColorButton>
                    </Grid>
                    <Container className={classes.cardMedia} style={{ backgroundImage: `url(${image2})` }}>    
                        {<img style={{ display: 'none' }} alt="" src={image2} />}
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12}>
                        <Container className={classes.cardMedia} style={{ backgroundImage: `url(${image3})` }}>    
                            {<img style={{ display: 'none' }} alt="" src={image3} />}
                        </Container>
                    </Grid>
                    <Grid item xs={12} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            A global network of partners
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            Partners play a key role in accelerating our mission and impact through 
                            making our workshop feasible and sustaining our community
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/#/partnership">
                            Learn More
                        </ColorButton>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

        </Container> 
        
    );
}

HomeBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBody);
