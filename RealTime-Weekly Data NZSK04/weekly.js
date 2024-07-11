function fetchDataAndUpdateChartsHCHO() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const ChartsHCHO = document.getElementById('ChartsHCHO');
                if (ChartsHCHO) {
                    // Your code to append child element and create charts
                } else {
                    console.error("Element with id 'ChartsHCHO' not found in the document.");
                }

            const chartDiv = document.createElement('div');
            ChartsHCHO.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], hcho_sensor_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                    weekStartTimestamp = timestamp;
                } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                    // Create chart for previous week data
                    //createChart(weekData.timestamps, weekData.hcho_sensor_values, weekStartTimestamp, chartsContainer);

                     let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x))

                     const trace = {
                x: xindex,
                y: weekData.hcho_sensor_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                    weekStartTimestamp = timestamp;
                    weekData = { timestamps: [], hcho_sensor_values: [] };
                }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.hcho_sensor_values.push(data[key].hcho_sensor);
            }

            /// Define layout options for the chart
    const layout = {
        title: {
text: 'Weekly HCHO Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};
            Plotly.newPlot(chartDiv, traces, layout);
           
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
// Function to create a chart for a specific week
function createChart(timestamps, hcho_sensor_values, weekStartTimestamp, ChartsHCHO) {
const weekStartDate = new Date(weekStartTimestamp);
const weekEndDate = new Date(weekStartTimestamp);
weekEndDate.setDate(weekEndDate.getDate() + 6); // Assuming weeks start on Sunday

const chartTitle = `${weekStartDate.toLocaleDateString('en-US')} - ${weekEndDate.toLocaleDateString('en-US')}`;
const chartDiv = document.createElement('div');
ChartsHCHO.appendChild(chartDiv);

}
////////////////////////////////////////////////////////////////////////////////////

function fetchDataAndUpdatechart_tvoc_sensor_co2() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chartsContainer = document.getElementById('chart_tvoc_sensor_co2');
            const chartDiv = document.createElement('div');
            chartsContainer.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], tvoc_sensor_co2_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));
                        const trace = {
                x: xindex,
                y: weekData.tvoc_sensor_co2_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);
                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], tvoc_sensor_co2_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.tvoc_sensor_co2_values.push(data[key].tvoc_sensor_co2);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly CO2 Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
////////////////////////////////////////////////////////////////////////////////////
function fetchDataAndUpdatechart_light_sensor() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_light_sensor = document.getElementById('chart_light_sensor');
            const chartDiv = document.createElement('div');
            chart_light_sensor.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], light_sensor_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                    weekStartTimestamp = timestamp;
                } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                    // Create chart for previous week data
                    //createChart(weekData.timestamps, weekData.hcho_sensor_values, weekStartTimestamp, chartsContainer);

                     let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x))

                     const trace = {
                x: xindex,
                y: weekData.light_sensor_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);
                    

                    

                    weekStartTimestamp = timestamp;
                    weekData = { timestamps: [], light_sensor_values: [] };
                }
            
                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.light_sensor_values.push(data[key].light_sensor);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly LIGHT SENSOR Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            Plotly.newPlot(chartDiv, traces, layout);
           
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
function createChart(timestamps, light_sensor_values, weekStartTimestamp, chart_light_sensor) {
const weekStartDate = new Date(weekStartTimestamp);
const weekEndDate = new Date(weekStartTimestamp);
weekEndDate.setDate(weekEndDate.getDate() + 6); // Assuming weeks start on Sunday

const chartTitle = `${weekStartDate.toLocaleDateString('en-US')} - ${weekEndDate.toLocaleDateString('en-US')}`;
const chartDiv = document.createElement('div');
chart_light_sensor.appendChild(chartDiv);




}

////////////////////////////////////////////////////////////////////////////////////

// Function to fetch data and update charts for TVOC sensor RH
function fetchDataAndUpdatechart_tvoc_sensor_rh() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_tvoc_sensor_rh = document.getElementById('chart_tvoc_sensor_rh');
            const chartDiv = document.createElement('div');
            chart_tvoc_sensor_rh.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], tvoc_sensor_rh_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

                        //const hoverText = weekData.timestamps.map((timestamp, index) => {
                            //const date = new Date(timestamp);
                            //return `Timestamp: ${date.toLocaleString()}, Rh Level: ${weekData.tvoc_sensor_rh_values[index]}`;
                        //});

                        const trace = {
                x: xindex,
                y: weekData.tvoc_sensor_rh_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], tvoc_sensor_rh_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.tvoc_sensor_rh_values.push(data[key].tvoc_sensor_rh);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly RH Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
///////////////////////////////////////////////////////////////////////////////////
function fetchDataAndUpdatechart_tvoc_sensor_temperature() {
data.once('value')
.then(snapshot => {
    const data = snapshot.val();
    if (!data) {
        console.error("No data available.");
        return;
    }

    const chartsContainer = document.getElementById('chart_tvoc_sensor_temperature');
    const chartDiv = document.createElement('div');
    chartsContainer.appendChild(chartDiv);
    const traces = [];

    // Group data by week
    let weekStartTimestamp = null;
    let weekData = { timestamps: [], tvoc_sensor_temperature_values: [] };

    for (let key in data) {
        const timestamp = new Date(parseInt(key) * 1000);
        const weekOfYear = getWeekNumber(timestamp);

        if (!weekStartTimestamp) {
            weekStartTimestamp = timestamp;
        } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
            // Create chart for previous week data
            let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

            const trace = {
                x: xindex,
                y: weekData.tvoc_sensor_temperature_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

            weekStartTimestamp = timestamp;
            weekData = { timestamps: [], tvoc_sensor_temperature_values: [] };
        }

        // Add data to current week
        weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
        weekData.tvoc_sensor_temperature_values.push(data[key].tvoc_sensor_temperature);
    }

    // Define layout options for the chart
    const layout = {
        title: {
text: 'Weekly TEMPERATURE Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};
    // Create chart for last week data
    Plotly.newPlot(chartDiv, traces, layout);
})
.catch(error => {
    console.error("Error fetching data:", error);
});
}
///////////////////////////////////////////////////////////////////////////////////////
// Function to fetch data and update charts for TVOC sensor TVOC
function fetchDataAndUpdatechart_tvoc_sensor_tvoc() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_tvoc_sensor_tvoc = document.getElementById('chart_tvoc_sensor_tvoc');
            const chartDiv = document.createElement('div');
            chart_tvoc_sensor_tvoc.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], tvoc_sensor_tvoc_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

                        //const hoverText = weekData.timestamps.map((timestamp, index) => {
                            //const date = new Date(timestamp);
                            //return `Timestamp: ${date.toLocaleString()}, TVOC Level: ${weekData.tvoc_sensor_tvoc_values[index]}`;
                        //});

                        const trace = {
                x: xindex,
                y: weekData.tvoc_sensor_tvoc_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], tvoc_sensor_tvoc_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.tvoc_sensor_tvoc_values.push(data[key].tvoc_sensor_tvoc);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly TVOC Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

///////////////////////////////////////////////////////////////////////////////////
// Function to fetch data and update charts for TVOC sensor 2.5
function fetchDataAndUpdatechart_tvoc_ppm_2_5() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_tvoc_ppm_2_5 = document.getElementById('chart_tvoc_ppm_2_5');
            const chartDiv = document.createElement('div');
            chart_tvoc_ppm_2_5.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], tvoc_ppm_2_5_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

                        
                        const trace = {
                x: xindex,
                y: weekData.tvoc_ppm_2_5_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], tvoc_ppm_2_5_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.tvoc_ppm_2_5_values.push(data[key].tvoc_ppm_2_5);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly TVOC 2.5 Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

///////////////////////////////////////////////////////////////////////////////////
// Function to fetch data and update charts for TVOC sensor 10
function fetchDataAndUpdatechart_tvoc_ppm_10() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_tvoc_ppm_10 = document.getElementById('chart_tvoc_ppm_10');
            const chartDiv = document.createElement('div');
            chart_tvoc_ppm_10.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], tvoc_ppm_10_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

                        
                        const trace = {
                x: xindex,
                y: weekData.tvoc_ppm_10_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], tvoc_ppm_10_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.tvoc_ppm_10_values.push(data[key].tvoc_ppm_10);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly TVOC 10 Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

///////////////////////////////////////////////////////////////////////////////////
// Function to fetch data and update charts for TVOC sensor 2.5
function fetchDataAndUpdatechart_sound_sensor() {
    data.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            if (!data) {
                console.error("No data available.");
                return;
            }

            const chart_sound_sensor = document.getElementById('chart_sound_sensor');
            const chartDiv = document.createElement('div');
            chart_sound_sensor.appendChild(chartDiv);
            const traces = [];

            // Group data by week
            let weekStartTimestamp = null;
            let weekData = { timestamps: [], sound_sensor_values: [] };

            for (let key in data) {
                const timestamp = new Date(parseInt(key) * 1000);
                const weekOfYear = getWeekNumber(timestamp);

                if (!weekStartTimestamp) {
                        weekStartTimestamp = timestamp;
                    } else if (getWeekNumber(weekStartTimestamp) !== weekOfYear) {
                        // Create chart for previous week data
                        let xindex = applyFunctionToList(weekData.timestamps, x => getTenthMinuteOfWeek(x));

                        
                        const trace = {
                x: xindex,
                y: weekData.sound_sensor_values,
                type: 'scatter',
                mode: 'lines+markers',
                name: `Week ${traces.length + 1}`, // Custom name for each trace
                marker: { size: 4 }
                
            };
            traces.push(trace);

                        weekStartTimestamp = timestamp;
                        weekData = { timestamps: [], sound_sensor_values: [] };
                    }

                // Add data to current week
                weekData.timestamps.push(timestamp.getTime()); // milliseconds and timestamp
                weekData.sound_sensor_values.push(data[key].sound_sensor);
            }

            // Define layout options for the chart
            const layout = {
        title: {
text: 'Weekly SOUND SENSOR Levels',
font: {size: 26,bold: true}
},
        xaxis: {
            tickmode: 'array',
            tickvals: [0,143,287,431,575,719,863], // Adjusted for your data
            ticktext: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], // Custom labels
            tickfont: {size: 22},

},
legend: {
font: {size: 20}
},

        yaxis: {
tickfont: {
    size: 22 },
},
};

            // Create chart for last week data
            Plotly.newPlot(chartDiv, traces, layout);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

///////////////////////////////////////////////////////////////////////////////////
// Function to apply a function to each element of a list
function applyFunctionToList(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

// Function to get the tenth minute of the week
function getTenthMinuteOfWeek(dateString) {
    const currentDate = new Date(dateString);
    const startOfWeek = new Date(currentDate);
    startOfWeek.setHours(0, 0, 0, 0); // Set to beginning of the day
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Move to Sunday (start of the week)
    const differenceInMinutes = (currentDate.getTime() - startOfWeek.getTime()) / (1000 * 60);
    const tenthMinuteOfWeek = Math.floor(differenceInMinutes / 10);
    return tenthMinuteOfWeek;
}