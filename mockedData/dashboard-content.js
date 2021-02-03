module.exports = {
	tabbed, // content separated with tabs
	dropdown, // content separated with filter dropdown
	singleDropdown, // single filter dropdown
	noContent, // empty content array
};

// NOTE: cmp-count-list is being used in these fixtures however any component can be used
// since this is testing the dashboard-content directive that wraps all components.

function tabbed() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'Tabbed with multiple content items',
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
						url: 'http://www.google.com',
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
		subtitle: 'Filter dropdown with multiple content items',
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
		subtitle: 'Filter dropdown with single content item',
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

function noContent() {
	return {
		tagName: 'cmp-count-list',
		subtitle: 'content[] is empty',
		content: [],
	};
}
