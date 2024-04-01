describe('test wiki menu spec', () => {
    it('passes', () => {
      cy.visit('https://wikipedia.org');
      cy.get("[dir='ltr'] a").eq(0).click();
      cy.location("host").should('eq', "en.wikipedia.org");
      cy.location("pathname").should('eq', "/wiki/Main_Page");
  
      cy.get("#p-vector-user-menu-overflow").contains("Create account");
      cy.get("#p-vector-user-menu-overflow").contains("Log in");
      cy.get("#vector-user-links-dropdown");
    })
  })

