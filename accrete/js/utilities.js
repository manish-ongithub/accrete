"use strict";
var Trending_industries = [
  {
    Industry: "Security Services",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Industry: "Industrial Cases",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Industry: "Brokerages",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Industry: "Life Insurance",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Industry: "Timber",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  }
];

var Trending_stocks = [
  {
    Company: "BEN-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "LB-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "DISH-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Company: "CME-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "BBBY-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  }
];

var Trending_topics = [
  {
    Company: "Switches",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Hygiene",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Upstream",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },

  {
    Company: "Hardware",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%",
    "arr-dir": "up"
  },
  {
    Company: "Routers",
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
      if (key !== "arr-dir") {
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
      //link.setAttribute("href", "");
      if (col[i] == sortedColumnName) link.innerHTML = col[i] + sortArrow;
      else link.innerHTML = col[i];
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
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
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

        var strHTML =
          '<span  class="badge badge-secondary greenBadge" > <i class="fa fa-long-arrow-up"></i>&nbsp;' +
          data[i][col[j]] +
          "</span>&nbsp";
        tabCell.innerHTML = strHTML;
      } else {
        tabCell.innerHTML = data[i][col[j]];
      }
    }
  }
}

var sortByProperty = function(property, dir) {
  if (dir == "asc") {
    return function(x, y) {
      return x[property] === y[property]
        ? 0
        : x[property] > y[property]
        ? 1
        : -1;
    };
  }
  if (dir == "desc") {
    return function(x, y) {
      return x[property] === y[property]
        ? 0
        : x[property] < y[property]
        ? 1
        : -1;
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

  Highcharts.chart(elementID, {
    chart: {
      type: "bar",
      color: "rgb(18, 24, 42)",
      backgroundColor: "rgb(12,16,29)"
    },

    title: {
      text: "Compay Ranking by Sentiment Delta",
      align: "left",
      style: {
        color: "white"
      }
    },
    subtitle: {
      text: ""
    },
    // legend: {
    //   enabled: false
    // },
    xAxis: [
      {
        categories: categories,
        style: {
          color: "white"
        }
        //reversed: false,
      }
    ],
    yAxis: {
      title: {
        text: null
      },
      labels: []
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
        ]
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
  Highcharts.chart(elementID, {
    chart: {
      backgroundColor: "rgb(12,16,29)",
      style: {
        color: "white"
      }
    },
    title: {
      text: "Aggregate Sentiment Trend",
      align: "left",
      style: {
        color: "white"
      }
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
