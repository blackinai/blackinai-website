import { Container, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';
import theme from '../../theme';
import withRoot from '../../withRoot';
import ContentFile from './../../components/Markdown/readfile';
import TemporaryFile from './../../posts/temp_file.md';


function Calendar() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <ContentFile href={TemporaryFile}>
                BAI Events Calendar
            </ContentFile>
            <Container maxWidth="sm">
                <Typography component="div" style={{ height: '50vh' }} />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(Calendar);