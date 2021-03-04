import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { sampleData } from '../data/sampleData';

const StyledBlock = styled.div`
    width: 400px;
`;

const options = {
    // layout: {
    //     padding: {
    //       bottom: 50,
    //       top: 50
    //     }
    //   },

    scales: {
      yAxes: [{
        ticks: { 
          min: 0, // y축 스케일에 대한 최소값 설정
          stepSize: 1, // y축 그리드 한 칸당 수치
          
        },
        stacked: true
      }],
      xAxes: [{
        // stacked: true
      }]
    },
    maintainAspectRatio: false ,
    tooltips: {
        mode: 'nearest'
    },
    responsive: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: '#91929b',
        padding: 20
      }
    }
  }

const SampleChart = () => {
    return(
        <StyledBlock>
            <Bar 
                data={sampleData}
                options={options}
                height={300}
                // width={1200} 
            />
        </StyledBlock>
    );
};

export default SampleChart;