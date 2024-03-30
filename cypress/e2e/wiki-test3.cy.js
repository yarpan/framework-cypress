/// <reference types="Cypress" />

describe('Amazon', () => {
    it('passes', () => {
      // open Wiki.org  
      cy.visit('https://amazon.com');
  
      cy.get("#twotabsearchtextbox").as("searchField");
      cy.get("#twotabsearchtextbox").type("Monitors{enter}");
      cy.get("#twotabsearchtextbox").clear();

      cy.get("@searchField").type("ssd{enter}");
      cy.get("#twotabsearchtextbox").clear();

      cy.get("#twotabsearchtextbox").type("processor{enter}");


      
    })
  })