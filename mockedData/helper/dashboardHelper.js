const dashboardConfigAll = require('../fixtures/dashboard-config/all');
const dashboardFixtures = require('../helper/componentHelper');

module.exports = {
	configAll,
	componentFixtures,
};

// Dashboard Configurations

// ALL component fixtures
// passing a route will only create a dashboard config with those tiles
function configAll(route) {
	cy.route({
		method: 'GET',
		url: `**/api/dashboardConfig`,
		response: route
			? getConfigFromRoute(route)
			: dashboardConfigAll(),
	});
}

function getConfigFromRoute(route) {
	return {
		responsibilities2: ['manageUserCreatedPlans'],
		hasAttentionRequired: true,
		tabs: [dashboardConfigAll().tabs.find(tab => tab.associatedPersona === route)]
	};
}

// Individual Component Mocks

// load all component fixture routes
// automatically alias each route wth url value
function componentFixtures(componentKey) {
	const componentKeys = componentKey ? [componentKey] : Object.keys(dashboardFixtures);

	componentKeys.forEach(key => {
		dashboardFixtures[key].forEach(mock => {
			cy.route({
				method: 'GET',
				url: `**/api/${mock.url}`,
				response: mock.response,
			}).as(mock.url);
		});
	});
}
