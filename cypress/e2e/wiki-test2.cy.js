/// <reference types="Cypress" />

describe('Amazon multisearch', () => {
  it('multisearch simple', () => {
    cy.visit('https://amazon.com');

    cy.get("#twotabsearchtextbox");
    cy.get("#twotabsearchtextbox").type("Monitors{enter}");
    cy.get("#twotabsearchtextbox").clear();

    cy.get("#twotabsearchtextbox").type("ssd{enter}");
    cy.get("#twotabsearchtextbox").clear();

    cy.get("#twotabsearchtextbox").type("processor{enter}");
  })

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


describe('Amazon with before', () => {
  beforeEach(() => {
    cy.visit('https://amazon.com');
  })

  it('test with then', () => {
    //cy.visit('https://amazon.com');
    cy.get("#nav-xshop a").should("have.length", 6);
    cy.get("#nav-xshop a").then((elements) => {
      expect(elements.length).to.equal(6);
      expect(elements).to.be.visible;
    })
  })

  it('test with custom timeout', {defaultCommandTimeout:7000}, () => {
    //cy.visit('https://amazon.com');
    cy.get("#nav-xshop a").should("have.length", 6);
  })
})

it('test with custom command', () => {
  //cy.visit('https://amazon.com');
  cy.goAmazon();
  cy.screenshot();
})