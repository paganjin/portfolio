import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';

const Page = () => (
    <div className="pages">
        <HomePage />
        <ResumePage />
        <ServicesPage />
    </div>
);

export default Page;