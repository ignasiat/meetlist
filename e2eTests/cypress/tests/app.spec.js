describe('MeetList app e2e tests', () => {
  beforeEach(() => {
    cy.intercept('http://gateway.marvel.com/v1/public/characters?*', { fixture: 'ApiResponseHeroesList.json' }).as('heroesList');
    cy.intercept('http://gateway.marvel.com/v1/public/characters/*', { fixture: 'ApiResponseHeroeDetail.json' }).as('heroeDetail');
  });

  it('should render dashboard and detail', () => {
    cy.visit('/dashboard');
    cy.wait('@heroesList');
    cy.get('[data-test-id="header-title"]').should('be.visible').contains('MeetList');
    cy.get('[data-test-id="dashboard__title"]').should('be.visible').contains('Heroes dashboard');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.get('[data-test-id="page-element"]').snapshot();
    cy.get('[data-test-id="page-element"]').screenshot('heroes-dashboard', { overwrite: true });
    cy.get('[data-test-id="hero-card__title-1011334"]').click();
    cy.wait('@heroeDetail');
    cy.get('[data-test-id="hero-detail__title"]').should('be.visible').contains('A-Bomb');
    cy.get('[data-test-id="page-element"]').snapshot();
    cy.get('[data-test-id="page-element"]').screenshot('heroe-details', { overwrite: true });
  });
});
