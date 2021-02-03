module.exports = {
	full,
	emptyData,
	tabbed,
};

function full() {
	return {
		subtitle: 'Fully populated',
		content: {
			data: [
				{
					rowTitle: 'Frontino Elementary',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 2 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '0 of 2 (0%)', value: 0 },
						{ columnHeading: 'Developing', text: '0 of 2 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '0 of 2 (0%)', value: 0 },
						{ columnHeading: 'Proficient', text: '0 of 2 (0%)', value: 0 },
						{ columnHeading: 'Highly Effective', text: '2 of 2 (100%)', value: 100 },
					],
				},
				{
					rowTitle: 'Ivan Dretzky High School',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 12 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '2 of 12 (17%)', value: 17 },
						{ columnHeading: 'Developing', text: '0 of 12 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '5 of 12 (42%)', value: 42 },
						{ columnHeading: 'Proficient', text: '1 of 12 (8%)', value: 8 },
						{ columnHeading: 'Highly Effective', text: '3 of 12 (25%)', value: 25 },
					],
				},
				{
					rowTitle: 'Training Academy',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Proficient', text: '1 of 1 (100%)', value: 100 },
						{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
					],
				},
				{
					rowTitle: 'Wilson Secondary School',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 17 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '1 of 17 (6%)', value: 6 },
						{ columnHeading: 'Developing', text: '0 of 17 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '0 of 17 (0%)', value: 0 },
						{ columnHeading: 'Proficient', text: '16 of 17 (94%)', value: 94 },
						{ columnHeading: 'Highly Effective', text: '0 of 17 (0%)', value: 0 },
					],
				},
				{
					rowTitle: 'New Jersey Academy',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
						{ columnHeading: 'Proficient', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
					],
				},
				{
					rowTitle: 'Kiwala School',
					cells: [
						{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
						{ columnHeading: 'Proficient', text: '0 of 1 (0%)', value: 0 },
						{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
					],
				},
			],
			diveLink: {
				text: 'Composite Score Explorer',
				url: 'https://pdmsawsstage.mylearningplan.com/oasys/CompositeScoreExplorer',
			},
		},
		tagName: 'cmp-heat-map',
	};
}

function emptyData() {
	return {
		subtitle: 'data[] is empty',
		content: {
			data: [],
			diveLink: {
				text: 'Composite Score Explorer',
				url: 'https://pdmsawsstage.mylearningplan.com/oasys/CompositeScoreExplorer',
			},
		},
		tagName: 'cmp-heat-map',
	};
}

function tabbed() {
	return {
		subtitle: 'tabbed heat map',
		content: [
			{
				title: 'Heatmap 1',
				data: [
					{
						rowTitle: 'Frontino Elementary',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Proficient', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Highly Effective', text: '2 of 2 (100%)', value: 100 },
						],
					},
					{
						rowTitle: 'Ivan Dretzky High School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 12 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '2 of 12 (17%)', value: 17 },
							{ columnHeading: 'Developing', text: '0 of 12 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '5 of 12 (42%)', value: 42 },
							{ columnHeading: 'Proficient', text: '1 of 12 (8%)', value: 8 },
							{ columnHeading: 'Highly Effective', text: '3 of 12 (25%)', value: 25 },
						],
					},
					{
						rowTitle: 'Training Academy',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Proficient', text: '1 of 1 (100%)', value: 100 },
							{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'Wilson Secondary School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 17 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '1 of 17 (6%)', value: 6 },
							{ columnHeading: 'Developing', text: '0 of 17 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 17 (0%)', value: 0 },
							{ columnHeading: 'Proficient', text: '16 of 17 (94%)', value: 94 },
							{ columnHeading: 'Highly Effective', text: '0 of 17 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'New Jersey Academy',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
							{ columnHeading: 'Proficient', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'Kiwala School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
							{ columnHeading: 'Proficient', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Highly Effective', text: '0 of 1 (0%)', value: 0 },
						],
					},
				],
				diveLink: {
					text: 'Composite Score Explorer',
					url: 'https://pdmsawsstage.mylearningplan.com/oasys/CompositeScoreExplorer',
				},
			},
			{
				title: 'Heatmap 2',
				data: [
					{
						rowTitle: 'Frontino Elementary',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 2 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 2 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'Ivan Dretzky High School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 12 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '2 of 12 (17%)', value: 17 },
							{ columnHeading: 'Developing', text: '0 of 12 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '5 of 12 (42%)', value: 42 },
						],
					},
					{
						rowTitle: 'Training Academy',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 1 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'Wilson Secondary School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 17 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '1 of 17 (6%)', value: 6 },
							{ columnHeading: 'Developing', text: '0 of 17 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '0 of 17 (0%)', value: 0 },
						],
					},
					{
						rowTitle: 'New Jersey Academy',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
						],
					},
					{
						rowTitle: 'Kiwala School',
						cells: [
							{ columnHeading: 'Incomplete', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Ineffective', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Developing', text: '0 of 1 (0%)', value: 0 },
							{ columnHeading: 'Effective', text: '1 of 1 (100%)', value: 100 },
						],
					},
				],
				diveLink: {
					text: 'Composite Score Explorer',
					url: 'https://pdmsawsstage.mylearningplan.com/oasys/CompositeScoreExplorer',
				},
			},
			{
				title: 'No Content',
				data: [],
				diveLink: {
					text: 'Composite Score Explorer',
					url: 'https://pdmsawsstage.mylearningplan.com/oasys/CompositeScoreExplorer',
				},
			}
		],
		tagName: 'cmp-heat-map',
	};
}
