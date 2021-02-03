module.exports = {
	full,
	multiSeries,
	tiltedLabels,
	emptySeries,
	tabbed,
};

function full() {
	return {
		subtitle: 'Basic column chart',
		content: {
			diveLink: { url: 'https://elevate.flqa.net/reports/participant-status-by-plan', text: 'View Report' },
			series: [{ name: 'Plans', data: [5, 30, 17, 53] }],
			xAxis: { categories: ['Started', 'Certified', 'Submitted', 'Not Yet Started', 'extra'] },
			yTitle: 'Number of Plans',
			options: {
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-column-chart',
	};
}

function multiSeries() {
	return {
		subtitle: 'Multiple series with legend',
		content: {
			diveLink: { url: 'undefined/reports/participant-status-by-plan', text: 'Composite Score Explorer' },
			series: [{ name: '2016', data: [5, 2, 3, 4, 3] }, { name: '2017', data: [3, 4, 3, 3, 2] }],
			xAxis: { categories: ['Incomplete', 'Ineffective', 'Developing', 'Effective', 'Highly Effective'] },
			yTitle: '# of Scores',
			options: {
				showLegend: true,
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-column-chart',
	};
}

function tiltedLabels() {
	return {
		subtitle: 'Tilted x-axis labels',
		content: {
			diveLink: { url: 'undefined/reports/participant-status-by-plan', text: 'Composite Score Explorer' },
			series: [{ name: 'Amount', data: [6, 8, 4, 5, 2], animationLimit: 250 }],
			xAxis: { categories: ['Incomplete', 'Effective', 'Ineffective', 'Highly Effective', 'Developing'] },
			yTitle: 'Number of Ratings',
			options: {
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-column-chart',
	};
}

function emptySeries() {
	return {
		subtitle: 'series[] is empty',
		content: {
			diveLink: { url: 'undefined/reports/participant-status-by-plan', text: 'Composite Score Explorer' },
			series: [],
			xAxis: { categories: ['Incomplete', 'Effective', 'Ineffective', 'Highly Effective', 'Developing'] },
			yTitle: 'Number of Ratings',
			options: {
				noDecimalsOnYAxis: true,
			},
		},
		tagName: 'cmp-column-chart',
	};
}

function tabbed() {
	return {
		subtitle: 'tabbed column chart',
		content: [
			{
				title: 'Has Legend',
				diveLink: { url: 'undefined/reports/participant-status-by-plan', text: 'Composite Score Explorer' },
				series: [{ name: '2016', data: [5, 2, 3, 4, 3] }, { name: '2017', data: [3, 4, 3, 3, 2] }],
				xAxis: { categories: ['Incomplete', 'Ineffective', 'Developing', 'Effective', 'Highly Effective'] },
				yTitle: '# of Scores',
				options: {
					showLegend: true,
					noDecimalsOnYAxis: true,
				},
			},
			{
				title: 'Basic Chart',
				diveLink: { url: 'https://elevate.flqa.net/reports/participant-status-by-plan', text: 'View Report' },
				series: [{ name: 'Plans', data: [5, 30, 17, 53] }],
				xAxis: { categories: ['Started', 'Certified', 'Submitted', 'Not Yet Started', 'extra'] },
				yTitle: 'Number of Plans',
				options: {
					noDecimalsOnYAxis: true,
				},
			},
			{
				title: 'No Content',
				diveLink: { url: 'undefined/reports/participant-status-by-plan', text: 'Composite Score Explorer' },
				series: [],
				xAxis: { categories: ['Incomplete', 'Effective', 'Ineffective', 'Highly Effective', 'Developing'] },
				yTitle: 'Number of Ratings',
			},
		],
		tagName: 'cmp-column-chart',
	};
}
