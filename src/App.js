import React from 'react';
// data 
import * as data from './components/data/rawData';
// chart templates
import UsagePerTeam from './components/charts/UsagePerTeam';
import UsagePerHour from './components/charts/UsagePerHour';
import UsagePerTeamHour from './components/charts/UsagePerTeamHour';
import StackedUsagePerTeam from './components/charts/StackedUsagePerTeam';
// color palette
import palette from './lib/palette';
import { chartColorsGoogle } from './lib/chartColor';
// setting main color 
const chartColors=chartColorsGoogle;
const chartColor="75,192,192"; // as rgb 

const App = () => {
  return (
    <>
      <UsagePerTeam rawData={data.usagePerTeamRawData} chartColors={chartColors} />
      <UsagePerTeamHour rawData={data.usagePerTimeHourRawData} chartColors={palette.blue} />
      <UsagePerHour rawData={data.usageParTimeRawData} chartColors={chartColor} />
      <StackedUsagePerTeam rawData={data.stackedUsagePerTeamRawData} chartColors={chartColors} />
    </>
  );
}

export default App;
