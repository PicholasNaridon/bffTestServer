var express = require('express');
var path = require('path')
var config = require('./mockedData/dashboard-config/all')
var doughnut = require('./mockedData/donut-chart')
var heatmap = require('./mockedData/heat-map')
var dataTable = require('./mockedData/data-table')
var simpleLineChart = require('./mockedData/simple-line-chart')
var doughnut = require('./mockedData/donut-chart')
var simpleList = require('./mockedData/simple-list')
var stackedColumnChart = require('./mockedData/stacked-column-chart')
var combinationChart = require('./mockedData/combination-chart')
var columnChart = require('./mockedData/column-chart')
var actionList = require('./mockedData/action-list')
var actionGrid = require('./mockedData/action-grid')
var dashboardContent = require('./mockedData/dashboard-content')


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

app.get('/doughNutChart/:type', function (req, res) {
    res.send(doughnut[camelize(req.params.type)]())
})

app.get('/heatmap/:type', function (req, res) {
    res.send(heatmap[camelize(req.params.type)]())
})

app.get('/dataTable/:type', function (req, res) {
    res.send(dataTable[camelize(req.params.type)]())
})

app.get('/simpleLineChart/:type', function (req, res) {
    res.send(simpleLineChart[camelize(req.params.type)]())
})
  
app.get('/simplelist/:type', function (req, res) {
    res.send(simpleList[camelize(req.params.type)]())
})

app.get('/stackedColumnChart/:type', function (req, res) {
    res.send(stackedColumnChart[camelize(req.params.type)]())
})

app.get('/combinationChart/:type', function (req, res) {
    res.send(combinationChart[camelize(req.params.type)]())
})

app.get('/columnChart/:type', function (req, res) {
    res.send(columnChart[camelize(req.params.type)]())
})

app.get('/actionList/:type', function (req, res) {
    res.send(actionList[camelize(req.params.type)]())
})

app.get('/actionGrid/:type', function (req, res) {
    res.send(actionGrid[camelize(req.params.type)]())
})

app.get('/dashboardContent/:type', function (req, res) {
    res.send(dashboardContent.tabbed())
})
  

  

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});