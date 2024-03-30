/// <reference types="Cypress" />

describe('Amazon', () => {
  it('multisearch', () => {
    cy.visit('https://amazon.com');

    cy.get("#twotabsearchtextbox");
    cy.get("#twotabsearchtextbox").type("Monitors{enter}");
    cy.get("#twotabsearchtextbox").clear();

    cy.get("#twotabsearchtextbox").type("ssd{enter}");
    cy.get("#twotabsearchtextbox").clear();

    cy.get("#twotabsearchtextbox").type("processor{enter}");
  })
})

describe('Amazon', () => {
  it('multisearch with alias', () => {
    cy.visit('https://amazon.com');

    cy.get("#twotabsearchtextbox").as("searchField");
    cy.get("@searchField").type("Monitors{enter}");
    cy.screenshot();
    cy.get("@searchField").clear();

    cy.get("@searchField").type("ssd{enter}");
    cy.screenshot();
    cy.get("@searchField").clear();

    cy.get("@searchField").type("processor{enter}");
    cy.screenshot();
  })
})

describe('Amazon', () => {
  it('multisearch with then', () => {
    cy.visit('https://amazon.com');

    cy.get("#nav-xshop a").should("have.length", 6);
    cy.get("#nav-xshop a").then((elements) => {
      expect(elements.length).to.equal(6);
      expect(elements).to.be.visible;
    })
  })
})