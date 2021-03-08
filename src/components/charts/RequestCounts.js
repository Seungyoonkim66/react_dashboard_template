const RequestCounts = ({ rawData }) => {
    return(
        <div>
            <p>{rawData.chartName}</p>
            {rawData.data}
        </div>
    );
}

export default RequestCounts;