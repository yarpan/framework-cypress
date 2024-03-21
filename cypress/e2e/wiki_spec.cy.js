describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://wikipedia.org');
    

    cy.get("['dir=ltr'] a").should('have.length', 9)

    cy.get('#js-link-box-en').click();

  })
})