import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';

const Page = ({
  page,
}) => (
  <div className="pages">
    {page === 'HOME' && (<HomePage />)}
    {page === 'RESUME' && (<ResumePage />)}
    {page === 'SERVICES' && (<ServicesPage />)}
    {page === 'BLOG' && (<div id="BLOG" className="page"></div>)}
    {page === 'CONTACT' && (<div id="CONTACT" className="page"></div>)}
  </div>
);

export default Page;