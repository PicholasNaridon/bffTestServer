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


app.get('/dashboardConfig', function (req, res) {
  res.send(config())
})

app.get('/doughNutChart/:type', function (req, res) {
    console.log(req.params.type)
    res.send(doughnut[req.params.type]())
})

app.get('/heatmap/:type', function (req, res) {
    res.send(heatmap.full())
})

app.get('/dataTable/:type', function (req, res) {
    res.send(dataTable.full())
})

app.get('/simpleLineChart/:type', function (req, res) {
    res.send(simpleLineChart.full())
})
  
app.get('/simplelist/:type', function (req, res) {
    res.send(simpleList.full())
})

app.get('/stackedColumnChart/:type', function (req, res) {
    res.send(stackedColumnChart.full())
})

app.get('/combinationChart/:type', function (req, res) {
    res.send(combinationChart.full())
})

app.get('/columnChart/:type', function (req, res) {
    res.send(columnChart.full())
})

app.get('/actionList/:type', function (req, res) {
    res.send(actionList.full())
})

app.get('/actionGrid/:type', function (req, res) {
    res.send(actionGrid.full())
})

app.get('/dashboardContent/:type', function (req, res) {
    res.send(dashboardContent.tabbed())
})
  

  

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});