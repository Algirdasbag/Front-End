let ctx = document.getElementById('myChart').getContext('2d');
// let initialDataValues = [1.2, 1.19, 1.18, 1.21, 1.22, 1.2];
chart("red", [1, 1, 1, 1, 1, 1], "1 : 1");

function chart(colorValue, dataValues, labelValue){
    console.log("color: " + colorValue + ", data: " + dataValues + ", ratio: " + labelValue);

    let gradientFill = ctx.createLinearGradient(0, 0, 0, 150);
    gradientFill.addColorStop(0, colorValue);
    gradientFill.addColorStop(1, 'white');  

    let myChart = new Chart(ctx, {
        type: 'line',
        markerType: "triangle",
        data: {
            labels: ['2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03'],
            datasets: [{
                label: labelValue,
                data: dataValues,
                backgroundColor: gradientFill,
                borderColor: [
                    'rgba(0, 80, 0, 1)'
                ],
                borderWidth: 1,
                lineTension: '0'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    })
}