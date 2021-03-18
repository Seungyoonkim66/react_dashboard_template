import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Landing from './components/common/Landing';
import SRDashboard from './components/srDashboard';
import * as data from './components/data/rawData';
import KPMGColor from './lib/color/KPMGColor';


// setting main color 
const chartColors = KPMGColor.chartColors;
const chartColor = KPMGColor.lineChartColor; // as rgb 



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Route path='/' exact render={() => <Landing />} />
      <Route path='/sr' exact render={() => <SRDashboard data={data} chartColors={chartColors} chartColor={chartColor} />} />
      <Route path='/home' exact render={()=> <div style={{margin: '3rem 7rem'}}>dashboard</div>} />
      <Route path='/libor' exact render={()=> <div style={{margin: '3rem 7rem'}}>libor dashboard</div>} />
    </BrowserRouter>
  );
}

export default App;
