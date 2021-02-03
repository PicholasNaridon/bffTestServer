const { TEXT, SELECTORS } = require('./constants');

module.exports = {
	createAliasForTile,
	verifyNoContent,
	verifyTabNoContent,
	verifyDropdownNoContent,
};

// Dashboard content selection helpers

function createAliasForTile(tileTitle) {
	const tileAlias = tileTitle.replace(/\W/g, '');
	cy.get('.widget-title').contains(tileTitle).parent().parent().as(tileAlias); // div.cmp-dashboard-tile

	return '@' + tileAlias;
}

// Dashboard action helpers

function verifyNoContent(tileTitle, noContentMessage = TEXT.noContentMessage) {
	let alias;

	describe('Single', () => {
		beforeEach(() => {
			alias = createAliasForTile(tileTitle);
		});

		it('no-content image and message should be visible', () => {
			cy.get(alias).within(() => {
				cy.get(SELECTORS.noContent.image).should('be.visible');
				cy.get(SELECTORS.noContent.text).should('be.visible');
			});
		});

		it('correct no-content message should be used', () => {
			cy.get(alias).within(() => {
				cy.get(SELECTORS.noContent.text).should('contain', noContentMessage);
			});
		});
	});
}

function verifyTabNoContent(tileTitle, tabTitle = TEXT.noContent) {
	let alias;

	describe('Tabbed', () => {
		beforeEach(() => {
			alias = createAliasForTile(tileTitle);
		});

		it('no-content image and message should be visible', () => {
			cy.get(alias).within(() => {
				cy.get(SELECTORS.tab.tabset).contains(tabTitle).click();
				cy.get(SELECTORS.noContent.image).should('be.visible');
				cy.get(SELECTORS.noContent.text).should('be.visible');
			});
		});
	});
}

function verifyDropdownNoContent(tileTitle, tabTitle = TEXT.noContent) {
	let alias;

	describe('Filter Dropdown', () => {
		beforeEach(() => {
			alias = createAliasForTile(tileTitle);
		});

		it('no-content image and message should be visible after clicking tab', () => {
			cy.get(alias).within(() => {
				cy.get(SELECTORS.filter.dropdown).contains(tabTitle).click({ force: true }); // click hidden dropdown item
				cy.get(SELECTORS.noContent.image).should('be.visible');
				cy.get(SELECTORS.noContent.text).should('be.visible');
			});
		});
	});
}
