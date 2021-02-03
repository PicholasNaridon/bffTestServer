module.exports = {
	full,
	withSomeNullData,
	emptySeries,
	tabbed,
};

function full() {
	return {
		subtitle: 'Fully populated with legend',
		content: {
			diveLink: { url: 'https://google.com', text: 'View Report' },
			series: [
				{ name: 'Last Year', data: [5132, 4984, 4959, 4938] },
				{ name: 'This Year', data: [4728, 4670, 4620, 3165] },
			],
			xAxis: {
				categories: [
					'2017-06-01T00:00:00.000Z',
					'2017-07-01T00:00:00.000Z',
					'2017-08-01T00:00:00.000Z',
					'2017-09-01T00:00:00.000Z',
				],
			},
			yTitle: '# Incomplete Forms',
			options: {
				isPercentages: false,
				noDecimalsOnYAxis: true,
			}
		},
		tagName: 'cmp-simple-line-chart',
	};
}

function withSomeNullData() {
	return {
		subtitle: 'Contains some points of null data',
		content: {
			diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
			series: [
				{
					name: 'Plans',
					data: [
						0.37174721189591076,
						1.486988847583643,
						2.2304832713754648,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
						null,
					],
				},
			],
			xAxis: {
				categories: [
					'2017-07',
					'2017-08',
					'2017-09',
					'2017-10-01T00:00:00.000Z',
					'2017-11-01T00:00:00.000Z',
					'2017-12-01T00:00:00.000Z',
					'2018-01-01T00:00:00.000Z',
					'2018-02-01T00:00:00.000Z',
					'2018-03-01T00:00:00.000Z',
					'2018-04-01T00:00:00.000Z',
					'2018-05-01T00:00:00.000Z',
					'2018-06-01T00:00:00.000Z',
					'2018-07-01T00:00:00.000Z',
				],
			},
			yTitle: '% Completed',
			options: {
				isPercentages: true,
			}
		},
		tagName: 'cmp-simple-line-chart',
	};
}

function emptySeries() {
	return {
		subtitle: 'series[] is empty',
		content: {
			diveLink: { url: 'https://google.com', text: 'View Report' },
			series: [],
			xAxis: {
				categories: [
					'2017-06-01T00:00:00.000Z',
					'2017-07-01T00:00:00.000Z',
					'2017-08-01T00:00:00.000Z',
					'2017-09-01T00:00:00.000Z',
				],
			},
			yTitle: '# Incomplete Forms',
			options: {
				isPercentages: false,
				noDecimalsOnYAxis: true,
			}
		},
		tagName: 'cmp-simple-line-chart',
	};
}

function tabbed() {
	return {
		subtitle: 'Fully populated with legend',
		content: [
			{
				title: 'Has Legend',
				diveLink: { url: 'https://google.com', text: 'View Report' },
				series: [
					{ name: 'Last Year', data: [5132, 4984, 4959, 4938] },
					{ name: 'This Year', data: [4728, 4670, 4620, 3165] },
				],
				xAxis: {
					categories: [
						'2017-06-01T00:00:00.000Z',
						'2017-07-01T00:00:00.000Z',
						'2017-08-01T00:00:00.000Z',
						'2017-09-01T00:00:00.000Z',
					],
				},
				yTitle: '# Incomplete Forms',
				options: {
					isPercentages: false,
					noDecimalsOnYAxis: true,
				}
			},
			{
				title: 'Some Nulls',
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				series: [
					{
						name: 'Plans',
						data: [
							0.37174721189591076,
							1.486988847583643,
							2.2304832713754648,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
							null,
						],
					},
				],
				xAxis: {
					categories: [
						'2017-07',
						'2017-08',
						'2017-09',
						'2017-10-01T00:00:00.000Z',
						'2017-11-01T00:00:00.000Z',
						'2017-12-01T00:00:00.000Z',
						'2018-01-01T00:00:00.000Z',
						'2018-02-01T00:00:00.000Z',
						'2018-03-01T00:00:00.000Z',
						'2018-04-01T00:00:00.000Z',
						'2018-05-01T00:00:00.000Z',
						'2018-06-01T00:00:00.000Z',
						'2018-07-01T00:00:00.000Z',
					],
				},
				yTitle: '% Completed',
				options: {
					isPercentages: true,
				}
			},
			{
				title: 'No Content',
				diveLink: { url: 'https://google.com', text: 'View Report' },
				series: [],
				xAxis: {
					categories: [
						'2017-06-01T00:00:00.000Z',
						'2017-07-01T00:00:00.000Z',
						'2017-08-01T00:00:00.000Z',
						'2017-09-01T00:00:00.000Z',
					],
				},
				yTitle: '# Incomplete Forms',
				options: {
					isPercentages: false,
					noDecimalsOnYAxis: true,
				}
			}
		],
		tagName: 'cmp-simple-line-chart',
	};
}
