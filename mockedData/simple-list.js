module.exports = {
	full,
	noScroll,
	emptyRows,
	tabbed,
};

function full() {
	return {
		subtitle: 'Fully populated with scrolling',
		content: {
			rows: [
				{ title: 'Samsung', text: 'this is samsung', url: 'http://www.samsung.com' },
				{ title: 'Google', text: 'also google', url: 'http://google.com' },
				{ title: 'Apple', text: 'This is the fancy Apple website', url: 'http://www.apple.com' },
				{ title: 'Frontline Education', text: 'asdfasdfasdfasdfasdfasdfasdf', url: 'http://frontlineed.com' },
				{
					title: 'Stack Overflow',
					text: 'all you need to know about software development',
					url: 'http://stackoverflow.com',
				},
			],
		},
		tagName: 'cmp-simple-list',
	};
}

function noScroll() {
	return {
		subtitle: 'Fully populated without scrolling',
		content: {
			rows: [
				{ title: 'Samsung', text: 'this is samsung', url: 'http://www.samsung.com' },
				{ title: 'Google', text: 'also google', url: 'http://google.com' },
				{ title: 'Apple', text: 'This is the fancy Apple website', url: 'http://www.apple.com' },
			],
		},
		tagName: 'cmp-simple-list',
	};
}

function emptyRows() {
	return {
		subtitle: 'rows[] is empty',
		content: {
			rows: [],
		},
		tagName: 'cmp-simple-list',
	};
}

function tabbed() {
	return {
		subtitle: 'tabbed simple list',
		content: [
			{
				title: 'Scrolling',
				rows: [
					{ title: 'Samsung', text: 'this is samsung', url: 'http://www.samsung.com' },
					{ title: 'Google', text: 'also google', url: 'http://google.com' },
					{ title: 'Apple', text: 'This is the fancy Apple website', url: 'http://www.apple.com' },
					{ title: 'Row without second line', url: 'http://frontlineed.com' },
					{
						title: 'Row Without Link',
						text: 'all you need to know about software development',
					},
					{ title: 'Apple', text: 'This is the fancy Apple website', url: 'http://www.apple.com' },
					{ title: 'Row without second line', url: 'http://frontlineed.com' },
					{
						title: 'Row Without Link',
						text: 'all you need to know about software development',
					},
					{ title: 'Apple', text: 'This is the fancy Apple website', url: 'http://www.apple.com' },
					{ title: 'Row without second line', url: 'http://frontlineed.com' },
					{
						title: 'Row Without Link',
						text: 'all you need to know about software development',
					},
					{
						title: 'Final List Item',
						text: 'dun dun dun',
						url: 'http://stackoverflow.com',
					},
				],
			},
			{
				title: 'No Scrolling',
				rows: [
					{ title: 'Frontline Education', text: 'asdfasdfasdfasdfasdfasdfasdf', url: 'http://frontlineed.com' },
					{
						title: 'Stack Overflow',
						text: 'all you need to know about software development',
						url: 'http://stackoverflow.com',
					},
				],
			},
		],
		tagName: 'cmp-simple-list',
	};
}
