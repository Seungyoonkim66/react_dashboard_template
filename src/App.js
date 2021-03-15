import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import SRDashboard from './components/srDashboard';
// import Footer from './components/common/Footer';
// data 
import * as data from './components/data/rawData';

// color palette
import { chartColors1 } from './lib/color/chartColor';


// setting main color 
const chartColors = chartColors1;
const chartColor = "75,192,192"; // as rgb 



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Route path='/sr' exact render={() => <SRDashboard data={data} chartColors={chartColors} chartColor={chartColor} />} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
