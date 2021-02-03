module.exports = {
	mixedList,
	fullList,
	minimalListWithoutTabs,
	invalidUrls,
	emptyList,
	tabbed,
	dropdown,
	singleDropdown,
};

function mixedList() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'Mix of possible uses',
		content: {
			listItems: [
				{
					title: 'Administative Principal',
					count: 437,
					text: 'Something important',
					url: 'http://www.google.com',
				},
				{
					title: 'IT Help Desk',
					count: 82,
					text: '+3% growth',
					isPercent: true,
					url: 'www.google.com',
				},
				{
					title: 'Gifted Teacher',
					count: 5,
					isPercent: true,
				},
				{
					title: 'Kindergarten Teacher',
					count: 1111,
					url: 'http://www.google.com',
				},
				{
					count: 7,
					title: 'Applicants',
					isPercent: false,
				},
				{
					count: 9,
					title: 'Janitorial Staff',
				},
			],
		},
	};
}

function fullList() {
	return {
		content: {
			listItems: [
				{
					title: 'Administative Principal',
					count: 437,
					text: 'Something important',
					url: 'http://www.google.com',
					isPercent: true,
				},
				{
					title: 'IT Help Desk',
					count: 82,
					text: '+3% growth',
					isPercent: true,
					url: 'http://www.google.com',
				},
				{
					title: 'Gifted Teacher',
					count: 5,
					text: '+3% growth',
					url: 'http://www.google.com',
					isPercent: true,
				},
			],
		},
		tagName: 'cmp-count-list',
		subtitle: 'Max uses in all rows',
	};
}

function minimalListWithoutTabs() {
	return {
		content: {
			listItems: [
				{
					title: 'Administative Principal',
					count: 437,
				},
				{
					title: 'IT Help Desk',
					count: 82,
				},
				{
					title: 'Gifted Teacher',
					count: 5,
				},
			],
		},
		tagName: 'cmp-count-list',
		subtitle: 'Bare minimum count list (without tabs)',
	};
}

function invalidUrls() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'Rows have invalid urls',
		content: {
			listItems: [
				{
					title: 'Administative Principal',
					count: 437,
					text: 'Something important',
					url: 'www.google.com',
				},
				{
					title: 'IT Help Desk',
					count: 82,
					text: '+3% growth',
					isPercent: true,
					url: 'www.google.com',
				},
				{
					title: 'Gifted Teacher',
					count: 1111,
					url: 'www.google.com',
				},
			],
		},
	};
}

function emptyList() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'listItems[] is empty',
		content: {
			listItems: [],
		},
	};
}

function tabbed() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'Tabbed content items',
		content: [
			{
				title: 'With Scroll',
				listItems: [
					{
						title: 'Administative Principal',
						count: 437,
						text: 'Something important',
						url: 'http://www.google.com',
					},
					{
						title: 'IT Help Desk',
						count: 82,
						text: '+3% growth',
						isPercent: true,
						url: 'www.google.com',
					},
					{
						title: 'Gifted Teacher',
						count: 5,
						isPercent: true,
					},
					{
						title: 'Kindergarten Teacher',
						count: 1111,
						url: 'http://www.google.com',
					},
					{
						count: 7,
						title: 'Applicants',
						isPercent: false,
					},
					{
						count: 9,
						title: 'Janitorial Staff',
					},
				],
			},
			{
				title: 'No Scroll',
				listItems: [
					{
						title: 'Administative Principal',
						count: 437,
					},
					{
						title: 'IT Help Desk',
						count: 82,
					},
					{
						title: 'Gifted Teacher',
						count: 5,
					},
				],
			},
			{
				title: 'No Content',
				listItems: [],
			},
		],
	};
}

function dropdown() {
	return {
		tagName: 'cmp-count-list',
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
						title: 'Administative Principal',
						count: 437,
						text: 'Something important',
						url: 'http://www.google.com',
					},
					{
						title: 'IT Help Desk',
						count: 82,
						text: '+3% growth',
						isPercent: true,
						url: 'www.google.com',
					},
					{
						title: 'Gifted Teacher',
						count: 5,
						isPercent: true,
					},
					{
						title: 'Kindergarten Teacher',
						count: 1111,
						url: 'http://www.google.com',
					},
					{
						count: 7,
						title: 'Applicants',
						isPercent: false,
					},
					{
						count: 9,
						title: 'Janitorial Staff',
					},
				],
			},
			{
				title: 'No Scroll',
				listItems: [
					{
						title: 'Administative Principal',
						count: 437,
					},
					{
						title: 'IT Help Desk',
						count: 82,
					},
					{
						title: 'Gifted Teacher',
						count: 5,
					},
				],
			},
			{
				title: 'No Content',
				listItems: [],
			},
		],
	};
}

function singleDropdown() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'Single content label instead of dropdown',
		contentArrayOptions: {
			toggleType: 'dropdown',
			contentDropdownLabel: 'Select',
		},
		content: [
			{
				title: 'Single Dropdown',
				listItems: [
					{
						title: 'Administative Principal',
						count: 437,
						text: 'Something important',
						url: 'http://www.google.com',
					},
					{
						title: 'IT Help Desk',
						count: 82,
						text: '+3% growth',
						isPercent: true,
						url: 'www.google.com',
					},
					{
						title: 'Gifted Teacher',
						count: 5,
						isPercent: true,
					},
					{
						title: 'Kindergarten Teacher',
						count: 1111,
						url: 'http://www.google.com',
					},
					{
						count: 7,
						title: 'Applicants',
						isPercent: false,
					},
					{
						count: 9,
						title: 'Janitorial Staff',
					},
				],
			},
		],
	};
}
