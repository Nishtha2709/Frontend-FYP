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


//receive details from server
socket.on("transformerTestData", function (msg) {
console.log("Received trasnformerData :: " + msg.ratio_test);

  addData(msg.ratio_test, "test1");
});


//test 2 id------------------------------


//receive details from server
socket.on("transformerTestData", function (msg) {
console.log("Received trasnformerData :: " + msg.ratio_test);
  
    addData(msg.ratio_test, "test2");
  });


//test 3 id------------------------------


//receive details from server
socket.on("transformerTestData", function (msg) {
  console.log("Received trasnformerData :: " + msg.ratio_test);
    
      addData(msg.ratio_test, "test3");
    });


//test 4 id------------------------------


//receive details from server
socket.on("transformerTestData", function (msg) {
  console.log("Received trasnformerData :: " + msg.ratio_test);
    
      addData(msg.ratio_test, "test4");
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
