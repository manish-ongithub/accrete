"use strict";
var Trending_industries = [
  {
    Industry: "Security Services",
    subText: "Diversified Industries",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Industry: "Industrial Cases",
    subText: "Chemicals",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Industry: "Brokerages",
    subText: "Financial Institutions Group",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Industry: "Life Insurance",
    subText: "Financial Institutions Group",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.12%",
    "arr-dir": "down"
  },
  {
    Industry: "Timber",
    subText: "Real Estate, Gaming & Lod...",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  }
];

var Trending_stocks = [
  {
    Company: "BEN-US",
    subText: "FRANKLIN RESOURCES INC",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "LB-US",
    subText: "L BRANDS INC",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "DISH-US",
    subText: "DISH NETWORK CORP CLA..",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Company: "CME-US",
    subText: "CME GROUP INC CLASS A",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "BBBY-US",
    subText: "Bed Bath & Beyon Inc.",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  }
];

var Trending_topics = [
  {
    Company: "Switches",
    subText: "Networking",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Hygiene",
    subText: "Personal Care",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Upstream",
    subText: "Electricity and Gas Utilities",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Company: "Hardware",
    subText: "Internet Services",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Routers",
    subText: "Networking",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  }
];

var LatestEarningCall = [
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Apple Inc.",
    "Aggregate Sentiment": "3.07",
    "Q/Q Delta": "5.8%",
    "Driving Topics": "Operating Income, Cash flow, Capital Returns",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (q2)",
    Company: "Fabrinet",
    "Aggregate Sentiment": "2.59",
    "Q/Q Delta": "1.2%",
    "Driving Topics": "Operating Income, Streaming, Leverage",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Hamilton Beach Brands Holding...",
    "Aggregate Sentiment": "-0.56",
    "Q/Q Delta": "11.0%",
    "Driving Topics": "Rents, funds from operation, Occupancy",
    "arr-dir": "up"
  },

  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Eastman Kodak Company",
    "Aggregate Sentiment": "2.60",
    "Q/Q Delta": "6.3%",
    "Driving Topics": "Operating Cost, Capital Returns, EBITA",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Koss Corporation",
    "Aggregate Sentiment": "1.06",
    "Q/Q Delta": "1.4%",
    "Driving Topics": "Operating Income, Leverage, Cash Flow",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Emersion Radio Corp",
    "Aggregate Sentiment": "0.50",
    "Q/Q Delta": "18.4%",
    "Driving Topics": "Guidance, Life and Health Insurance, Premiums",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Sony Corporation",
    "Aggregate Sentiment": "0.76",
    "Q/Q Delta": "13.2%",
    "Driving Topics": "Leverage, Automation, Building Products",
    "arr-dir": "up"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Sonos, Inc.",
    "Aggregate Sentiment": "1.76",
    "Q/Q Delta": "4.1%",
    "Driving Topics": "Guidance, Building Products, EMEA",
    "arr-dir": "up"
  }
];

function CreateDynamicGrid(tableID, data, sortParams) {
  var sortedColumnName = "";
  var sortDir = "asc";
  var sortArrow = "";
  if (sortParams != undefined) {
    sortedColumnName = sortParams.col;
    sortDir = sortParams.dir;
    if (sortDir == "asc") {
      sortArrow = '&nbsp;<i class="fa fa-long-arrow-up"></i>';
    } else {
      sortArrow = '&nbsp;<i class="fa fa-long-arrow-down"></i>';
    }
  }
  var col = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key !== "arr-dir" && key !== "subText") {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
  }

  var table = document.getElementById(tableID);
  if (table) {
    while (table.hasChildNodes()) {
      table.removeChild(table.childNodes[0]);
    }
  }
  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1); // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.
    if (
      col[i] == "Company" ||
      col[i] == "Aggregate Sentiment" ||
      col[i] == "Q/Q Delta" ||
      col[i] == "Industry"
    ) {
      var link = document.createElement("a");
      link.setAttribute("class", "sortableHeader");
      link.setAttribute("style", "font-size:14px;font-weight:normal;");

      if (col[i] == sortedColumnName) {
        link.innerHTML = col[i] + sortArrow;
      } else {
        link.innerHTML = col[i];
      }
      link.addEventListener("click", SortTableColumn, false);
      link.params = {};
      link.params.table_id = tableID;
      link.params.columnIndex = i;
      link.params.colName = col[i];
      link.params.dir = sortDir;
      th.appendChild(link);
    } else {
      th.innerHTML = col[i];
    }
    if (col[i] == "Aggregate Sentiment" || col[i] == "Q/Q Delta") {
      th.setAttribute("style", "text-align:center;");
    }
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      if (col[j] == "Aggregate Sentiment" || col[j] == "Q/Q Delta") {
        tabCell.setAttribute("style", "text-align:center;");

        if (col[j] == "Aggregate Sentiment")
          tabCell.setAttribute("style", "color:rgb(48, 204, 91);");
      }
      if (col[j] == "Driving Topics") {
        var valArr = data[i][col[j]].split(",");
        var strHTML = "";
        for (let k = 0; k < valArr.length; ++k) {
          strHTML +=
            '<span  class="badge badge-secondary customBadge">' +
            valArr[k] +
            "</span>&nbsp";
        }
        tabCell.innerHTML = strHTML;
      } else if (col[j] == "Q/Q Delta") {
        let arr_str = "";
        if (data[i]["arr-dir"] == "up")
          arr_str = "<i class='fa fa-long-arrow-up'>";
        else arr_str = "<i class='fa fa-long-arrow-down'>";

        var strHTML =
          '<span  class="badge badge-secondary greenBadge" > ' +
          arr_str +
          "</i>&nbsp;" +
          data[i][col[j]] +
          "</span>&nbsp";
        tabCell.innerHTML = strHTML;
      } else if (col[j] == "Company" || col[j] == "Industry") {
        if (data[i]["subText"] !== undefined) {
          let html =
            "<div class = 'text-nowrap'>" +
            data[i][col[j]] +
            "</div>" +
            "<div class = 'text-nowrap' style='color:#888888;'>" +
            data[i]["subText"] +
            "</div>";
          tabCell.innerHTML = html;
        } else {
          tabCell.innerHTML = data[i][col[j]];
        }
      } else {
        tabCell.innerHTML = data[i][col[j]];
      }
    }
  }
}

function CreateLatestEarningGrid(tableID, data, sortParams) {
  var sortedColumnName = "";
  var sortDir = "asc";
  var sortArrow = "";
  if (sortParams != undefined) {
    sortedColumnName = sortParams.col;
    sortDir = sortParams.dir;
    if (sortDir == "asc") {
      sortArrow = '&nbsp;<i class="fa fa-long-arrow-up"></i>';
    } else {
      sortArrow = '&nbsp;<i class="fa fa-long-arrow-down"></i>';
    }
  }
  var col = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (key !== "arr-dir" && key !== "subText") {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
  }

  var table = document.getElementById(tableID);
  if (table) {
    while (table.hasChildNodes()) {
      table.removeChild(table.childNodes[0]);
    }
  }
  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1); // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.

    if (
      col[i] == "Company" ||
      col[i] == "Aggregate Sentiment" ||
      col[i] == "Q/Q Delta" ||
      col[i] == "Industry"
    ) {
      var link = document.createElement("a");
      link.setAttribute("class", "sortableHeader text-white");

      if (col[i] == sortedColumnName) {
        link.innerHTML = col[i] + sortArrow;
      } else {
        link.innerHTML = col[i];
      }
      link.addEventListener("click", SortTableColumn, false);
      link.params = {};
      link.params.table_id = tableID;
      link.params.columnIndex = i;
      link.params.colName = col[i];
      link.params.dir = sortDir;
      th.appendChild(link);
    } else {
      th.innerHTML = col[i];
    }
    if (col[i] == "Aggregate Sentiment") {
      th.setAttribute("style", "text-align:center;");
    }
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      if (col[j] == "Aggregate Sentiment" || col[j] == "Q/Q Delta") {
        tabCell.setAttribute("style", "text-align:center;");

        if (col[j] == "Aggregate Sentiment")
          tabCell.setAttribute("style", "color:rgb(48, 204, 91);");
      }
      if (col[j] == "Driving Topics") {
        var valArr = data[i][col[j]].split(",");
        var strHTML = "";
        for (let k = 0; k < valArr.length; ++k) {
          strHTML +=
            '<span  class="badge badge-secondary customBadge">' +
            valArr[k] +
            "</span>&nbsp";
        }
        tabCell.innerHTML = strHTML;
      } else if (col[j] == "Q/Q Delta") {
        let arr_str = "";
        if (data[i]["arr-dir"] == "up")
          arr_str = "<i class='fa fa-long-arrow-up'>";
        else arr_str = "<i class='fa fa-long-arrow-down'>";

        var strHTML =
          '<span  class="badge badge-secondary greenBadge" > ' +
          arr_str +
          "</i>&nbsp;" +
          data[i][col[j]] +
          "</span>&nbsp";
        tabCell.innerHTML = strHTML;
      } else if (col[j] == "Company" || col[j] == "Industry") {
        if (data[i]["subText"] !== undefined) {
          let html =
            "<div class = 'text-nowrap'>" +
            data[i][col[j]] +
            "</div>" +
            "<div class = 'text-nowrap' style='color:#888888;'>" +
            data[i]["subText"] +
            "</div>";
          tabCell.innerHTML = html;
        } else {
          tabCell.innerHTML = data[i][col[j]];
        }
      } else {
        tabCell.innerHTML = data[i][col[j]];
      }
    }
  }
}

var sortByProperty = function(property, dir) {
  if (dir == "asc") {
    return function(x, y) {
      if (isNaN(parseFloat(x[property]))) {
        return x[property] === y[property]
          ? 0
          : x[property] > y[property]
          ? 1
          : -1;
      } else {
        var a = parseFloat(x[property]);
        var b = parseFloat(y[property]);
        return a === b ? 0 : a > b ? 1 : -1;
      }
    };
  }
  if (dir == "desc") {
    return function(x, y) {
      if (isNaN(parseFloat(x[property]))) {
        return x[property] === y[property]
          ? 0
          : x[property] < y[property]
          ? 1
          : -1;
      } else {
        var a = parseFloat(x[property]);
        var b = parseFloat(y[property]);
        return a === b ? 0 : a < b ? 1 : -1;
      }
    };
  }
};

function SortTableColumn(evt) {
  console.log(evt);
  var table_id = evt.target.params.table_id;
  //var sortColumn = evt.target.params.columnIndex;
  var sortBy = evt.target.params.colName;
  var dir = evt.target.params.dir;
  var sortParams = {};
  sortParams.col = sortBy;
  if (dir == "asc") sortParams.dir = "desc";
  else if (dir == "desc") sortParams.dir = "asc";

  if (table_id == "tblTrendingInd") {
    Trending_industries.sort(sortByProperty(sortBy, dir));

    CreateDynamicGrid("tblTrendingInd", Trending_industries, sortParams);
  }
  if (table_id == "tblTrendingStocks") {
    Trending_stocks.sort(sortByProperty(sortBy, dir));
    CreateDynamicGrid("tblTrendingStocks", Trending_stocks, sortParams);
  }
  if (table_id == "tblTrendingTopics") {
    Trending_topics.sort(sortByProperty(sortBy, dir));
    CreateDynamicGrid("tblTrendingTopics", Trending_topics, sortParams);
  }
  if (table_id == "tblEarningCall") {
    LatestEarningCall.sort(sortByProperty(sortBy, dir));
    CreateDynamicGrid("tblEarningCall", LatestEarningCall, sortParams);
  }
}

function CompareRowOfText(a, b) {
  var aval = a.value;
  var bval = b.value;
  return aval == bval ? 0 : aval > bval ? 1 : -1;
} // function CompareRowOfText()

function CompareRowOfNumbers(a, b) {
  var aval = /\d/.test(a.value) ? parseFloat(a.value) : 0;
  var bval = /\d/.test(b.value) ? parseFloat(b.value) : 0;
  return aval == bval ? 0 : aval > bval ? 1 : -1;
} // function CompareRowOfNumbers()

function CreateCRSD_Chart(elementID) {
  // Age categories
  var categories = [
    "Apple Inc.",
    "Fabrinet",
    "Hamilton Beach Brands...",
    "Eastman Kodak Company",
    "Koss Corporation",
    "Emersion Radio Corp.",
    "Koninklijke Philips N.V.",
    "SGOCO Group, Ltd.",
    "Sony Corporation",
    "Sonos, Inc.",
    "Universal Electronics Inc.",
    "Viomi Technology Co., Ltd",
    "Vuzix Corporation",
    "Energous Corporation"
  ];

  var subHTML =
    '<div><button type="button" class="btn btn-sm btn-dark">Q2-2017<i class="fa fa-angle-down"></i></button>';
  subHTML +=
    '<span class="text-white" style="padding:5px;font-size:14px;">&nbsp;to&nbsp;</span>';
  subHTML +=
    '<button type="button" class="btn btn-sm  btn-dark">Q1-2019<i class="fa fa-angle-down"></i></button></div>';

  Highcharts.chart(elementID, {
    chart: {
      type: "bar",
      color: "rgb(18, 24, 42)",
      backgroundColor: "rgb(12,16,29)",
      height: "600px"
    },

    title: {
      text: "Compay Ranking by Sentiment Delta",
      align: "left",
      style: {
        color: "white"
      }
    },
    subtitle: {
      text: subHTML,
      useHTML: true,
      align: "left"
    },
    legend: false,
    xAxis: [
      {
        categories: categories,
        labels: {
          style: {
            color: "white"
          }
        }
        //reversed: false,
      }
    ],
    yAxis: {
      title: {
        text: null
      },
      //labels:
      minorTicks: false,
      min: -1,
      max: 2,
      tickInterval: 0.5
    },

    plotOptions: {
      series: {
        stacking: "normal"
      },
      bar: {
        zones: [
          {
            value: 0, // Values up to 0 (not including) have the color red
            color: "red"
          },
          {
            color: "green" // Values from 0 (including) and up have the color green
          }
        ],
        borderWidth: 0,
        pointWidth: 15
      }
    },

    series: [
      {
        data: [
          1.8,
          1.7,
          1.6,
          1.4,
          1.3,
          1.1,
          0.9,
          0.4,
          0.3,
          0.1,
          -0.25,
          -0.4,
          -0.6,
          -0.7
        ]
      }
    ]
  });
}

function CreateAST_Chart(elementID) {
  var subHTML =
    '<div><button type="button" class="btn btn-sm  btn-dark">Q2-2017<i class="fa fa-angle-down"></i></button>';
  subHTML +=
    '<span class="text-white" style="padding:5px;font-size:14px;">&nbsp;to&nbsp;</span>';
  subHTML +=
    '<button type="button" class="btn btn-sm  btn-dark">Q1-2019<i class="fa fa-angle-down"></i></button></div>';
  Highcharts.chart(elementID, {
    chart: {
      backgroundColor: "rgb(12,16,29)",
      style: {
        color: "white"
      }
    },
    title: {
      text: "<div class=''>Aggregate Sentiment Trend</div>",
      align: "left",
      useHTML: true,
      style: {
        color: "white"
      }
    },
    subtitle: {
      useHTML: true,
      align: "left",
      text: subHTML
    },
    yAxis: {
      opposite: true,
      title: false,
      minorTicks: false,
      min: 0,
      max: 5
    },
    xAxis: {
      categories: [
        "Q2-2017",
        "Q3-2017",
        "Q4-2017",
        "Q1-2018",
        "Q2-2018",
        "Q3-2018",
        "Q4-2018",
        "Q1-2019"
      ]
      // title: {
      //     text: 'Number of Employees'
      // },
    },
    legend: {
      enabled: false,
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {},

    series: [
      {
        //name: 'Installation',
        data: [3.8, 4.5, 3.5, 2.5, 3, 2, 3, 3.5]
      }
    ]

    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 500
    //       },
    //       chartOptions: {
    //         legend: {
    //           enable: false,
    //           layout: "horizontal",
    //           align: "center",
    //           verticalAlign: "bottom"
    //         }
    //       }
    //     }
    //   ]
    // }
  });
}

var data_MobileDevices = {
  name: "Q2-2017 to Q1-2019",
  data: [1, 1.4, -1.5, -1, 3, 2, 1, 4],
  title: "Mobile Devices",
  subtitle: ["34 Mentions", "4.61", "35.2%", "from last quarter"]
};

var data_Services = {
  name: "Q2-2017 to Q1-2019",
  data: [1, 2, 0.85, -1, 1, -1, 0.5, 2],
  title: "Services",
  subtitle: ["28 Mentions", "2.34", "28.1%", "from last quarter"]
};

var data_Margins = {
  name: "Q2-2017 to Q1-2019",
  data: [2, 0.9, 1.5, 0.5, -0.5, 0.5, 0.5, 3],
  title: "Margins",
  subtitle: ["12 Mentions", "3.15", "25.2%", "from last quarter"]
};
var data_Guidance = {
  name: "Q2-2017 to Q1-2019",
  data: [1, 1.5, -0.75, -0.75, 1, 0.5, -0.5, 1],
  title: "Guidance",
  subtitle: ["39 Mentions", "1.20", "22.1%", "from last quarter"]
};
function CreateTrendingTopicsChart(divID, chartData) {
  var subtitleHTML = "<div>";
  for (var i = 0; i < chartData.subtitle.length; ++i) {
    if (i == 0) {
      subtitleHTML +=
        '<div class="mention">' + chartData.subtitle[i] + "</div>";
    } else if (i == 1) {
      subtitleHTML +=
        '<span class="sentiment">' +
        chartData.subtitle[i] +
        "</span>&nbsp;&nbsp;&nbsp;<span style='color:#30cc5b'></span>";
    } else if (i == 2) {
      subtitleHTML +=
        '<span class="delta">&nbsp;' + chartData.subtitle[i] + "</span>";
    } else if (i == 3) {
      subtitleHTML +=
        '&nbsp;&nbsp;&nbsp;<span class="fromlastqu">' +
        chartData.subtitle[i] +
        "</span>";
    }
  }
  subtitleHTML += "</div>";
  Highcharts.chart(divID, {
    chart: {
      type: "column",
      borderWidth: 0,
      backgroundColor: "rgb(12,16,29)",
      height: "300px"
    },
    title: {
      text: chartData.title,
      align: "left",
      color: "white",
      style: {
        color: "white"
      }
    },

    subtitle: {
      useHTML: true,
      text: subtitleHTML,
      align: "left"
    },

    xAxis: {
      visible: false
    },
    yAxis: {
      opposite: true,
      title: false,
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: "transparent",
      mix: -5,
      max: 5
    },
    plotOptions: {
      borderWidth: 0,
      column: {
        zones: [
          {
            value: 0, // Values up to 0 (not including) have the color red
            color: "red"
          },
          {
            color: "green" // Values from 0 (including) and up have the color green
          }
        ],
        borderWidth: 0
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: chartData.name,
        data: chartData.data
      }
    ]
  });
}
