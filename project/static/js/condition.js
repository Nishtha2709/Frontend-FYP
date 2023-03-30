const MAX_DATA_COUNT = 1;
//connect to the socket server.
//var socket = io.connect("http://" + "127.0.0.1" + ":" + "5000");


function addData(data, id) {
  console.log("helloooooo"+data);
  const currData = document.getElementById(id);
  currData.innerHTML = data;
}


var socket = io.connect();
console.log("socket connected");



// test1 id------------------------------
const resultBox = document.querySelector('.result-box');
const resultText = document.querySelector('.result-text');
let hif = 0;

//receive details from server
socket.on("transformerTestData", function (msg) {
console.log("Received trasnformerData :: " + msg.ratio_test);

  addData(msg.ratio_test, "test1");

  if (msg.ratio_test >= 0 && msg.ratio_test <= 0.1) {
  resultBox.classList.add('blue');
  resultBox.classList.remove('green', 'yellow', 'orange', 'red')
  resultText.textContent = 'VERY GOOD';
  hif = 4;
  } else if (msg.ratio_test > 0.1 && msg.ratio_test <= 0.5) {
  resultBox.classList.add('green');
  resultBox.classList.remove('blue', 'yellow', 'orange', 'red')
  resultText.textContent = 'GOOD';
  hif = 3;
  } else if (msg.ratio_test > 0.5 && msg.ratio_test <= 1.0) {
  resultBox.classList.add('yellow');
  resultBox.classList.remove('green', 'blue', 'orange', 'red')
  resultText.textContent = 'REGULAR';
  hif = 2;
  } else if (msg.ratio_test > 1.0 && msg.ratio_test <= 2.0) {
  resultBox.classList.add('orange');
  resultBox.classList.remove('green', 'yellow', 'blue', 'red')
  resultText.textContent = 'POOR';
  hif = 1;
  } else if (msg.ratio_test > 2.0) {
  resultBox.classList.add('red');
  resultBox.classList.remove('green', 'yellow', 'orange', 'blue')
  resultText.textContent = 'VERY POOR';
  hif = 0;
  }

//   addData(msg.hif_ratio, "test11");
  
});

//////////
//const test = 35; // this is just an example value, replace with your actual variable




/////////


//test 2 id------------------------------
const resultBox1 = document.querySelector('.result-box1');
const resultText1 = document.querySelector('.result-text1');

//receive details from server
socket.on("transformerTestData", function (msg) {
console.log("Condition efficiency:: " + msg.efficiency);
  
addData(msg.efficiency, "test2");

if (msg.efficiency > 0.95 && msg.efficiency <= 1) {
resultBox1.classList.add('blue');
resultBox1.classList.remove('green', 'yellow', 'orange', 'red')
resultText1.textContent = 'VERY GOOD';
hif = 4;
} else if (msg.efficiency > 0.85 && msg.efficiency <= 0.95) {
resultBox1.classList.add('green');
resultBox1.classList.remove('blue', 'yellow', 'orange', 'red')
resultText1.textContent = 'GOOD';
hif = 3;
} else if (msg.efficiency > 0.75 && msg.efficiency <= 0.85) {
resultBox1.classList.add('yellow');
resultBox1.classList.remove('green', 'blue', 'orange', 'red')
resultText1.textContent = 'REGULAR';
hif = 2;
} else if (msg.efficiency > 0.6 && msg.efficiency <= 0.75) {
resultBox1.classList.add('orange');
resultBox1.classList.remove('green', 'yellow', 'blue', 'red')
resultText1.textContent = 'POOR';
hif = 1;
} else if (msg.efficiency <= 0.6) {
resultBox1.classList.add('red');
resultBox1.classList.remove('green', 'yellow', 'orange', 'blue')
resultText1.textContent = 'VERY POOR';
hif = 0;
}

//   addData(msg.hif_ratio, "test11");

});

  

//test 3 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
//   console.log("Received trasnformerData :: " + msg.winding_resistance_diff);
    
//       addData(msg.winding_resistance_diff, "test3");
//     });


//test 4 id------------------------------


//receive details from server
// socket.on("transformerTestData", function (msg) {
//   console.log("Received trasnformerData :: " + msg.oil_temperature);
    
//       addData(msg.oil_temperature, "test4");
//     });
  






//================== funtion to display image==============================
function openImage() {
  var overlay = document.getElementById("overlay");
  var imageContainer = document.getElementById("image-container");
  var image = document.getElementById("image");
  var imageUrl = "/static/img/ratio.png"; // Replace with your image URL
  image.src = imageUrl;
  overlay.style.display = "block";
}

function closeImage() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
