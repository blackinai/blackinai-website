import { ButtonBase, Container } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';


const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

function Workshops(props) {
    const { classes } = props;

    const workshops = [
        {
            img: require('./../../assets/img/general/renaissance_long_beach_hotel.jpg'),
            title: 'Black in AI 2017',
            width: '30%',
            url: '/#/workshop/bai2017',
        },
        {
            img: require('./../../assets/img/general/montreal_convention_centre.jpg'),
            title: 'Black in AI 2018',
            width: '40%',
            url: '/#/workshop/bai2018',
        },
        {
            img: require('./../../assets/img/general/vancouver_convention_center.jpg'),
            title: 'Black in AI 2019',
            width: '30%',
            url: '/#/workshop/bai2019',
        },
        {
            img: require('./../../assets/img/general/vancouver_neurips_2020.jpg'),
            title: 'Black in AI 2020',
            width: '100%',
            url: 'https://blackinai2020.vercel.app/',
        },
        {
            img: require('./../../assets/img/general/convention_centre_sydney.jpeg'),
            title: 'Black in AI 2021 - Comming Soon',
            width: '100%',
            url: 'https://nips.cc/Conferences/2021/',
        },
    ];

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" marked="center" align="center" component="h2">
                Black in AI Workshops
            </Typography>
            <div className={classes.images}>
                {workshops.map((key) => (
                    <ButtonBase key={key.title} href={key.url} className={classes.imageWrapper} style={{ width: key.width,}}>
                        <div className={classes.imageSrc} style={{ backgroundImage: `url(${key.img})`}} />
                        <div className={classes.imageBackdrop} />
                        <div className={classes.imageButton} >
                            <Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle} >
                                {key.title}
                                <div className={classes.imageMarked} />
                            </Typography>
                        </div>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
}

Workshops.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshops);