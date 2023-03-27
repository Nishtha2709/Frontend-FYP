const MAX_DATA_COUNT = 1;
//connect to the socket server.
//var socket = io.connect("http://" + "127.0.0.1" + ":" + "5000");


// function addData(data, id) {
//   console.log(data);
//   const currData = document.getElementById(id);
//   currData.innerHTML = data;
// }


var socket = io.connect();
console.log("socket connected");



// test1 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
// console.log("Received trasnformerData :: " + msg.ratio_test);

//   addData(msg.ratio_test, "test1");
// });


//test 2 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
// console.log("Received trasnformerData :: " + msg.ratio_test);

//     addData(msg.ratio_test, "test2");
//   });


//test 3 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
//   console.log("Received trasnformerData :: " + msg.ratio_test);

//       addData(msg.ratio_test, "test3");
//     });


//test 4 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
//   console.log("Received trasnformerData :: " + msg.ratio_test);

//       addData(msg.ratio_test, "test4");
//     });







//================== funtion to display image==============================
// function openImage() {
//   var overlay = document.getElementById("overlay");
//   var imageContainer = document.getElementById("image-container");
//   var image = document.getElementById("image");
//   var imageUrl = "/static/img/ratio.png"; // Replace with your image URL
//   image.src = imageUrl;
//   overlay.style.display = "block";
// }

// function closeImage() {
//   var overlay = document.getElementById("overlay");
//   overlay.style.display = "none";
// }


// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                // label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    const behaviorTest = document.getElementById('behavior_test');
    behaviorTest.addEventListener('change',testTracker);
    function testTracker(){
        console.log(behaviorTest.value);
        behaviorTest.value.split(',');
        myChart.data.datasets[0].data = behaviorTest.value.split(',');
        myChart.update();
    }


