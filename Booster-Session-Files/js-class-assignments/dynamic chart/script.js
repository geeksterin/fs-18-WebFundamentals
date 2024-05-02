
var data = [45];

var mychart = new Chart("box", {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
            {
            label: 'My First Dataset',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            },

        ]
    },
   
});

function addData() {
    const newData = Math.floor(Math.random() * 100) // Generate random data
    mychart.data.labels.push(mychart.data.labels.length);
    mychart.data.datasets[0].data.push(newData);
    mychart.update(); // Update the chart
}
setInterval(() => {
    addData()
},1000)