import React from 'react';
import styled from 'styled-components';
import ChartContainer from './lib/styledComponents/ChartContainer';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
// data 
import * as data from './components/data/rawData';
// charts
import UsagePerTeam from './components/charts/UsagePerTeam';
import UsagePerHour from './components/charts/UsagePerHour';
import UsagePerTeamHour from './components/charts/UsagePerTeamHour';
import StackedUsagePerTeam from './components/charts/StackedUsagePerTeam';
import StackedUsage from './components/charts/StackedUsage';
import RequestCounts from './components/charts/RequestCounts';
// color palette
import palette from './lib/color/palette';
import { chartColors1 } from './lib/color/chartColor';
import KPMGColor from './lib/color/KPMGColor';


// setting main color 
const chartColors = chartColors1;
// const chartColors = KPMGColor.chartColors;
const chartColor = "75,192,192"; // as rgb 

const StyledApp = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
`;


const App = () => {
  return (
    <StyledApp>
      <Header />
      {/* <Sidebar /> */}
      {/* default: width='500px' height='auto' */}
      <div>
        <ChartContainer>
          <UsagePerTeam rawData={data.usagePerTeamRawData} chartColors={chartColors} />
        </ChartContainer>

        <ChartContainer width='800px'>
          <UsagePerTeamHour rawData={data.usagePerTimeHourRawData} chartColors={palette.blue} />
        </ChartContainer>

        <ChartContainer width='800px'>
          <UsagePerHour rawData={data.usageParTimeRawData} chartColors={chartColor} />
        </ChartContainer>

        <ChartContainer>
          <StackedUsagePerTeam rawData={data.stackedUsagePerTeamRawData} chartColors={chartColors} />
        </ChartContainer>

        <ChartContainer width='250px'>
          <StackedUsage rawData={data.StackedUsageRawData} />
        </ChartContainer>

        <ChartContainer width='250px' >
          <RequestCounts rawData={data.RequestCountsRawData} />
        </ChartContainer>
      </div>
      <Footer />
    </StyledApp>
  );
}

export default App;
