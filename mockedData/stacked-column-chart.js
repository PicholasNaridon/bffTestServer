module.exports = {
	full,
	emptySeries,
	tabbed,
};

function full() {
	return {
		subtitle: 'Fully populated with numbers in stacks',
		content: {
			diveLink: { url: 'undefined/reports/summative-report', text: 'Evaluation Super Admin View' },
			series: [{ name: '% Complete', data: [26, 36, 36, 0] }, { name: '% Incomplete', data: [74, 64, 64, 100] }],
			xAxis: {
				categories: [
					'2017-06-01T00:00:00.000Z',
					'2017-07-01T00:00:00.000Z',
					'2017-08-01T00:00:00.000Z',
					'2017-09-01T00:00:00.000Z',
				],
			},
			yTitle: 'Number of Plans',
			options: {
				showLegend: true,
				isPercentages: true,
				numbersInStacks: true,
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-stacked-column-chart',
	};
}

function emptySeries() {
	return {
		subtitle: 'series[] is empty',
		content: {
			diveLink: { url: 'undefined/reports/summative-report', text: 'Evaluation Super Admin View' },
			series: [],
			xAxis: {
				categories: [
					'2017-06-01T00:00:00.000Z',
					'2017-07-01T00:00:00.000Z',
					'2017-08-01T00:00:00.000Z',
					'2017-09-01T00:00:00.000Z',
				],
			},
			yTitle: 'Number of Plans',
			options: {
				showLegend: true,
				isPercentages: true,
				numbersInStacks: true,
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-stacked-column-chart',
	};
}

function tabbed() {
	return {
		subtitle: 'Fully populated with numbers in stacks',
		content: [
			{
				title: 'Basic',
				diveLink: { url: 'undefined/reports/summative-report', text: 'Evaluation Super Admin View' },
				series: [{ name: '% Complete', data: [26, 36, 36, 0] }, { name: '% Incomplete', data: [74, 64, 64, 100] }],
				xAxis: {
					categories: [
						'2017-06-01T00:00:00.000Z',
						'2017-07-01T00:00:00.000Z',
						'2017-08-01T00:00:00.000Z',
						'2017-09-01T00:00:00.000Z',
					],
				},
				yTitle: 'Number of Plans',
				options: {
					showLegend: true,
					isPercentages: true,
					numbersInStacks: true,
					noDecimalsOnYAxis: true,
				},
			},
			{
				title: 'No Content',
				diveLink: { url: 'undefined/reports/summative-report', text: 'Evaluation Super Admin View' },
				series: [],
				xAxis: {
					categories: [
						'2017-06-01T00:00:00.000Z',
						'2017-07-01T00:00:00.000Z',
						'2017-08-01T00:00:00.000Z',
						'2017-09-01T00:00:00.000Z',
					],
				},
				yTitle: 'Number of Plans',
				options: {
					showLegend: true,
					isPercentages: true,
					numbersInStacks: true,
					noDecimalsOnYAxis: true,
				},
			},
		],
		tagName: 'cmp-stacked-column-chart',
	};
}
