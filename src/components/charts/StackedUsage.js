const StackedUsage = ({ rawData }) => {
    return(
        <div>
            <p>{rawData.chartName}</p>
            {rawData.data}
        </div>
    );
}

export default StackedUsage;