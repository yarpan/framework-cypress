/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://wikipedia.org');
    
    cy.get("[dir='ltr'] a").should('have.length', 9)

    cy.contains("Download Wikipedia for Android or iOS");                 //page contains text
    cy.get("h1.central-textlogo-wrapper").contains("Free Encyclopedia");  //element contains text

    cy.get("div.central-textlogo strong");
    cy.get("div.central-textlogo").get("strong"); //doesn't work, lookig for locator on whole Page, not inside previous locator
    cy.get('#js-link-box-en').click();

    //cy.get('.backdrop').click({force: true})    //click element that is overlapped by other element
  })
})


describe('text', () => {
  it('passes', () => {
    cy.visit('https://wikipedia.org');
    
    cy.get("#search-form #searchInput").type("Automation{enter}");

  })
})


describe('select', () => {
  it('passes', () => {
    cy.visit('https://wikipedia.org');
    
    //cy.get("[dir='ltr'] a").first().click();
    //cy.get("[dir='ltr'] a").last().click();
    cy.get("[dir='ltr'] a").eq(3).click();  //5th element in list

    cy.location("host").should('eq', "ja.wikipedia.org");
    cy.location("pathname").should('eq', "/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8")

    
  })
})


