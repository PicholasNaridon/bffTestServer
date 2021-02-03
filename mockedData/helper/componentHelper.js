const dashboardContent = require('../fixtures/dashboard-content');
const actionGrid = require('../fixtures/action-grid');
const actionList = require('../fixtures/action-list');
const donutChart = require('../fixtures/donut-chart');
const dataTable = require('../fixtures/data-table');
const columnChart = require('../fixtures/column-chart');
const combinationChart = require('../fixtures/combination-chart');
const heatMap = require('../fixtures/heat-map');
const simpleLineChart = require('../fixtures/simple-line-chart');
const simpleList = require('../fixtures/simple-list');
const stackedColumnChart = require('../fixtures/stacked-column-chart');
const countList = require('../fixtures/count-list');

const fixtures = {
	dashboardContent: [
		{ url: 'DashboardContentTabbed', response: dashboardContent.tabbed() },
		{ url: 'DashboardContentDropdown', response: dashboardContent.dropdown() },
		{ url: 'DashboardContentSingleDropdown', response: dashboardContent.singleDropdown() },
		{ url: 'DashboardContentNoContent', response: dashboardContent.noContent() },
	],
	actionGrid: [
		{ url: 'ActionGridFull', response: actionGrid[req.params.type]() },
		{ url: 'ActionGridOneTabs', response: actionGrid.oneTab() },
		{ url: 'ActionGridMiscToggles', response: actionGrid.miscToggles() },
		{ url: 'ActionGridMiscToggles2', response: actionGrid.miscToggles2() },
		{ url: 'ActionGridMiscToggles3', response: actionGrid.miscToggles3() },
		{ url: 'ActionGridNoContent', response: actionGrid.noContent() },
		{ url: 'ActionGridNoListItems', response: actionGrid.noListItems() },
		{ url: 'ActionGridTabbed', response: actionGrid.tabbed() },
		{ url: 'ActionGridDropdown', response: actionGrid.dropdown() },
		{ url: 'ActionGridSingleDropdown', response: actionGrid.singleDropdown() },
	],
	actionList: [
		{ url: 'ActionListFull', response: actionList[req.params.type]() },
		{ url: 'ActionListMasterButton', response: actionList.masterButton() },
		{ url: 'ActionListOneTab', response: actionList.oneTab() },
		{ url: 'ActionListStatusColor', response: actionList.statusColor() },
		{ url: 'ActionListEmptyTabs', response: actionList.emptyTabs() },
		{ url: 'ActionListEmptyListItems', response: actionList.emptyListItems() },
	],
	donutChart: [
		{ url: 'DonutChartFull', response: donutChart[req.params.type]() },
		{ url: 'DonutChartZeroTotal', response: donutChart.zeroTotal() },
		{ url: 'DonutChartEmptyDonuts', response: donutChart.emptyDonuts() },
		{ url: 'DonutChartDoubleDonut', response: donutChart.doubleDonut() },
		{ url: 'DonutChartTabbed', response: donutChart.tabbed() },
	],
	columnChart: [
		{ url: 'ColumnChartFull', response: columnChart[req.params.type]() },
		{ url: 'ColumnChartMultiSeries', response: columnChart.multiSeries() },
		{ url: 'ColumnChartTiltedLabels', response: columnChart.tiltedLabels() },
		{ url: 'ColumnChartEmptySeries', response: columnChart.emptySeries() },
		{ url: 'ColumnChartTabbed', response: columnChart.tabbed() },
	],
	combinationChart: [
		{ url: 'CombinationChartFull', response: combinationChart[req.params.type]() },
		{ url: 'CombinationChartEmptySeries', response: combinationChart.emptySeries() },
		{ url: 'CombinationChartEmptyYAxis', response: combinationChart.emptyYAxis() },
		{ url: 'CombinationChartNoYAxis', response: combinationChart.noYAxis() },
		{ url: 'CombinationChartTabbed', response: combinationChart.tabbed() },
	],
	dataTable: [
		{ url: 'DataTableFull', response: dataTable[req.params.type]() },
		{ url: 'DataTableOneTabs', response: dataTable.oneTab() },
		{ url: 'DataTableMiscToggles', response: dataTable.miscToggles() },
		{ url: 'DataTableMiscToggles2', response: dataTable.miscToggles2() },
		{ url: 'DataTableMiscToggles3', response: dataTable.miscToggles3() },
		{ url: 'DataTableNoContent', response: dataTable.noContent() },
		{ url: 'DataTableNoListItems', response: dataTable.noListItems() },
		{ url: 'DataTableTabbed', response: dataTable.tabbed() },
		{ url: 'DataTableDropdown', response: dataTable.dropdown() },
		{ url: 'DataTableSingleDropdown', response: dataTable.singleDropdown() },
	],
	heatMap: [
		{ url: 'HeatMapFull', response: heatMap[req.params.type]() },
		{ url: 'HeatMapEmptyData', response: heatMap.emptyData() },
		{ url: 'HeatMapTabbed', response: heatMap.tabbed() },
	],
	simpleLineChart: [
		{ url: 'SimpleLineChartFull', response: simpleLineChart[req.params.type]() },
		{ url: 'SimpleLineChartWithSomeNullData', response: simpleLineChart.withSomeNullData() },
		{ url: 'SimpleLineChartEmptySeries', response: simpleLineChart.emptySeries() },
		{ url: 'SimpleLineChartTabbed', response: simpleLineChart.tabbed() },
	],
	simpleList: [
		{ url: 'SimpleListFull', response: simpleList[req.params.type]() },
		{ url: 'SimpleListNoScroll', response: simpleList.noScroll() },
		{ url: 'SimpleListEmptyRows', response: simpleList.emptyRows() },
		{ url: 'SimpleListTabbed', response: simpleList.tabbed() },
	],
	stackedColumnChart: [
		{ url: 'StackedColumnChartFull', response: stackedColumnChart[req.params.type]() },
		{ url: 'StackedColumnChartEmptySeries', response: stackedColumnChart.emptySeries() },
		{ url: 'StackedColumnChartTabbed', response: stackedColumnChart.tabbed() },
	],
	countList: [
		{ url: 'CountListMixedList', response: countList.mixedList() },
		{ url: 'CountListFullList', response: countList.fullList() },
		{ url: 'CountListMinimalListWithoutTabs', response: countList.minimalListWithoutTabs() },
		{ url: 'CountListInvalidList', response: countList.invalidUrls() },
		{ url: 'CountListEmptyList', response: countList.emptyList() },
		{ url: 'CountListTabbed', response: countList.tabbed() },
		{ url: 'CountListDropdown', response: countList.dropdown() },
		{ url: 'CountListSingleDropdown', response: countList.singleDropdown() },
	],
};

module.exports = fixtures;
