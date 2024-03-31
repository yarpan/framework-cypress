/// <reference types="Cypress" />

it('test with custom command', () => {
    //cy.visit('https://amazon.com');
    cy.goAmazon();
    cy.screenshot();
  })