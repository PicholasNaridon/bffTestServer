module.exports = {
	full,
	emptySeries,
	emptyYAxis,
	noYAxis,
	tabbed,
};

function full() {
	return {
		tagName: 'cmp-combination-chart',
		subtitle: 'Fully loaded',
		content: {
			diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
			showLegend: true,
			series: [
				{ name: 'Activities Completed', type: 'column', data: [18, 28, 10, 8] },
				{ name: 'Hrs/Credits', type: 'line', yAxis: 1, data: [0, 70, 25, 25] },
				{ name: 'Employees', type: 'line', dashStyle: 'ShortDash', yAxis: 2, data: [17, 47, 63, 27] },
			],
			xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
			yAxis: [
				{ title: { text: 'Activities Completed' } },
				{ gridLineWidth: 0, title: { text: 'Hrs/Credits' }, opposite: true },
				{ gridLineWidth: 0, title: { text: 'Employees' }, opposite: true },
			],
			options: {
				noDecimalsOnYAxis: true,
			},
		},
	};
}

function emptySeries() {
	return {
		tagName: 'cmp-combination-chart',
		subtitle: 'series[] is empty',
		content: {
			diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
			series: [],
			xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
			yAxis: [
				{ title: { text: 'Activities Completed' } },
				{ gridLineWidth: 0, title: { text: 'Hrs/Credits' }, opposite: true },
				{ gridLineWidth: 0, title: { text: 'Employees' }, opposite: true },
			],
			options: {
				noDecimalsOnYAxis: true,
				showLegend: true,
			},
		},
	};
}

function emptyYAxis() {
	return {
		tagName: 'cmp-combination-chart',
		subtitle: 'yAxis[] is empty',
		content: {
			diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
			series: [
				{ name: 'Activities Completed', type: 'column', data: [18, 28, 10, 8] },
				{ name: 'Hrs/Credits', type: 'line', yAxis: 1, data: [0, 70, 25, 25] },
				{ name: 'Employees', type: 'line', dashStyle: 'ShortDash', yAxis: 2, data: [17, 47, 63, 27] },
			],
			xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
			yAxis: [],
			options: {
				noDecimalsOnYAxis: true,
				showLegend: true,
			},
		},
	};
}

function noYAxis() {
	return {
		tagName: 'cmp-combination-chart',
		subtitle: 'No yAxis[]',
		content: {
			diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
			series: [
				{ name: 'Activities Completed', type: 'column', data: [18, 28, 10, 8] },
				{ name: 'Hrs/Credits', type: 'line', yAxis: 1, data: [0, 70, 25, 25] },
				{ name: 'Employees', type: 'line', dashStyle: 'ShortDash', yAxis: 2, data: [17, 47, 63, 27] },
			],
			xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
			options: {
				noDecimalsOnYAxis: true,
				showLegend: true,
			},
		},
	};
}

function tabbed() {
	return {
		tagName: 'cmp-combination-chart',
		subtitle: 'Fully loaded and tabbed',
		content: [
			{
				title: 'Full',
				diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
				showLegend: true,
				series: [
					{ name: 'Activities Completed', type: 'column', data: [18, 28, 10, 8] },
					{ name: 'Hrs/Credits', type: 'line', yAxis: 1, data: [0, 70, 25, 25] },
					{ name: 'Employees', type: 'line', dashStyle: 'ShortDash', yAxis: 2, data: [17, 47, 63, 27] },
				],
				xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
				yAxis: [
					{ title: { text: 'Activities Completed' } },
					{ gridLineWidth: 0, title: { text: 'Hrs/Credits' }, opposite: true },
					{ gridLineWidth: 0, title: { text: 'Employees' }, opposite: true },
				],
				options: {
					noDecimalsOnYAxis: true,
				},
			},
			{
				title: 'No Content',
				diveLink: { text: 'Goals Report', url: 'undefined/reports/participant-status-by-plan' },
				series: [],
				xAxis: { categories: ['Student Success', 'Access', 'Quality', 'Partnerships'] },
				yAxis: [
					{ title: { text: 'Activities Completed' } },
					{ gridLineWidth: 0, title: { text: 'Hrs/Credits' }, opposite: true },
					{ gridLineWidth: 0, title: { text: 'Employees' }, opposite: true },
				],
				options: {
					noDecimalsOnYAxis: true,
					showLegend: true,
				},
			},
		],
	};
}
