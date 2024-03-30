/// <reference types="Cypress" />

describe('test2', () => {
    it('passes', () => {
      // open Wiki.org  
      cy.visit('https://wikipedia.org');
      cy.get("[dir='ltr'] a").eq(0).click();
      cy.location("host").should('eq', "en.wikipedia.org");
      cy.location("pathname").should('eq', "/wiki/Main_Page");
  
      cy.go("back")
      cy.location("host").should('eq', "www.wikipedia.org");
      cy.location("pathname").should('eq', "/");

      cy.go("forward")
      cy.location("host").should('eq', "en.wikipedia.org");
      cy.location("pathname").should('eq', "/wiki/Main_Page");

      
    })
  })
