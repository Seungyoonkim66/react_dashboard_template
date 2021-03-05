import { Bar } from "react-chartjs-2";

const StackedUsagePerTeam = ({ rawData, chartColors }) => {

    const options = {
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
    };

    const datasets = rawData.data.map((user) => {
        let dataArray = new Array(rawData.labels.length).fill(0);
        dataArray[user.stack] = user.data;
        return (
            {
                label: user.username,
                data: dataArray,
                backgroundColor: chartColors[user.id],
            }
        );
    })


    const data = {
        labels: rawData.labels,
        datasets: datasets
    }

    return (
        <>
            <p>{rawData.chartName}</p>
            <Bar options={options} data={data} />
        </>
    );
}

export default StackedUsagePerTeam;