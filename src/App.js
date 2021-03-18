import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Content from './components/common/Content';
import Sidebar from './components/common/Sidebar';
import Landing from './components/common/Landing';
import SRDashboard from './components/srDashboard';
<<<<<<< HEAD
import * as data from './components/data/rawData';
=======
// data 
import * as data from './components/data/rawData';

// color palette
// import { chartColors1 } from './lib/color/chartColor';
>>>>>>> 16b522036071fe0f3c8b49385396fb6fb0486189
import KPMGColor from './lib/color/KPMGColor';


// setting main color 
const chartColors = KPMGColor.chartColors;
const chartColor = KPMGColor.lineChartColor; // as rgb 



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
<<<<<<< HEAD
      <Route path='/' exact render={() => <Landing />} />
      <Route path='/sr' exact render={() => <SRDashboard data={data} chartColors={chartColors} chartColor={chartColor} />} />
      <Route path='/home' exact render={()=> <div style={{margin: '3rem 7rem'}}>dashboard</div>} />
      <Route path='/libor' exact render={()=> <div style={{margin: '3rem 7rem'}}>libor dashboard</div>} />
=======
      <Content>
        <Route path='/sr' exact render={() => <SRDashboard data={data} chartColors={chartColors} chartColor={chartColor} />} />
      </Content>
>>>>>>> 16b522036071fe0f3c8b49385396fb6fb0486189
    </BrowserRouter>
  );
}

export default App;
