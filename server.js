var express = require('express');
var path = require('path')

var config = require('./mockedData/dashboard-config/config')
var donutChart = require('./mockedData/donut-chart')
var heatMap = require('./mockedData/heat-map')
var dataTable = require('./mockedData/data-table')
var simpleLineChart = require('./mockedData/simple-line-chart')
var simpleList = require('./mockedData/simple-list')
var stackedColumnChart = require('./mockedData/stacked-column-chart')
var combinationChart = require('./mockedData/combination-chart')
var columnChart = require('./mockedData/column-chart')
var actionList = require('./mockedData/action-list')
var actionGrid = require('./mockedData/action-grid')
var dashboardContent = require('./mockedData/dashboard-content')
var countList = require('./mockedData/count-list')


var app = express();
var PORT = process.env.PORT || 8080;

// mongoose instance connection url connection
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

app.get('/dashboardConfig', function (req, res) {
  res.send(config())
})

app.get('/:chart/:type', function(req, res){
    res.send(eval(camelize(req.params.chart))[camelize(req.params.type)]())
})

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});