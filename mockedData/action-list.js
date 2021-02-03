module.exports = {
	full,
	oneTab,
	statusColor,
	emptyListItems,
	emptyTabs,
	masterButton,
};

function full() {
	return {
		content: [
			{
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/calibration/plans' },
				listItems: [
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5787fc5d27aa74bcfe000020',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Edu Calib Plan 6',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/50f6cd7adf65e39c01000028',
						},
						status: { label: 'Started', value: 'Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  February 04,  2013 | Owned by Sarah Girotti',
						title: 'Calibration Plan Winter 2013',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/508982ec2bb17c6c080000c0',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  October 25,  2012 | Owned by Elizabeth Combs',
						title: 'Test Group Video Certification Plan',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5785456013531060c1000019',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Mohit Sharma',
						title: 'TestCalibJul12',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5984051edce4fa0100000072',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Reviewer Test',
					},
				],
				title: 'Calibration',
			},
			{
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/training/plans' },
				listItems: [
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/50c714021f8476500e00000c',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  December 11,  2012 | Owned by Gnovy Ong',
						title: 'MLP Demo 2 - Grd 7 Science',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/527bc9be28fb089c130003aa',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  December 01,  2014 | Owned by Elizabeth Combs',
						title: 'Stronge Demo Plan  - Elementary Math',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/5787f39627aa74bcfe00000a',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Edu Training Plan another',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/5733dfb2994d77f42200001e',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  May 27,  2016',
						title: 'Test Plan May 11',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/51921212dbb8458c0900059f',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: '',
						title: 'Spring 2013 Training Plan 1',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/4ff0e817d2c85dbd7a000043',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  July 09,  2012 | Owned by Gnovy Ong',
						title: 'MLP Demo - Grade 7 Science',
					},
				],
				title: 'Training',
			},
		],
		tagName: 'cmp-action-list',
	};
}

function oneTab() {
	return {
		content: {
			diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/calibration/plans' },
			listItems: [
				{
					rowButton: {
						actionType: 'link',
						text: 'View Plan',
						url: 'https://elevate.flqa.net/calibration/plans/5787fc5d27aa74bcfe000020',
					},
					status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
					dropdownItems: [],
					subtitle: 'Owned by Shraddha Kulkarni',
					title: 'Edu Calib Plan 6',
				},
				{
					rowButton: {
						actionType: 'link',
						text: 'View Plan',
						url: 'https://elevate.flqa.net/calibration/plans/50f6cd7adf65e39c01000028',
					},
					status: { label: 'Started', value: 'Started', statusColorCategory: 'none' },
					dropdownItems: [],
					subtitle: 'Started  February 04,  2013 | Owned by Sarah Girotti',
					title: 'Calibration Plan Winter 2013',
				},
				{
					rowButton: {
						actionType: 'link',
						text: 'View Plan',
						url: 'https://elevate.flqa.net/calibration/plans/508982ec2bb17c6c080000c0',
					},
					status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
					dropdownItems: [],
					subtitle: 'Started  October 25,  2012 | Owned by Elizabeth Combs',
					title: 'Test Group Video Certification Plan',
				},
				{
					rowButton: {
						actionType: 'link',
						text: 'View Plan',
						url: 'https://elevate.flqa.net/calibration/plans/5785456013531060c1000019',
					},
					status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
					dropdownItems: [],
					subtitle: 'Owned by Mohit Sharma',
					title: 'TestCalibJul12',
				},
				{
					rowButton: {
						actionType: 'link',
						text: 'View Plan',
						url: 'https://elevate.flqa.net/calibration/plans/5984051edce4fa0100000072',
					},
					status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
					dropdownItems: [],
					subtitle: 'Owned by Shraddha Kulkarni',
					title: 'Reviewer Test',
				},
			],
		},
		tagName: 'cmp-action-list',
	};
}

function statusColor() {
	return {
		content: {
			listItems: [
				{
					title: 'Active Math: Connecting Mathematical Ideas in Grades K-2',
					subtitle: 'Due 09/18/2012 |  Registration Error',
					status: { label: ' Registration Error', value: 'RegistrationError', statusColorCategory: 'highpriority' },
					rowButton: { text: 'View Plan', url: 'http://wikipedia.com', actionType: 'link' },
				},
				{
					title: 'the title for message 3',
					subtitle: 'Due 03/29/2017',
					status: { label: 'Survey', value: 'survey', statusColorCategory: 'highpriority' },
					rowButton: { text: 'View Plan', url: 'http://wikipedia.com', actionType: 'link' },
					dropdownItems: [
						{ text: 'Submit', url: 'http://wikipedia.com', actionType: 'link' },
						{ text: 'Edit', url: 'http://wikipedia.com', actionType: 'link' },
						{ text: 'View', url: 'http://wikipedia.com', actionType: 'link' },
					],
				},
			],
		},
		tagName: 'cmp-action-list',
	};
}

function emptyListItems() {
	return {
		content: [
			{
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/calibration/plans' },
				listItems: [
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5787fc5d27aa74bcfe000020',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Edu Calib Plan 6',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/50f6cd7adf65e39c01000028',
						},
						status: { label: 'Started', value: 'Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  February 04,  2013 | Owned by Sarah Girotti',
						title: 'Calibration Plan Winter 2013',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/508982ec2bb17c6c080000c0',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  October 25,  2012 | Owned by Elizabeth Combs',
						title: 'Test Group Video Certification Plan',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5785456013531060c1000019',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Mohit Sharma',
						title: 'TestCalibJul12',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5984051edce4fa0100000072',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Reviewer Test',
					},
				],
				title: 'Calibration',
			},
			{
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/training/plans' },
				listItems: [],
				title: 'Training',
			},
		],
		tagName: 'cmp-action-list',
	};
}

function emptyTabs() {
	return {
		content: [],
		tagName: 'cmp-action-list',
	};
}

function masterButton() {
	return {
		content: [
			{
				title: 'Calibration',
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/calibration/plans' },
				listItems: [
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5787fc5d27aa74bcfe000020',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Edu Calib Plan 6',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/50f6cd7adf65e39c01000028',
						},
						status: { label: 'Started', value: 'Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  February 04,  2013 | Owned by Sarah Girotti',
						title: 'Calibration Plan Winter 2013',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/calibration/plans/5984051edce4fa0100000072',
						},
						status: { label: 'Not Yet Started', value: 'Not Yet Started', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Owned by Shraddha Kulkarni',
						title: 'Reviewer Test',
					},
				],
			},
			{
				title: 'Training',
				diveLink: { text: 'View All Plans', url: 'https://elevate.flqa.net/training/plans' },
				listItems: [
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/50c714021f8476500e00000c',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  December 11,  2012 | Owned by Gnovy Ong',
						title: 'MLP Demo 2 - Grd 7 Science',
					},
					{
						rowButton: {
							actionType: 'link',
							text: 'View Plan',
							url: 'https://elevate.flqa.net/training/plans/527bc9be28fb089c130003aa',
						},
						status: { label: 'Scored', value: 'Scored', statusColorCategory: 'none' },
						dropdownItems: [],
						subtitle: 'Started  December 01,  2014 | Owned by Elizabeth Combs',
						title: 'Stronge Demo Plan  - Elementary Math',
					}
				],
			},
		],
		masterButtonConfig: {
			dropdownLabel: 'Component Button',
			dropdownItems: [
				{ url: 'http://www.frontlineed.com', text: 'Frontline (override)' },
				{ url: 'http://www.google.com', text: 'Google (override)' },
			]
		},
		tagName: 'cmp-action-list',
	};
}
