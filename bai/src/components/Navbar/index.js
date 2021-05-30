import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link, Drawer, IconButton, List, ListItem } from '@material-ui/core/';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/bai-logo.png';
import CustomDropdown from './../CustomDropdown';

export const toolbarStyles = (theme) => ({
    root: {
        height: 70,
        [theme.breakpoints.up('sm')]: {
            height: 50,
        },
    },
});

const styles = (theme) => ({
    title: {
        fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    left: {
        flex: 1,
        color: theme.palette.primary.light,
        marginLeft: theme.spacing(10),
    },
    leftLinkActive: {
        color: theme.palette.primary.light,
    },
    right: {
        // flex: 1,
        display: 'flex',
        marginRight: theme.spacing(10),
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(5),
        paddingTop: theme.spacing(2),
    },
    linkSecondary: {
        color: theme.palette.secondary.primary,
    },
    flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    colorAppBar: {
        color: "#D8CCCC",
    },
    chip: {
        marginLeft: theme.spacing(5),
        margin: theme.spacing(1),
        borderRadius: "40px",
        paddingTop: theme.spacing(1)
    },
    iconContainer: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    icon: {
        alignItems: 'center',
        fontSize: 16,
        padding: theme.spacing(1),
        marginLeft: theme.spacing(8),
        paddingTop: theme.spacing(2),
        color: theme.palette.primary.dark,
    },
    dropdownLink: {
        "&,&:hover,&:focus": {
            color: "inherit",
            textDecoration: "none",
            display: "block",
            padding: "10px 20px",
            fontSize: theme.typography.fontSize,
        },
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: "#fff",
        backgroundColor: "#fff",
        '&:hover': {
            backgroundColor: "#fff",
        },
    },
}))(Button);

function Donate() {
    return (
        <form id='my-donate-form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" rel="noopener">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="organizers@blackinai.org" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="item_name" value="Black in AI Fundraiser" />
            <input type="hidden" name="item_number" value="Thanks for your kind contribution. Funds are used to support Black in AI initiatives." />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="paypal button for donations" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="3" height="3" />
        </form>
    );
}
function Navbar(props) {
    const { classes } = props;

    const navLinks = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'About',
            path: '/#/about',
        },
        {
            text: 'Programs',
            path: '/#/programs',
        },
        {
            text: 'Opportunities',
            path: [
                {
                    text: 'Membership',
                    path: '/#/membership',
                },
                {
                    text: 'Partnership',
                    path: '/#/partnership',
                },
                {
                    text: 'Share Job Opportunities',
                    path: 'https://docs.google.com/forms/d/e/1FAIpQLSdMcCerEXj45B_FrCrbIMhTHAO4MU5n00tl978a_bRFTfRanw/viewform',
                }    
            ],
        },
        {
            text: 'Community Events',
            path: [
                {
                    text: 'BAI Social NAACL 2021 ',
                    path: '/#/events/social-naacl-2021',
                },
                {
                    text: 'BAI Workshops',
                    path: '/#/conferences',
                },
                {
                    text: 'Calendar',
                    path: '/#/calendar',
                }
            ],
        },
        {
            text: 'Media', //Press Room
            path: '/#/media',
        },
    ]

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMobileOpen({ ...mobileOpen, [anchor]: open });
    };

    const socialList = [
        { id: 1, name: "Facebook", link: 'https://www.facebook.com/blackinai', image: <FontAwesomeIcon icon={["fab", "facebook"]} /> },
        { id: 2, name: "Twitter", link: 'https://twitter.com/black_in_ai', image: <FontAwesomeIcon icon={["fab", "twitter"]} /> },
        { id: 3, name: "Instagram", link: 'https://www.instagram.com/blackinai/', image: <FontAwesomeIcon icon={["fab", "instagram"]} /> },
        { id: 4, name: "LinkedIn", link: 'https://www.linkedin.com/company/blackinai/', image: <FontAwesomeIcon icon={["fab", "linkedin"]} /> },
    ];

    const list = (anchor) => (
        <div className={clsx(classes.list, { [classes.fullList]: anchor === 'top' || anchor === 'bottom', })}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <div className={classes.right}>{brandComponent}</div>
            <List>
                {navLinks.map((link, index) =>
                    Array.isArray(link.path)
                    ?   
                    <ListItem>
                        <CustomDropdown noLiPadding buttonText={link.text}
                            dropdownList={[
                                link.path.map((sublink, idx) => 
                                    <Link color="inherit" variant="h5" underline="none" className={classes.dropdownLink} href={sublink.path}>
                                        {sublink.text}
                                    </Link>
                                )
                            ]} />
                    </ListItem>
                            
                    :   
                    <ListItem>
                        <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                            href={link.path}>
                            {link.text}
                        </Link>
                    </ListItem>
                )}
                {socialList.map(item => (
                    <ListItem className={classes.icon}>
                        <Link color="inherit" href={item.link}>
                            {item.image}
                        </Link>
                    </ListItem>
                ))}
                <ColorButton className={classes.chip} size="small">
                    <Donate />
                </ColorButton>
            </List>
        </div>
    );

    const brandComponent = <Link underline="none" className={classes.left} href="/"><img src={logo} width={80} alt="The raised fist, the black in AI logo." /></Link>;


    return (
        <div>
            <AppBar position="fixed" className={classes.colorAppBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>{brandComponent}</div>
                    <React.Fragment>
                        <div className={classes.right}>
                            {navLinks.map((link, index) => 
                                Array.isArray(link.path)
                                ?   
                                    <CustomDropdown noLiPadding buttonText={link.text}
                                        dropdownList={[
                                            link.path.map((sublink, idx) => 
                                                <Link color="inherit" variant="h5" underline="none" className={classes.dropdownLink} href={sublink.path}>
                                                    {sublink.text}
                                                </Link>
                                            )
                                        ]} />
                                        
                                :   <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                        href={link.path}>
                                        {link.text}
                                    </Link>        
                            )}
                            <ColorButton className={classes.chip} size="small">
                                <Donate />
                            </ColorButton>
                        </div>
                    </React.Fragment>
                </Toolbar>
                <div className={classes.iconContainer}>
                    <React.Fragment key='right'>
                        <IconButton color="primary" aria-label="open drawer" edge="end" onClick={toggleDrawer('right', true)}
                            className={clsx(mobileOpen && classes.hide)}>
                            <MenuIcon />
                            <div className={classes.left}>{brandComponent}</div>
                        </IconButton>
                        <Drawer anchor='right' open={mobileOpen['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </Drawer>
                    </React.Fragment>
                </div>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
