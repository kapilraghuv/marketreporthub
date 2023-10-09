import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Terms from './Pages/Terms';
import Latest from './Pages/Latest';
import Industries from './Pages/industries';
import Admin from './Admin/Admin';
import Dashboard from './Admin/Dashboard';
import Addcategory from './Admin/Addcategory';
import Viewcategory from './Admin/Viewcategory';
import Addreport from './Admin/Addreport';
import Viewreport from './Admin/Viewreport';
import Logout from './Admin/Logout';
import Report from './Pages/Report'
import Request from './Pages/Request';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/latest-insights" element={<Latest />} />
        <Route path="/industries/:id/:cname" element={<Industries />} /> 
        <Route path="/admin" element={<Admin />} /> 
        <Route exact={false} path="/dashboard" element={<Dashboard />} /> 
        <Route path="/add-category" element={<Addcategory />} /> 
        <Route path="/view-category" element={<Viewcategory />} /> 
        <Route path="/add-report" element={<Addreport />} /> 
        <Route path="/view-report" element={<Viewreport />} /> 
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/report" element={<Report />} />
        <Route path="/request" element={<Request />} /> 
        <Route path="/report/:id/:title" element={<Report />} /> 
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
