const MAX_DATA_COUNT = 1;
//connect to the socket server.
//var socket = io.connect("http://" + "127.0.0.1" + ":" + "5000");


function addData(data, id) {
  console.log(data);
  const currData = document.getElementById(id);
  currData.innerHTML = data;
}


var socket = io.connect();
console.log("socket connected");



// test1 id------------------------------
const resultBox = document.querySelector('.result-box');
const resultText = document.querySelector('.result-text');


let hif = 0;
let functional_ratio = 0;


const alertButton = document.getElementById("alertButton");

const resultBox1 = document.querySelector('.result-box1');
const resultText1 = document.querySelector('.result-text1');

//receive details from server
socket.on("transformerTestData", function (msg) {
console.log("Received trasnformerData :: " + msg.ratio_test);

  addData(msg.ratio_test, "test1");



  if (msg.ratio_test >= 0 && msg.ratio_test <= 0.36) {
  

  resultBox.classList.add('blue');
  resultBox.classList.remove('green', 'yellow', 'orange', 'red');
  resultText.textContent = 'VERY GOOD';
  hif = 4;
  functional_ratio = 0.01;

  resultBox1.classList.add('green');
  resultBox1.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText1.textContent = functional_ratio;
  

  
  alertButton.textContent = "Click Me1";

  alertButton.addEventListener("click", function() {
    // display the alert
    alert("hello");
    
    
    

  });

  



  } else if (msg.ratio_test > 0.36 && msg.ratio_test <= 0.5) {
  resultBox.classList.add('green');
  resultBox.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText.textContent = 'GOOD';
  hif = 3;
  functional_ratio = 0.0075;

  resultBox1.classList.add('blue');
  resultBox1.classList.remove('green', 'yellow', 'orange', 'red');
  resultText1.textContent = functional_ratio;
  
  alertButton.textContent = "Click Me2";

  alertButton.addEventListener("click", function() {
    // display the alert
    alert("hello");

  });


  } else if (msg.ratio_test > 0.5 && msg.ratio_test <= 1.0) {
  resultBox.classList.add('yellow');
  resultBox.classList.remove('green', 'blue', 'orange', 'red');
  resultText.textContent = 'REGULAR';
  hif = 2;
  functional_ratio = 0.005;

  resultBox1.classList.add('blue');
  resultBox1.classList.remove('green', 'yellow', 'orange', 'red');
  resultText1.textContent = functional_ratio;
  

  alertButton.textContent = "Click Me3";

  alertButton.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  } else if (msg.ratio_test > 1.0 && msg.ratio_test <= 2.0) {
  resultBox.classList.add('orange');
  resultBox.classList.remove('green', 'yellow', 'blue', 'red');
  resultText.textContent = 'POOR';
  hif = 1;
  functional_ratio = 0.0025;

  resultBox1.classList.add('blue');
  resultBox1.classList.remove('green', 'yellow', 'orange', 'red');
  resultText1.textContent = functional_ratio;
  
  alertButton.textContent = "Click Me4";

  alertButton.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  } else if (msg.ratio_test > 2.0) {
  resultBox.classList.add('red');
  resultBox.classList.remove('green', 'yellow', 'orange', 'blue');
  resultText.textContent = 'VERY POOR';
  hif = 0;
  functional_ratio = 0;

  resultBox1.classList.add('blue');
  resultBox1.classList.remove('green', 'yellow', 'orange', 'red');
  resultText1.textContent = functional_ratio;
  
  alertButton.textContent = "Click Me5";

  alertButton.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  }

  

  

  
});

//////////
//const test = 35; // this is just an example value, replace with your actual variable




/////////


//test 2 id------------------------------
const resultBox2 = document.querySelector('.result-box2');
const resultText2 = document.querySelector('.result-text2');


let hif_efficiency = 0;
let functional_efficiency = 0;


const alertButton1 = document.getElementById("alertButton1");

const resultBox3 = document.querySelector('.result-box3');
const resultText3 = document.querySelector('.result-text3');

//receive details from server

socket.on("transformerTestData", function (msg) {
console.log("Received trasnformerData :: " + msg.efficiency);


  addData(msg.efficiency, "test2");



  if (msg.efficiency > 0.95 && msg.efficiency <= 1.0) {
  

  resultBox2.classList.add('blue');
  resultBox2.classList.remove('green', 'yellow', 'orange', 'red');
  resultText2.textContent = 'VERY GOOD';
  hif_efficiency = 4;
  functional_efficiency = 0.01;

  resultBox3.classList.add('blue');
  resultBox3.classList.remove('green', 'yellow', 'orange', 'red');
  resultText3.textContent = functional_efficiency;
  

  
  alertButton1.textContent = "Click Me1";

  alertButton1.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.efficiency > 0.85 && msg.efficiency <= 0.95) {
  resultBox2.classList.add('green');
  resultBox2.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText2.textContent = 'GOOD';
  hif_efficiency = 3;
  functional_efficiency = 0.0075;

  resultBox3.classList.add('green');
  resultBox3.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText3.textContent = functional_efficiency;
  

  
  alertButton1.textContent = "Click Me1";

  alertButton1.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.efficiency > 0.75 && msg.efficiency <= 0.85) {
  resultBox2.classList.add('yellow');
  resultBox2.classList.remove('green', 'blue', 'orange', 'red');
  resultText2.textContent = 'REGULAR';
  hif_efficiency = 2;
  functional_efficiency = 0.005;

  resultBox3.classList.add('yellow');
  resultBox3.classList.remove('blue', 'green', 'orange', 'red');
  resultText3.textContent = functional_efficiency;
  

  
  alertButton1.textContent = "Click Me1";

  alertButton1.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });
  
  } else if (msg.efficiency > 0.6 && msg.efficiency <= 0.75) {
  resultBox2.classList.add('orange');
  resultBox2.classList.remove('green', 'yellow', 'blue', 'red');
  resultText2.textContent = 'POOR';
  hif_efficiency = 1;
  functional_efficiency = 0.0025;

  resultBox3.classList.add('orange');
  resultBox3.classList.remove('blue', 'yellow', 'green', 'red');
  resultText3.textContent = functional_efficiency;
  

  
  alertButton1.textContent = "Click Me1";

  alertButton1.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  } else if (msg.efficiency <= 0.6) {
  resultBox2.classList.add('red');
  resultBox2.classList.remove('green', 'yellow', 'orange', 'blue');
  resultText2.textContent = 'VERY POOR';
  hif_efficiency = 0;
  functional_efficiency = 0;

  resultBox3.classList.add('red');
  resultBox3.classList.remove('blue', 'yellow', 'orange', 'green');
  resultText3.textContent = functional_efficiency;
  

  
  alertButton1.textContent = "Click Me1";

  alertButton1.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  }
  
});



//test 3 id------------------------------

const resultBox4 = document.querySelector('.result-box4');
const resultText4 = document.querySelector('.result-text4');


let hif_winding = 0;
let functional_winding = 0;


const alertButton2 = document.getElementById("alertButton2");

const resultBox5 = document.querySelector('.result-box5');
const resultText5 = document.querySelector('.result-text5');

//receive details from server
socket.on("transformerTestData", function (msg) {
  console.log("Received trasnformerData :: " + msg.winding_resistance_diff);
    
  addData(msg.winding_resistance_diff, "test3");





  if (msg.winding_resistance_diff < 1.0) {
  

  resultBox4.classList.add('blue');
  resultBox4.classList.remove('green', 'yellow', 'orange', 'red');
  resultText4.textContent = 'VERY GOOD';
  hif_winding = 4;
  functional_winding = 0.01;

  resultBox5.classList.add('blue');
  resultBox5.classList.remove('green', 'yellow', 'orange', 'red');
  resultText5.textContent = functional_winding;
  

  
  alertButton2.textContent = "Click Me1";

  alertButton2.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.winding_resistance_diff >= 1.0 && msg.winding_resistance_diff < 2.0) {
  resultBox4.classList.add('green');
  resultBox4.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText4.textContent = 'GOOD';
  hif_winding = 3;
  functional_winding = 0.0075;

  resultBox5.classList.add('green');
  resultBox5.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText5.textContent = functional_winding;
  

  
  alertButton2.textContent = "Click Me1";

  alertButton2.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.winding_resistance_diff >= 2.0 && msg.winding_resistance_diff < 3.0) {
  resultBox4.classList.add('yellow');
  resultBox4.classList.remove('green', 'blue', 'orange', 'red');
  resultText4.textContent = 'REGULAR';
  hif_winding = 2;
  functional_winding = 0.005;

  resultBox5.classList.add('yellow');
  resultBox5.classList.remove('blue', 'green', 'orange', 'red');
  resultText5.textContent = functional_winding;
  

  
  alertButton2.textContent = "Click Me1";

  alertButton2.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });
  
  } else if (msg.winding_resistance_diff >= 3.0 && msg.winding_resistance_diff < 5.0) {
  resultBox4.classList.add('orange');
  resultBox4.classList.remove('green', 'yellow', 'blue', 'red');
  resultText4.textContent = 'POOR';
  hif_winding = 1;
  functional_winding = 0.0025;

  resultBox5.classList.add('orange');
  resultBox5.classList.remove('blue', 'yellow', 'green', 'red');
  resultText5.textContent = functional_winding;
  

  
  alertButton2.textContent = "Click Me1";

  alertButton2.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  } else if (msg.winding_resistance_diff >= 5.0) {
  resultBox4.classList.add('red');
  resultBox4.classList.remove('green', 'yellow', 'orange', 'blue');
  resultText4.textContent = 'VERY POOR';
  hif_winding = 0;
  functional_winding = 0;

  resultBox5.classList.add('red');
  resultBox5.classList.remove('blue', 'yellow', 'orange', 'green');
  resultText5.textContent = functional_winding;
  

  
  alertButton2.textContent = "Click Me1";

  alertButton2.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  }








    });


//test 4 id------------------------------

const resultBox6 = document.querySelector('.result-box6');
const resultText6 = document.querySelector('.result-text6');


let hif_oil = 0;
let dielectric_oil = 0;


const alertButton3 = document.getElementById("alertButton2");

const resultBox7 = document.querySelector('.result-box7');
const resultText7 = document.querySelector('.result-text7');

//receive details from server
socket.on("transformerTestData", function (msg) {
  console.log("Received trasnformerData :: " + msg.oil_temperature);
    
  addData(msg.oil_temperature, "test4");

    




  if (msg.oil_temperature >= 40 && msg.oil_temperature < 60) {
  

  resultBox6.classList.add('blue');
  resultBox6.classList.remove('green', 'yellow', 'orange', 'red');
  resultText6.textContent = 'VERY GOOD';
  hif_oil = 4;
  dielectric_oil = 0.01;

  resultBox7.classList.add('blue');
  resultBox7.classList.remove('green', 'yellow', 'orange', 'red');
  resultText7.textContent = dielectric_oil;
  

  
  alertButton3.textContent = "Click Me1";

  alertButton3.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.oil_temperature >= 60 && msg.oil_temperature < 70) {
  resultBox6.classList.add('green');
  resultBox6.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText6.textContent = 'GOOD';
  hif_oil = 3;
  dielectric_oil = 0.0075;

  resultBox7.classList.add('green');
  resultBox7.classList.remove('blue', 'yellow', 'orange', 'red');
  resultText7.textContent = dielectric_oil;
  

  
  alertButton3.textContent = "Click Me1";

  alertButton3.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  } else if (msg.oil_temperature >= 70 && msg.oil_temperature < 80) {
  resultBox6.classList.add('yellow');
  resultBox6.classList.remove('green', 'blue', 'orange', 'red');
  resultText6.textContent = 'REGULAR';
  hif_oil = 2;
  dielectric_oil = 0.005;

  resultBox7.classList.add('yellow');
  resultBox7.classList.remove('blue', 'green', 'orange', 'red');
  resultText7.textContent = dielectric_oil;
  

  
  alertButton3.textContent = "Click Me1";

  alertButton3.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });
  
  } else if (msg.oil_temperature >= 80 && msg.oil_temperature < 90) {
  resultBox6.classList.add('orange');
  resultBox6.classList.remove('green', 'yellow', 'blue', 'red');
  resultText6.textContent = 'POOR';
  hif_oil = 1;
  dielectric_oil = 0.0025;

  resultBox7.classList.add('orange');
  resultBox7.classList.remove('blue', 'yellow', 'green', 'red');
  resultText7.textContent = dielectric_oil;
  

  
  alertButton3.textContent = "Click Me1";

  alertButton3.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  } else if (msg.oil_temperature >= 90 && msg.oil_temperature < 100) {
  resultBox6.classList.add('red');
  resultBox6.classList.remove('green', 'yellow', 'orange', 'blue');
  resultText6.textContent = 'VERY POOR';
  hif_oil = 0;
  dielectric_oil = 0;

  resultBox7.classList.add('red');
  resultBox7.classList.remove('blue', 'yellow', 'orange', 'green');
  resultText7.textContent = dielectric_oil;
  

  
  alertButton3.textContent = "Click Me1";

  alertButton3.addEventListener("click", function() {
    // display the alert
    alert("hello");
  });

  
  }















    });
  






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