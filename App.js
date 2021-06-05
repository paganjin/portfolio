import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

const App = () => (
    <div className="main">
        <div className="container">
            <Header />
            <Page />
            <Footer />
            <div id="BLOG" class="page"></div>
            <div id="CONTACT" class="page"></div>
        </div>
    </div>
);

export default App;