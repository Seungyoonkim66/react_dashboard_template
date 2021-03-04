import React from 'react';
import SampleChart from './chartjs/sample';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import palette from './lib/palette';


const chartColors = [
  "#336699",
  "#99CCFF",
  "#999933",
  "#666699",
  "#CC9933",
  "#006666",
  "#3399FF",
  "#993300",
  "#CCCC99",
  "#666666",
  "#FFCC66",
  "#6699CC",
  "#663366",
  "#9999CC",
  "#CCCCCC",
  "#669999",
  "#CCCC66",
  "#CC6600",
  "#9999FF",
  "#0066CC",
  "#99CCCC",
  "#999999",
  "#FFCC00",
  "#009999",
  "#99CC33",
  "#FF9900",
  "#999966",
  "#66CCCC",
  "#339966",
  "#CCCC33",
  "#003f5c",
  "#665191",
  "#a05195",
  "#d45087",
  "#2f4b7c",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#EF6F6C",
  "#465775",
  "#56E39F",
  "#59C9A5",
  "#5B6C5D",
  "#0A2342",
  "#2CA58D",
  "#84BC9C",
  "#CBA328",
  "#F46197",
  "#DBCFB0",
  "#545775"
];
const AA = {
  labelA : ["team1", "team2", "team3", "team4"],
  dataA : [20, 10, 30, 15]
}

const data = {
  labels: AA.labelA,
  datasets: [
    {
      backgroundColor: chartColors,
      data: AA.dataA,
      name: "chart_name"
    },
  ]
}
const styledBox = styled.div`
  background-color: rgba(255,255,255,0.5);
  padding: 2rem 1rem;
  text-align: center;
`;
const BB = {
	name: "chartname",
	count: 3040,
};

const C = {
  labels : ["time1", "time2", "time3", "time4", "time5"],
  label: 'line_name',
  data : [20, 10, 30, 15, 32, 11]
}

const lineData = {

  labels: C.labels,
  datasets: [
    {
      label: C.label,
      data: C.data,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
  ]
};

const D = {
  labels : ["time1", "time2", "time3", "time4", "time5"],
  datas: [
    { label: 'team1', data: [33, 53, 85, 41, 44, 65], },
    { label: 'team2', data: [33, 25, 35, 51, 54, 76] },
    { label: 'team3', data: [13, 15, 25, 21, 54, 76] },
    { label: 'team4', data: [63, 9, 14, 11, 22, 12] },
    { label: 'team5', data: [62, 9, 22, 33, 12, 54] },
  ]
}

const Ddatasets = D.datas.map((d, i) => {
  return (
    {
      label: d.label,
      data: d.data,
      fill: false,
      borderColor: `${palette.blue[i]}`,
    }
  );
}
)

const lineData2 = {
  labels: D.labels,
  datasets: Ddatasets
};


const BarData = {
  labels: ["IM1", "IGH", "ICE", "IRM", "Lighthouse"],
  datasets: [
    {
      label: "ann",
      data: [100,0,0,0,0,0],
      backgroundColor: `${palette.grape[3]}`,
    },
    {
      label: "ben",
      data: [200,0,0,0,0,0],
      backgroundColor: `${palette.grape[1]}`,
    },
    {
      label: "ken",
      data: [0,100,0,0,0],
      backgroundColor: `${palette.grape[7]}`,
    },
    {
      label: "ron",
      data: [0,10,0,0,0],
      backgroundColor: `${palette.grape[9]}`,
    },
    {
      label: "may",
      data: [0,0,300,0,0],
      backgroundColor: `${palette.grape[7]}`,
    },
    {
      label: "min",
      data: [0,0,230,0,0],
      backgroundColor: `${palette.grape[9]}`,
    },
    {
      label: "owe",
      data: [0,0,0,23,0],
      backgroundColor: `${palette.grape[7]}`,
    },
    {
      label: "aps",
      data: [0,0,0,50,0],
      backgroundColor: `${palette.grape[9]}`,
    },
    {
      label: "aafwd",
      data: [0,0,0,0,110],
      backgroundColor: `${palette.grape[7]}`,
    },
    {
      label: "asd",
      data: [0,0,0,0,100],
      backgroundColor: `${palette.grape[9]}`,
    },
  ]
}



const App = () => {
  return (
    <>
      {/* <SampleChart /> */}

      <Doughnut
        options={
          {
            legend: {
              // https://www.chartjs.org/docs/latest/configuration/legend.html#position 참고 
              display: true,
              position: 'right',
              labels: {
                fontColor: '#555'
              }
            }
          }
        }
        data={data}
      />
      <Line 
        data={lineData2} 
        options={
          {
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontColor: '#555'
              }
            }
          }
        }
      />

      <Bar 
        options={
          {
            legend: {
              display: true,
              position: 'left',
              labels: {
                fontColor: '#555'
              }
            },
            scales: {
              xAxes: [{
                stacked: true
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        }
        data={BarData}

      />

      <styledBox>{BB.name}{BB.count}</styledBox>
    </>
  );
}

export default App;
