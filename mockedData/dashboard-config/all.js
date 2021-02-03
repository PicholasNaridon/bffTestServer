const { TEXT } = require('../helper/constants');

module.exports = () => {
	return {
		responsibilities: ['manageUserCreatedPlans'],
		hasAttentionRequired: false,
		tabs: [
			{
				associatedPersona: 'action-grid',
				tabLabel: 'Action Grid',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Action Grid',
						widgetConfigUrl: '/ActionGrid/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action Grid With One Tab',
						widgetConfigUrl: '/ActionGrid/OneTabs',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action Grid',
						widgetConfigUrl: '/ActionGrid/MiscToggles',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action Grid',
						widgetConfigUrl: '/ActionGrid/MiscToggles2',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Width Action Grid',
						widgetConfigUrl: '/ActionGrid/MiscToggles3',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Tabbed Action Grid',
						widgetConfigUrl: '/ActionGrid/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Dropdown Action Grid',
						widgetConfigUrl: '/ActionGrid/Dropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Single Dropdown Action Grid',
						widgetConfigUrl: '/ActionGrid/SingleDropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Empty Action Grid',
						widgetConfigUrl: '/ActionGrid/NoContent',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action Grid No List Items',
						widgetConfigUrl: '/ActionGrid/NoListItems',
						widthPreference: 'halfWidth',
					},
				]
			},
			{
				associatedPersona: 'action-list',
				tabLabel: 'Action List',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Action List',
						widgetConfigUrl: '/ActionList/Full',
						widthPreference: 'halfWidth',
						masterButtonConfig: {
							dropdownLabel: 'Tile Config Button',
							dropdownItems: [
								{ url: 'http://www.frontlineed.com', text: 'Frontline' },
								{ url: 'http://www.google.com', text: 'Google' },
							]
						}
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (master button override)',
						widgetConfigUrl: '/ActionList/MasterButton',
						widthPreference: 'halfWidth',
						masterButtonConfig: {
							dropdownLabel: 'You Should Not See This!!!',
							dropdownItems: [
								{ url: 'http://www.frontlineed.com', text: 'Frontline' },
								{ url: 'http://www.google.com', text: 'Google' },
							]
						}
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (one tab)',
						widgetConfigUrl: '/ActionList/OneTab',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (colored status, action dropdown)',
						widgetConfigUrl: '/ActionList/StatusColor',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (full-width)',
						widgetConfigUrl: '/ActionList/Full',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (empty tabs[])',
						widgetConfigUrl: '/ActionList/EmptyTabs',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Action List (2nd tab no listItems)',
						widgetConfigUrl: '/ActionList/EmptyListItems',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'column-chart',
				tabLabel: 'Column Chart',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Column Chart',
						widgetConfigUrl: '/columnchart/full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Column Chart',
						widgetConfigUrl: '/ColumnChart/TiltedLabels',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Column Chart',
						widgetConfigUrl: '/ColumnChart/MultiSeries',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Column Chart',
						widgetConfigUrl: '/ColumnChart/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Column Chart',
						widgetConfigUrl: '/ColumnChart/EmptySeries',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'combination-chart',
				tabLabel: 'Combination Chart',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Combination Chart',
						widgetConfigUrl: '/CombinationChart/Full',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Combination Chart',
						widgetConfigUrl: '/CombinationChart/EmptySeries',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Combination Chart',
						widgetConfigUrl: '/CombinationChart/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Combination Chart',
						widgetConfigUrl: '/CombinationChart/EmptyYAxis',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Combination Chart',
						widgetConfigUrl: '/CombinationChart/NoYAxis',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'data-table',
				tabLabel: 'Data Table',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Data Table',
						widgetConfigUrl: '/DataTable/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Data Table',
						widgetConfigUrl: '/DataTable/OneTabs',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple Data Table',
						widgetConfigUrl: '/DataTable/MiscToggles',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Data Table',
						widgetConfigUrl: '/DataTable/MiscToggles2',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Width Data Table',
						widgetConfigUrl: '/DataTable/MiscToggles3',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Tabbed Data Table',
						widgetConfigUrl: '/DataTable/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Dropdown Data Table',
						widgetConfigUrl: '/DataTable/Dropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Single Dropdown Data Table',
						widgetConfigUrl: '/DataTable/SingleDropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Empty Data Table',
						widgetConfigUrl: '/DataTable/NoContent',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Data Table No List Items',
						widgetConfigUrl: '/DataTable/NoListItems',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'donut-chart',
				tabLabel: 'Donut Chart',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Donut Chart',
						widgetConfigUrl: '/DonutChart/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Donut Chart',
						widgetConfigUrl: '/DonutChart/ZeroTotal',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Donut Chart',
						widgetConfigUrl: '/DonutChart/DoubleDonut',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Donut Chart',
						widgetConfigUrl: '/DonutChart/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Donut Chart',
						widgetConfigUrl: '/DonutChart/EmptyDonuts',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'heat-map',
				tabLabel: 'Heat Map',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Heat Map',
						widgetConfigUrl: '/HeatMap/Full',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Heat Map',
						widgetConfigUrl: '/HeatMap/Tabbed',
						widthPreference: 'fullWidthOnly',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Heat Map',
						widgetConfigUrl: '/HeatMap/EmptyData',
						widthPreference: 'fullWidthOnly',
					},
				],
			},
			{
				associatedPersona: 'simple-line-chart',
				tabLabel: 'Simple Line Chart',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple Line Chart',
						widgetConfigUrl: '/SimpleLineChart/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple Line Chart',
						widgetConfigUrl: '/SimpleLineChart/WithSomeNullData',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple Line Chart',
						widgetConfigUrl: '/SimpleLineChart/EmptySeries',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple Line Chart',
						widgetConfigUrl: '/SimpleLineChart/Tabbed',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'simple-list',
				tabLabel: 'Simple List',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Simple List',
						widgetConfigUrl: '/SimpleList/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Simple List With No Scroll',
						widgetConfigUrl: '/SimpleList/NoScroll',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Tabbed Simple List',
						widgetConfigUrl: '/SimpleList/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Empty Simple List',
						widgetConfigUrl: '/SimpleList/EmptyRows',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Width Simple List with Tabs',
						widgetConfigUrl: '/SimpleList/Tabbed',
						widthPreference: 'fullWidthOnly',
					},
				],
			},
			{
				associatedPersona: 'stacked-column-chart',
				tabLabel: 'Stacked Column Chart',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Stacked Column Chart',
						widgetConfigUrl: '/StackedColumnChart/Full',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Stacked Column Chart',
						widgetConfigUrl: '/StackedColumnChart/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Stacked Column Chart',
						widgetConfigUrl: '/StackedColumnChart/EmptySeries',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'count-list',
				tabLabel: 'Count List',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Full Count List',
						widgetConfigUrl: '/CountList/FullList',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Mixed Count List',
						widgetConfigUrl: '/CountList/MixedList',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Minimal Count List',
						widgetConfigUrl: '/CountList/MinimalListWithoutTabs',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Invalid Link Count List',
						widgetConfigUrl: '/CountList/InvalidList',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Tabbed Count List',
						widgetConfigUrl: '/CountList/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Dropdown Count List',
						widgetConfigUrl: '/CountList/Dropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Single Dropdown Count List',
						widgetConfigUrl: '/CountList/SingleDropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Empty Count List',
						widgetConfigUrl: '/CountList/EmptyList',
						widthPreference: 'halfWidth',
					},
				],
			},
			{
				associatedPersona: 'dashboard-content',
				tabLabel: 'Dashboard Content',
				tiles: [
					{
						noContentText: TEXT.noContentMessage,
						title: 'Tabbed Content',
						widgetConfigUrl: '/DashboardContent/Tabbed',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Dropdown Content',
						widgetConfigUrl: '/DashboardContent/Dropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'Single Dropdown Content',
						widgetConfigUrl: '/DashboardContent/SingleDropdown',
						widthPreference: 'halfWidth',
					},
					{
						noContentText: TEXT.noContentMessage,
						title: 'No Content',
						widgetConfigUrl: '/DashboardContent/NoContent',
						widthPreference: 'halfWidth',
					},
				],
			},
		],
	};
};
