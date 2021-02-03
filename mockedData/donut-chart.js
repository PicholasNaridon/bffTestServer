module.exports = {
	full,
	emptyDonuts,
	zeroTotal,
	doubleDonut,
	tabbed,
};

function full() {
	return {
		subtitle: 'Fully populated',
		content: {
			diveLink: {
				url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
				text: 'View Calibration Plans Report',
			},
			donuts: [
				{
					slices: [
						{ key: 'Scored', value: 3 },
						{ key: 'Auto-Pending', value: 1 },
						{ key: 'Submitted', value: 1 },
						{ key: 'Under Review', value: 1 },
						{ key: 'Certified', value: 3 },
					{ key: 'Started', value: 2 },
					],
				},
			],
			options: {
				numberLegendItems: true,
			},
		},
		tagName: 'cmp-donut-chart',
	};
}

function emptyDonuts() {
	return {
		subtitle: 'donuts[] is empty',
		content: {
			diveLink: {
				url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
				text: 'View Calibration Plans Report',
			},
			donuts: [],
			options: {
				numberLegendItems: true,
			},
		},
		tagName: 'cmp-donut-chart',
	};
}

function zeroTotal() {
	return {
		subtitle: 'All donut chart values equal 0',
		content: {
			diveLink: {
				url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
				text: 'View Calibration Plans Report',
			},
			donuts: [
				{
					slices: [{ key: 'Scored', value: 0 }, { key: 'Auto-Pending', value: 0 }, { key: 'Submitted', value: 0 }],
				},
			],
			options: {
				numberLegendItems: true,
			},
		},
		tagName: 'cmp-donut-chart',
	};
}

function doubleDonut() {
	return {
		subtitle: 'Double donut chart with labels',
		tagName: 'cmp-donut-chart',
		content: {
			diveLink: { url: 'https://pdmsawsstage.mylearningplan.com/temporary', text: 'Destination TBD' },
			donuts: [
				{
					slices: [{ key: 'Completed', value: 11 }, { key: 'In Progress', value: 0 }, { key: 'Denied', value: 33 }],
					label: 'This Year',
				},
				{
					slices: [{ key: 'Completed', value: 20 }, { key: 'In Progress', value: 9 }, { key: 'Denied', value: 25 }],
					label: 'Last Year',
				},
			],
			options: {
				isLegendOnBottom: true,
			},
		},
	};
}

function tabbed() {
	return {
		subtitle: 'Double donut chart with labels',
		tagName: 'cmp-donut-chart',
		content: [
			{
				title: 'Single',
				diveLink: {
					url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
					text: 'View Calibration Plans Report',
				},
				donuts: [
					{
						slices: [
							{ key: 'Scored', value: 3 },
							{ key: 'Auto-Pending', value: 1 },
							{ key: 'Submitted', value: 1 },
							{ key: 'Under Review', value: 1 },
							{ key: 'Certified', value: 3 },
							{ key: 'Started', value: 2 },
						],
					},
				],
				options: {
					numberLegendItems: true,
				},
			},
			{
				title: 'Double',
				diveLink: { url: 'https://pdmsawsstage.mylearningplan.com/temporary', text: 'Destination TBD' },
				donuts: [
					{
						slices: [{ key: 'Completed', value: 11 }, { key: 'In Progress', value: 0 }, { key: 'Denied', value: 33 }],
						label: 'This Year',
					},
					{
						slices: [{ key: 'Completed', value: 20 }, { key: 'In Progress', value: 9 }, { key: 'Denied', value: 25 }],
						label: 'Last Year',
					},
				],
				options: {
					isLegendOnBottom: true,
				},
			},
			{
				title: 'No Content',
				diveLink: {
					url: 'https://elevate.flqa.net/reports/participant-status-by-plan',
					text: 'View Calibration Plans Report',
				},
				donuts: [],
				options: {
					numberLegendItems: true,
				},
			}
		],
	};
}
