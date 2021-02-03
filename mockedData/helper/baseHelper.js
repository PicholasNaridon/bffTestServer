const productaccessFn = require('../fixtures/base/baseIdm/productaccess');
const productaccessUserFn = require('../fixtures/base/baseIdm/productaccess-user');
const sessionsFn = require('../fixtures/base/baseIdm/sessions');
const sessionsStateFn = require('../fixtures/base/baseIdm/sessions-state');
const organizationFn = require('../fixtures/base/organization/organization');
const organizationBrandFn = require('../fixtures/base/organization/organization-brand');
const permissionFn = require('../fixtures/base/baseIdm/permission');

const fixture = cy => {
	cy.window().then(function(win) {
		win.sessionStorage.setItem('automation-no-auth', true);
		win.sessionStorage.setItem('automation-ignore-remote-side-nav', true);
	});

	const baseIdm = () => {
		cy.route({
			method: 'GET',
			url: '**/sessions',
			response: sessionsFn(),
		});
		cy.route({
			method: 'GET',
			url: '**/productaccessservice/v0/api/users/id/*',
			response: productaccessUserFn(),
		});
		cy.route({
			method: 'GET',
			url: '**/productaccessservice/v0/api/productlinks?userId=*',
			response: productaccessFn(),
		});
		cy.route({
            method: 'GET',
            url: '**/PermissionAPI/api/ActionPermissions?organizationId=*',
            response: permissionFn(),
        });
	};

	const idmSessionState = () => {
		cy.route({
			method: 'POST',
			url: '**/sessions/state',
			response: sessionsStateFn(),
		});
	};

	const organization = () => {
		cy.route({
			method: 'GET',
			url: '**/OrganizationAPI/api/organizations/*',
			response: organizationFn(),
		});
		cy.route({
			method: 'GET',
			url: '**/OrganizationAPI/api/organizations/*?fields=branding',
			response: organizationBrandFn(),
		});
	};

	return {
		baseIdm,
		idmSessionState,
		organization,
	};
};

module.exports = fixture;
