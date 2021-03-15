import React from 'react';
import styled from 'styled-components';
import ChartContainer from '../../lib/styledComponents/ChartContainer';

import UsagePerTeam from './UsagePerTeam';
import UsagePerHour from './UsagePerHour';
import UsagePerTeamHour from './UsagePerTeamHour';
import StackedUsagePerTeam from './StackedUsagePerTeam';
import StackedUsage from './StackedUsage';
import RequestCounts from './RequestCounts';

// ChartContainer - default: width='auto' height='auto' - sizing with width, height props

const StyledBox = styled.div`
    width: 93.39%;
    margin-left: 80px;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 17rem);
    grid-template-rows: 15rem 18rem 18rem;
    gap: 10px;
    align-items: stretch;
    justify-content: stretch;
    /* div{border: solid;} */
    #stacked-usage{ grid-column: 1/2; grid-row: 1/2; }
    #request-counts{ grid-column: 2/3; grid-row: 1/2; }
    #usage-time{ grid-column: 3/7; grid-row: 1/2; }
    #usage-team{ grid-column: 1/3; grid-row: 2/4; }
    #usage-time-team{ grid-column: 3/7; grid-row: 2/3;}
    #stacked-usage-team{ grid-column: 3/7; grid-row: 3/4; }
`;


const SRDashboard = ({ data, chartColors, chartColor }) => {
  return (
    <StyledBox>
      <div id='stacked-usage'>
        <ChartContainer height='12.3rem'>
          <StackedUsage rawData={data.StackedUsageRawData} />
        </ChartContainer>
      </div>


      <div id='request-counts'>
        <ChartContainer height='12.3rem'>
          <RequestCounts rawData={data.RequestCountsRawData} />
        </ChartContainer>
      </div>

      <div id='usage-time'>
        <ChartContainer>
          <UsagePerHour rawData={data.usageParTimeRawData} chartColors={chartColor} width={110} height={15} />
        </ChartContainer>
      </div>

      <div id='usage-team'>
        <ChartContainer>
          <UsagePerTeam rawData={data.usagePerTeamRawData} chartColors={chartColors} width={70} height={71} />
        </ChartContainer>
      </div>

      <div id='usage-time-team'>
        <ChartContainer>
          <UsagePerTeamHour rawData={data.usagePerTimeHourRawData} chartColors={chartColors} width={120} height={22} />
        </ChartContainer>
      </div>

      <div id='stacked-usage-team'>
        <ChartContainer>
          <StackedUsagePerTeam rawData={data.stackedUsagePerTeamRawData} chartColors={chartColors} width={120} height={22} />
        </ChartContainer>
      </div>
    </StyledBox>
  );
}

export default React.memo(SRDashboard);