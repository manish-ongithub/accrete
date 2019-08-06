var Trending_industries = [
  {
    Industry: "Security Services",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Industry: "Industrial Cases",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Industry: "Brokerages",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },

  {
    Industry: "Life Insurance",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Industry: "Timber",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  }
];

var Trending_stocks = [
  {
    Company: "BEN-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "LB-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "DISH-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },

  {
    Company: "CME-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "BBBY-US",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  }
];

var Trending_topics = [
  {
    Company: "Switches",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "Hygiene",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "Upstream",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },

  {
    Company: "Hardware",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  },
  {
    Company: "Routers",
    "Aggregate Sentiment": "3.5",
    "Q/Q Delta": "13.23%"
  }
];

var LatestEarningCall = [
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Apple Inc.",
    "Aggregate Sentiment": "3.07",
    "Q/Q Delta": "5.8%",
    "Driving Topics": "Operating Income, Cash flow, Capital Returns"
  },
  {
    "Earnings Date": "05/10/2019 (q2)",
    Company: "Fabrinet",
    "Aggregate Sentiment": "2.59",
    "Q/Q Delta": "1.2%",
    "Driving Topics": "Operating Income, Streaming, Leverage"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Hamilton Beach Brands Holding...",
    "Aggregate Sentiment": "-0.56",
    "Q/Q Delta": "11.0%",
    "Driving Topics": "Rents, funds from operation, Occupancy"
  },

  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Eastman Kodak Company",
    "Aggregate Sentiment": "2.60",
    "Q/Q Delta": "6.3%",
    "Driving Topics": "Operating Cost, Capital Returns, EBITA"
  },
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Koss Corporation",
    "Aggregate Sentiment": "1.06",
    "Q/Q Delta": "1.4%",
    "Driving Topics": "Operating Income, Leverage, Cash Flow"
  },
  {
    "Earnings Date": "05/10/2019 (q3)",
    Company: "Emersion Radio Corp",
    "Aggregate Sentiment": "0.50",
    "Q/Q Delta": "18.4%",
    "Driving Topics": "Guidance, Life and Health Insurance, Premiums"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Sony Corporation",
    "Aggregate Sentiment": "0.76",
    "Q/Q Delta": "13.2%",
    "Driving Topics": "Leverage, Automation, Building Products"
  },
  {
    "Earnings Date": "05/10/2019 (Q1)",
    Company: "Sonos, Inc.",
    "Aggregate Sentiment": "1.76",
    "Q/Q Delta": "4.1%",
    "Driving Topics": "Guidance, Building Products, EMEA"
  }
];

function CreateDynamicGrid(tableID, data) {
  var col = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  var table = document.getElementById(tableID);

  // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  var tr = table.insertRow(-1); // TABLE ROW.

  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th"); // TABLE HEADER.
    th.addEventListener("click", SortTableColumn);
    th.params = {};
    th.params.table_id = tableID;
    th.params.columnIndex = i;
    th.params.colName = col[i];

    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data[i][col[j]];
    }
  }
}

var sortByProperty = function(property) {
  return function(x, y) {
    return x[property] === y[property] ? 0 : x[property] > y[property] ? 1 : -1;
  };
};

function SortTableColumn(evt) {
  console.log(evt);
  var tbl_id = evt.target.params.table_id;
  var sortColumn = evt.target.params.columnIndex;
  var sortBy = evt.target.params.colName;

  Trending_industries.sort(sortByProperty(sortBy));

  /*
  var table = document.getElementById(tbl_id);
  var tbody = table.getElementsByTagName("tbody")[0];
  var rows = tbody.getElementsByTagName("tr");
  var arrayOfRows = new Array();
  type = type.toUpperCase();

  for (var i = 1, len = rows.length; i < len; i++) {
    arrayOfRows[i - 1] = new Object();
    arrayOfRows[i - 1].oldIndex = i;
    var celltext = rows[i]
      .getElementsByTagName("td")
      [sortColumn].innerHTML.replace(/<[^>]*>/g, "");
    var re = type == "N" ? /[^\.\-\+\d]/g : /[^a-zA-Z0-9]/g;
    arrayOfRows[i - 1].value = celltext
      .replace(re, "")
      .substr(0, 25)
      .toLowerCase();
  }

  switch (type) {
    case "N":
      arrayOfRows.sort(CompareRowOfNumbers);
      break;
    default:
      arrayOfRows.sort(CompareRowOfText);
  }

  var newTableBody = document.createElement("tbody");

  for (var i = 0, len = arrayOfRows.length; i < len; i++) {
    newTableBody.appendChild(rows[arrayOfRows[i].oldIndex].cloneNode(true));
  }
  table.replaceChild(newTableBody, tbody);
  */
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
      color: "rgb(18, 24, 42)"
    },
    title: {
      text: "Compay Ranking by Sentiment Delta",
      align: "left"
    },
    subtitle: {
      text: ""
    },
    xAxis: [
      {
        categories: categories
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
