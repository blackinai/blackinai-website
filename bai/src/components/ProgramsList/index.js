import { Button, Card, CardActions, CardContent, CardMedia, Container } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    image: {
        height: 180,
    },
    card: {
        // maxWidth: 300,
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.dark,
    },
    content: {
        flex: '1 0 auto',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

const eachProgramOne = [
    {
        img: require('./../../assets/img/header/bai-img-4.JPG'),
        title: 'Summer Research Programs',
        url: '/#/programs/summer-research-programs',
        // eslint-disable-next-line
        text: 'Starting summer of 2021, Black in AI is piloting 2 summer programs, one tailored towards undergraduates, \
        and another one without restrictions for participation. Black in AI is excited to partner with the Distributed \
        Research Experiences for Undergraduates (DREU) program and will fund a limited \
        number of summer internships in the summer of 2021. In addition, Black in AI is also partnering with Stanford \
        University to pilot the BlackAIR summer research program, to provide research support, mentorship, and exposure \
        to program participants. Black women at various stages of AI research \
        experience are encouraged to apply. Program participants will be matched with a research mentor whom they will \
        regularly meet (remotely) for research guidance over the course of the grant, and will get the opportunity to \
        hear speakers from various Computer Science research fields. The 2021 edition of the program will be held remotely.'
    },
    {
        img: require('./../../assets/img/header/bai-img-13.jpg'),
        title: 'Academic Program',
        url: '/#/programs/academic-programs',
        // eslint-disable-next-line
        text: 'The Black in AI Academic program is committed to serving as a resource and supporting \
            Black junior researchers as they apply to graduate programs, navigate graduate school, and enter \
            the postgraduate job market. To that end, we conduct online information sessions, provide scholarships \
            to cover costs related to applications, assign participants to peer and senior mentors, and share \
            crowdsourced documents that demystify application processes.'
    },
];

const eachProgramTwo = [
    {
        img: require('./../../assets/img/header/bai-img-8.png'),
        title: 'Financial Support',
        url: '/#/programs/financial-support',
        // eslint-disable-next-line
        text: 'In addition to providing scholarships to cover costs associated with navigating academic \
            programs, Black in AI awards need-based travel grants to attend our annual events including our \
            workshop at the NeruIPS conference, and additional events in other conferences such as \
            AAAI, CVPR, ACL, ICML, ICLR, COLING and FAccT. Our grants cover flights, accommodation, daily per diems, \
            visa fees, data grants, and registration for the conferences. Since the first Black in AI workshop in 2017, \
            400+ works from 40+ countries have been presented with over $1M given out in travel grants supporting \
            400+ people. Many members cannot afford to first pay out of pocket and then receive reimbursements. \
            Thus we also make travel arrangements for them including booking airfare and accommodation.'
    },
    {
        img: require('./../../assets/img/header/bai-img-12.jpg'),
        title: 'Advocacy',
        url: '/#/programs/advocacy',
        // eslint-disable-next-line
        text: 'Black in AI’s advocacy has focused on removing barriers faced by Black people around the world in the field of AI. \
            Our advocacy has helped remove the GRE as an admissions requirement by some graduate schools in the US, \
            helped shed light on visa issues that Africans and members of the African diaspora face while attempting \
            to attend major international AI conferences, the lack of presence by international companies on the African \
            continent, and the choice of conference locations that exclude many members of our community.'
    },
    {
        img: require('./../../assets/img/header/bai-img-15.jpg'),
        title: 'Entrepreneurship Program',
        url: '/#/programs/entrepreneurship-program',
        // eslint-disable-next-line
        text: 'As of 2021, Black founders in the US receive around 2% of venture capital and Black investors \
        represent 3% of the professionals in the Venture Capital industry. Our \
        entrepreneurship program, which is currently under design, hopes to work on closing this gap by providing \
        support to entrepreneurs in Black in AI. We started our work with a survey \
        for aspiring founders and funders of the community and will release a report based on the survey to enable other \
        members of the entrepreneurial ecosystem to support Black AI founders and foster collaborations. We then plan on \
        implementing our program based on major difficulties pointed out by our members, including funding early stage \
        teams and pairing them with experienced mentors.'
    },
];

function ProgramsList(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12}>
                    <Typography variant="h2" marked="center" align="center" color="secondary" className={classes.title}>
                        BAI Programs
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    {eachProgramOne.map((key) => (
                        <Grid container item xs={12} md={6}>
                            <Card className={classes.card}>
                                <div className={classes.details}>
                                    <CardMedia className={classes.media} image={key.img} title={key.title} />
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {key.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {key.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" color="secondary" variant="contained" href={key.url}>
                                            Read More
                                    </ColorButton>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                    {eachProgramTwo.map((key) => (
                        <Grid container item xs={12} md={4}>
                            <Card className={classes.card}>
                                <div className={classes.details}>
                                    <CardMedia className={classes.media} image={key.img} title={key.title} />
                                    <CardContent className={classes.content}>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            {key.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {key.text}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" color="secondary" variant="contained" href={key.url}>
                                            Read More
                                    </ColorButton>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>

    );
}

ProgramsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgramsList);
