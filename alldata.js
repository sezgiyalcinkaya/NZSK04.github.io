function fetchDataAndUpdateChart(sensorType, elementId, lineColor, chartTitle) {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            console.log("Fetched data:", data); // Debug: log the fetched data

            if (!data) {
                console.error("No data available");
                return;
            }

            const timestamps = [];
            const sensorValues = [];

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                timestamps.push(timestamp.toLocaleString('en-SG', { timeZone: 'Asia/Singapore' }));
                sensorValues.push(data[key][sensorType]);
            }

            console.log("Timestamps:", timestamps); // Debug: log timestamps
            console.log("Sensor values:", sensorValues); // Debug: log sensor values

            var chartElement = document.getElementById(elementId);
            Plotly.newPlot(chartElement, [{
                x: timestamps,
                y: sensorValues,
                type: 'scatter',
                mode: 'lines+markers',
                line: {
                    color: lineColor,
                    width: 1 
                },
                name: elementId
            }], {
                title: {
                    text: chartTitle,
                    font: { size: 26, bold: true }
                }, 
                xaxis: {
                    tickfont: {
                        size: 22.5 // Adjust the font size of the x-axis ticks
                    },
                },
                yaxis: {
                    tickfont: {
                        size: 22.5 
                    },
                }
            });

        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
