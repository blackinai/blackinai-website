import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Link, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from './../Typography';


const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.dark,
        fontFamily: theme.typography.h1.fontFamily,
        color: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        height: 90,
    },
    icons: {
        display: 'flex',
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    chip: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: "40px",
    }
});

function Copyright() {
    return (
        <React.Fragment>
            {' © '}
            <Link color="inherit" href="/">
                Black in AI
            </Link>{' '}{new Date().getFullYear()}{' '}
            <Typography style={{ color:'#f8f7f7'}} variant="body2" marked="left" gutterBottom>
                Website develop by <Link color="inherit" href="https://github.com/mirianfsilva">@mirianfsilva</Link>
            </Typography>
        </React.Fragment>
    );
}

function Donate(){
    return (
        <form id='my-donate-form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener">
            <input type="hidden" name="cmd" value="_donations"/>
            <input type="hidden" name="business" value="organizers@blackinai.org"/>
            <input type="hidden" name="lc" value="US"/>
            <input type="hidden" name="item_name" value="Black in AI Fundraiser"/>
            <input type="hidden" name="item_number" value="Thanks for your kind contribution. Funds are used to support Black in AI initiatives."/>
            <input type="hidden" name="no_note" value="0"/>
            <input type="hidden" name="currency_code" value="USD"/>
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="paypal button for donations" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>
    );
}

function Footer(props) {
    const { classes } = props;

    const socialList = [
        { id: 1, name: "Facebook", link: 'https://www.facebook.com/blackinai', image: <FontAwesomeIcon icon={["fab", "facebook"]} /> },
        { id: 2, name: "Twitter", link: 'https://twitter.com/black_in_ai', image: <FontAwesomeIcon icon={["fab", "twitter"]} /> },
        { id: 3, name: "Instagram", link: 'https://www.instagram.com/blackinai/', image: <FontAwesomeIcon icon={["fab", "instagram"]} /> },
        { id: 4, name: "LinkedIn", link: 'https://www.linkedin.com/company/blackinai/', image: <FontAwesomeIcon icon={["fab", "linkedin"]} /> },
    ];

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={8} md={4}>
                        <Grid container direction="column" justify="flex-end"  spacing={2}>
                            <Grid item>
                                <Grid item className={classes.listItem}>
                                    <Typography style={{ color:'#f8f7f7'}} variant="h5" marked="left" gutterBottom>
                                        BLACK IN AI
                                    </Typography>
                                    <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left">
                                            Non-profit Organization for Black 
                                            Professionals in Artificial Intelligence.
                                    </Typography>
                                    <br></br>
                                    <Copyright />
                                    <br></br>
                                    <Donate/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            CONTACT US
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Typography variant="body1" style={{ color:'#f8f7f7'}} href="/">
                                    555 Bryant St #708, Palo Alto, CA 94301.
                                </Typography>
                            </li>
                            <li>
                                <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left" gutterBottom>
                                    info@blackinai.org
                                </Typography>
                            </li>
                            <li className={classes.iconsWrapper}>
                                <List className={classes.icons}>
                                    {socialList.map(item => (
                                        <ListItem>
                                            <Link href={item.link}>
                                                {item.image}
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            LINKS
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/#/about">About Us</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/#/programs">Programs</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/#/membership">Membership</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link variant="body1" style={{ color:'#f8f7f7'}} href="/#/partnership">Partnership</Link>
                            </li>
                        </ul>
                    </Grid>
                    {/**
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography style={{ color:'#f8f7f7'}} variant="h6" marked="left" gutterBottom>
                            GET UPDATES
                        </Typography>
                        <ul className={classes.list} style={{ color:'#f8f7f7'}}>
                            <li className={classes.listItem}>
                                <Typography style={{ color:'#f8f7f7'}} variant="body1" marked="left" gutterBottom>
                                    Sign up for our newsletter to get updates on our work.
                                </Typography>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </Grid>
                    **/}
                </Grid>
            </Container>
        </Typography>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
