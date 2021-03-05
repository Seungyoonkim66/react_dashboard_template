import React from 'react';
import ChartContainer from './lib/styledComponents/ChartContainer';
// data 
import * as data from './components/data/rawData';
// chart templates
import UsagePerTeam from './components/charts/UsagePerTeam';
import UsagePerHour from './components/charts/UsagePerHour';
import UsagePerTeamHour from './components/charts/UsagePerTeamHour';
import StackedUsagePerTeam from './components/charts/StackedUsagePerTeam';
// color palette
import palette from './lib/color/palette';
import { chartColors1 } from './lib/color/chartColor';
// setting main color 
const chartColors = chartColors1;
const chartColor = "75,192,192"; // as rgb 


const App = () => {
  return (
    <>
      <ChartContainer width='500px' height='300px'>
        <UsagePerTeam rawData={data.usagePerTeamRawData} chartColors={chartColors} />
      </ChartContainer>
      <ChartContainer width='500px' height='300px'>
        <UsagePerTeamHour rawData={data.usagePerTimeHourRawData} chartColors={palette.blue} />
      </ChartContainer>
      <ChartContainer width='500px' height='300px'>
        <UsagePerHour rawData={data.usageParTimeRawData} chartColors={chartColor} />
      </ChartContainer>
      <ChartContainer width='500px' height='300px'>
        <StackedUsagePerTeam rawData={data.stackedUsagePerTeamRawData} chartColors={chartColors} />
      </ChartContainer>
    </>
  );
}

export default App;
