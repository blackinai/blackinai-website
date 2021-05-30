import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/WorkshopPageHeader';
import Loader from '../../loader';
import theme from '../../theme';
import withRoot from '../../withRoot';
import image from './../../assets/img/header/bai-img-10.jpg';
import ContentFile from './../../components/Markdown/readfile';
import PressRoom from './../../posts/Media/PressRoom.md';

function Media() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={PressRoom}>
                Press Room
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(Media);