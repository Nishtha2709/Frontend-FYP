type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function () {

    // global variables and functions for dynamic graphs
    function addData(label, data, chartName) {
      chartName.data.labels.push(label);
      chartName.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
      });
      chartName.update();
    }

    function removeFirstData(chartName) {
      chartName.data.labels.splice(0, 1);
      chartName.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
    }

    const MAX_DATA_COUNT = 10;
    //connect to the socket server.
    //var socket = io.connect("http://" + "127.0.0.1" + ":" + "5000");
    var socket = io.connect();
    console.log("socket connected");

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 80,
            suggestedMax: 90,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple2 = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0.15,
            suggestedMax: 1.70,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0.20,
            suggestedMax: 0.25,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0.95,
            suggestedMax: 0.99,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 1.95,
            suggestedMax: 1.99,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    // ====================== chart start : Ratio Test ==========================
    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var myPriCurrChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        datasets: [{
          label: "Ratio Test",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          // data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    });

    const resultBox = document.querySelector('.result-box');
    const resultText = document.querySelector('.result-text');

    let hif = 0;
    let functional_ratio = 0;

    const resultBox1 = document.querySelector('.result-box1');
    const resultText1 = document.querySelector('.result-text1');

    //receive details from server
    socket.on("transformerTestData", function (msg) {
      // console.log("Received sensorData :: " + msg.date + " :: " + msg.ratio_test);
      var ratioTestValue = msg.ratio_test;
      console.log("Ratio Test Value " + ratioTestValue);

      // Show only MAX_DATA_COUNT data
      if (myPriCurrChart.data.labels.length > MAX_DATA_COUNT) {
        removeFirstData(myPriCurrChart);
      }
      addData(msg.date, ratioTestValue, myPriCurrChart);
      
      // document.getElementById("tableRow1").innerHTML = ratioTestValue;
      if(ratioTestValue>2){
        alert("Ratio Test Alert: Condition Very Poor - There is severe winding damage. Inspect the windings for any signs of damage or deterioration, such as breaks or cracks. The damaged or deteriorated windings should be repaired or replaced immediately.");
      }else if(ratioTestValue>1 && ratioTestValue<=2){
        alert("Ratio Test Alert: Condition Poor - There is severe winding damage. Inspect the windings for any signs of damage or deterioration, such as breaks or cracks. The damaged or deteriorated windings should be repaired or replaced immediately.");
      }

    });

    // ==================== chart end : Ratio Test ===================


    // ==================== chart start : Efficiency ================================
    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var mySecVoltchart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        //labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
        datasets: [{
          label: "Efficiency",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d048b6',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d048b6',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          //data: [80, 100, 70, 80, 120, 80],
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipOrange
    });



    //receive details from server
    socket.on("transformerTestData", function (msg) {
      console.log("Received sensorData :: " + msg.efficiency);
      var efficiencyValue = msg.efficiency;
      // Show only MAX_DATA_COUNT data
      if (mySecVoltchart.data.labels.length > MAX_DATA_COUNT) {
        removeFirstData(mySecVoltchart);
      }
      addData(msg.date, msg.efficiency, mySecVoltchart);
      if(efficiencyValue<0.6){
        alert("Efficiency Test Alert: Condition Very Poor - There are copper losses because of issues with the transformer's winding resistance or connection, such as loose connections or damaged windings, and/or there may be iron losses because of issues with the transformer's core, such as loose laminations, rust, or damage. The transformer’s insulation also may be damaged. Please get it checked immediately! ");
      }else if(efficiencyValue>=0.6 && efficiencyValue<=0.75){
        alert("Efficiency Test Alert: Condition Poor - There may be copper losses because of issues with the transformer's winding resistance or connection, such as loose connections or damaged windings, and/or there may be iron losses because of issues with the transformer's core, such as loose laminations, rust, or damage. The transformer’s insulation also may be damaged. Please get it checked immediately!");
      }
    });
    //=======================  chart end : Efficiency =======================


    // =================== chart start : oil temperature =====================
    var ctx = document.getElementById("chartBig2").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var mySecCurrChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        // labels: chart_labels,
        datasets: [{
          label: "Oil Temperature",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          // data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipBlue
    });

    //receive details from server
    socket.on("transformerTestData", function (msg) {
      console.log("Received sensorData :: " + msg.date + " :: " + msg.oil_temperature);

      var oilValue = msg.oil_temperature;
      // Show only MAX_DATA_COUNT data
      if (mySecCurrChart.data.labels.length > MAX_DATA_COUNT) {
        removeFirstData(mySecCurrChart);
      }
      addData(msg.date, msg.oil_temperature, mySecCurrChart);

      if(oilValue>90 && oilValue<100){
        alert("Oil Temperature Test Alert: Condition Very Poor - The cooling system may be faulty, such as a malfunctioning fan or radiator, or a blockage in the cooling channels. There could also be low oil levels or the transformer's oil may be contaminated or degraded. The oil pump could also be faulty. The rise in oil temperature could also be due to the transformer being located in an area with a high ambient temperature, such as direct sunlight or a hot environment. Please get it checked immediately! ");
      }
      else if(oilValue>=80 && oilValue<=90){
        alert("Oil Temperature Test Alert: Condition Poor - The cooling system may be faulty, such as a malfunctioning fan or radiator, or a blockage in the cooling channels. There could also be low oil levels or the transformer's oil may be contaminated or degraded. The oil pump could also be faulty. The rise in oil temperature could also be due to the transformer being located in an area with a high ambient temperature, such as direct sunlight or a hot environment. Please get it checked immediately! ");
      }
    });
    //===================== chart end : oil temperature ==================================


    //====================== chart start : Winding Resistance ==========================
    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var myPriVoltChart = new Chart(ctxGreen, {
      type: 'line',
      responsive: true,
      legend: {
        display: false
      },

      data: {
        // labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
        datasets: [{
          label: "Winding Resistance",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          // data: [90, 27, 60, 12, 80],
        }]
      },
      // data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });

    socket.on("transformerTestData", function (msg) {
      console.log("Received sensorData :: " + msg.winding_resistance_diff);

      // var windingTest = winding_resistance_diff;

      // Show only MAX_DATA_COUNT data
      if (myPriVoltChart.data.labels.length > MAX_DATA_COUNT) {
        removeFirstData(myPriVoltChart);
      }
      addData(msg.date, msg.winding_resistance_diff, myPriVoltChart);

      // if(windingTest>5){
      //   alert("Winding Resistance Test Alert: Condition Very Poor - The cooling system may be faulty, such as a malfunctioning fan or radiator, or a blockage in the cooling channels. There could also be low oil levels or the transformer's oil may be contaminated or degraded. The oil pump could also be faulty. The rise in oil temperature could also be due to the transformer being located in an area with a high ambient temperature, such as direct sunlight or a hot environment. Please get it checked immediately! ");
      // }else if(windingTest>3 && windingTest<=5){
      //   alert("Winding Resistance Test Alert: Condition Poor - The cooling system may be faulty, such as a malfunctioning fan or radiator, or a blockage in the cooling channels. There could also be low oil levels or the transformer's oil may be contaminated or degraded. The oil pump could also be faulty. The rise in oil temperature could also be due to the transformer being located in an area with a high ambient temperature, such as direct sunlight or a hot environment. Please get it checked immediately! ");
      // }
    });
    



    // ======================= chart end : Winding Resistance ==============================

  }

}




