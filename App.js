import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

const App = () => {
  const page = 'HOME';

  return (
    <div className="main">
      <div className="container">
        <Header page={page}/>
        <Page page={page}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;