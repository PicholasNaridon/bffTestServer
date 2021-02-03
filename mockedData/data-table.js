module.exports = {
	full,
	oneTab,
	miscToggles,
	miscToggles2,
	miscToggles3,
	noListItems,
	noContent,
	tabbed,
	dropdown,
	singleDropdown,
};

function full() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Fully populated, no scrolling for 2nd tab, column totals',
		content: [
			{
				listItems: [
					{
						employeeName: { title: 'Brad Benninger' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alissa Hartenbaum' },
						'Not Started': { title: 2 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'ramya oldemailmuthukrishnan' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alex Algarme' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
					{
						employeeName: { title: 'PlatformTester123 Tester123' },
						'Not Started': { title: 9 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
				],
				title: 'Training Plans',
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					calculateColumnTotals: true,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
			{
				listItems: [
					{
						employeeName: { title: 'Brad Benninger' },
						'Not Started': { title: 4 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alissa Hartenbaum' },
						'Not Started': { title: 6 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
					{
						employeeName: { title: 'Tim Shortt' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
				],
				title: 'Calibration Plans',
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
		],
	};
}

function oneTab() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Only one tab available, no top border',
		content: {
			listItems: [
				{
					employeeName: { title: 'Brad Benninger' },
					'Not Started': { title: 3 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'Alissa Hartenbaum' },
					'Not Started': { title: 2 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'ramya oldemailmuthukrishnan' },
					'Not Started': { title: 1 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'Alex Algarme' },
					'Not Started': { title: 3 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'Fredy Whatley' },
					'Not Started': { title: 1 },
					'In Progress': { title: 1 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'IDM62 IDM62' },
					'Not Started': { title: 1 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
				{
					employeeName: { title: 'Ramya Muthukrishnan' },
					'Not Started': { title: 4 },
					'In Progress': { title: 1 },
					Completed: { title: 1 },
				},
				{
					employeeName: { title: 'PlatformTester123 Tester123' },
					'Not Started': { title: 9 },
					'In Progress': { title: 0 },
					Completed: { title: 0 },
				},
			],
			columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
			diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
			options: {
				hideFirstColumnTitle: true,
				showBands: true,
				topBorder: false,
				columnTitleColorClass: 'none',
				darkStatColumnTitles: false,
				boldStatColumns: false,
			},
		},
	};
}

function miscToggles() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Hidden row bands, no top border, bold stats column',
		content: {
			columnTitles: ['BUILDING', '% COMPLETED'],
			listItems: [
				{ BUILDING: { title: 'No building assigned' }, '% COMPLETED': { title: '0%' } },
				{ BUILDING: { title: 'building1' }, '% COMPLETED': { title: '0%' } },
				{ BUILDING: { title: 'DO' }, '% COMPLETED': { title: '4%' } },
				{ BUILDING: { title: 'Teachscape' }, '% COMPLETED': { title: '12%' } },
			],
			diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
			options: {
				hideFirstColumnTitle: false,
				hideAllColumnTitles: false,
				showBands: false,
				topBorder: false,
				columnTitleColorClass: 'none',
				darkStatColumnTitles: true,
				boldStatColumns: true,
			},
		},
	};
}

function miscToggles2() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Visible row bands, Has top border, bold stats column',
		content: {
			columnTitles: ['EMPLOYEE', 'ACTIVITIES', 'HRS/CREDITS'],
			listItems: [
				{ EMPLOYEE: { title: 'Greg Robinson' }, ACTIVITIES: { title: 2 }, 'HRS/CREDITS': { title: 27 } },
				{ EMPLOYEE: { title: 'Georgia Robin' }, ACTIVITIES: { title: 6 }, 'HRS/CREDITS': { title: 23 } },
			],
			diveLink: { url: 'https://pdmsawsstage.mylearningplan.com/summative-report', text: 'View District Admin' },
			options: {
				hideFirstColumnTitle: false,
				hideAllColumnTitles: false,
				showBands: true,
				topBorder: true,
				darkStatColumnTitles: true,
				boldStatColumns: true,
				columnTitleColorClass: 'none',
			},
		},
	};
}

function miscToggles3() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Uses "positive" color class',
		content: {
			columnTitles: ['OVERALL', '67% Complete'],
			listItems: [
				{ OVERALL: { title: 'Kourtney Abbruzzese' }, '67% Complete': { title: '1 of 3 (33%)' } },
				{ OVERALL: { title: 'Alicia Abdul' }, '67% Complete': { title: '2 of 2 (100%)' } },
				{ OVERALL: { title: 'Dawn Marie Abrams' }, '67% Complete': { title: '1 of 3 (33%)' } },
				{ OVERALL: { title: 'Aimee Ackley' }, '67% Complete': { title: '1 of 4 (25%)' } },
				{ OVERALL: { title: 'Caroline Adam' }, '67% Complete': { title: '3 of 3 (100%)' } },
				{ OVERALL: { title: 'Chrislene Adams' }, '67% Complete': { title: '3 of 3 (100%)' } },
				{ OVERALL: { title: 'Stefanie Adler' }, '67% Complete': { title: '3 of 3 (100%)' } },
				{ OVERALL: { title: 'Francesca Aiello' }, '67% Complete': { title: '2 of 3 (66%)' } },
			],
			diveLink: { url: 'undefined/reports/summative-report', text: 'Evaluation Admin View' },
			options: {
				hideFirstColumnTitle: false,
				hideAllColumnTitles: false,
				showBands: true,
				topBorder: true,
				darkStatColumnTitles: true,
				boldStatColumns: true,
				columnTitleColorClass: 'positive',
			},
		},
	};
}

function noContent() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'content[] is empty',
		content: [],
	};
}

function noListItems() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'has content[] and columnTitles[] but listItems[] is empty',
		content: {
			columnTitles: ['Column 1', 'Column 2', 'Column 3'],
			diveLink: { url: 'https://test.mylearningplan.com/test', text: 'View Report' },
			listItems: [],
			options: {
				hideFirstColumnTitle: false,
				hideAllColumnTitles: false,
				showBands: true,
				topBorder: true,
			},
		},
	};
}

function tabbed() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Tabbed content items',
		content: [
			{
				title: 'With Scroll',
				listItems: [
					{
						employeeName: { title: 'Brad Benninger' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alissa Hartenbaum' },
						'Not Started': { title: 2 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'ramya oldemailmuthukrishnan' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alex Algarme' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
				],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
			{
				title: 'No Scroll',
				listItems: [
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
				],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
			{
				title: 'No Content',
				listItems: [],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
		],
	};
}

function dropdown() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Multiple dropdown items',
		contentArrayOptions: {
			toggleType: 'dropdown',
			contentDropdownLabel: 'Select',
		},
		content: [
			{
				title: 'With Scroll',
				listItems: [
					{
						employeeName: { title: 'Brad Benninger' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alissa Hartenbaum' },
						'Not Started': { title: 2 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'ramya oldemailmuthukrishnan' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alex Algarme' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
				],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
			{
				title: 'No Scroll',
				listItems: [
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
				],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
			{
				title: 'No Content',
				listItems: [],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
		],
	};
}

function singleDropdown() {
	return {
		tagName: 'cmp-data-table',
		subtitle: 'Multiple dropdown items',
		contentArrayOptions: {
			toggleType: 'dropdown',
			contentDropdownLabel: 'Select',
		},
		content: [
			{
				title: 'Single Dropdown',
				listItems: [
					{
						employeeName: { title: 'Brad Benninger' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alissa Hartenbaum' },
						'Not Started': { title: 2 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'ramya oldemailmuthukrishnan' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Alex Algarme' },
						'Not Started': { title: 3 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Fredy Whatley' },
						'Not Started': { title: 1 },
						'In Progress': { title: 1 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'IDM62 IDM62' },
						'Not Started': { title: 1 },
						'In Progress': { title: 0 },
						Completed: { title: 0 },
					},
					{
						employeeName: { title: 'Ramya Muthukrishnan' },
						'Not Started': { title: 4 },
						'In Progress': { title: 1 },
						Completed: { title: 1 },
					},
				],
				columnTitles: ['employeeName', 'Not Started', 'In Progress', 'Completed'],
				diveLink: { url: 'https://elevate.flqa.net/reports/summative-report', text: 'View Report' },
				options: {
					hideFirstColumnTitle: true,
					showBands: true,
					topBorder: false,
					columnTitleColorClass: 'none',
					darkStatColumnTitles: false,
					boldStatColumns: false,
				},
			},
		],
	};
}
