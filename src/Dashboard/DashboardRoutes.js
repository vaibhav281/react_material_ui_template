import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Dashboard from './Dashboard';
import Page1 from './Page1';

const dashboardTheme = {
  primaryColor: 'blue',
  secondaryColor: 'green',
  
  // ...other theme variables
};

const DashboardRoutes = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard/page1" element={<Page1/>} />
    </Routes>
  </ThemeProvider>
);

export default DashboardRoutes;
