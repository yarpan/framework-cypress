/// <reference types="Cypress" />

describe.only('Prom tests', () => {
    beforeEach(() => {
        cy.visit('https://prom.ua/');
    })

    it('Open home page', () => {
        cy.contains("Продавати по всій Україні");
        cy.location("host").should('eq', "prom.ua");
        cy.location("pathname").should('eq', "/")
    })

    it('Search iPhone', { timeout: 10000 }, () => {
        cy.get('[data-qaid="search_form"]').click();
        cy.get('[data-qaid="search_form"]').type("iPhone 15");
        cy.get('[data-qaid="search_btn"]').click();
        cy.get('[data-qaid="caption"]').contains("iPhone 15");
        cy.get('[data-qaid="caption"]').contains("в Україні");
    })

    it('Check elements on Main Page', () => {
        cy.get('[data-qaid="recommended_categories"] li').should('have.length', 15);
        cy.get('[data-qaid="personal_feed_block"] [data-qaid="qa_product_tile"]').should('have.length', 20);

    })

    it('Open elements on Category Page', { timeout: 20000 }, () => {
        cy.get('[data-qaid="recommended_categories"] [href="/ua/Kofe"]').click({force: true});
        cy.get('[data-qaid="caption"]').contains("Кава");
        cy.get('[data-qaid="product_gallery"] [data-qaid="product_block"]').should('have.length', 10);
        cy.get('[data-qaid="breadcrumbs_seo"] li').should('have.length', 9);
        cy.get('[data-qaid="breadcrumbs_seo"] li').eq(8).should('have.text', 'Кава ');
     })

    it('Open contacts', () => {
        cy.visit('https://prom.ua/ua/contact_us');
        cy.get('.ek-body__section section').as('contactsGreedLocaor').should('have.length', 5);
        cy.contains("Контактна інформація");
        cy.get('@contactsGreedLocaor').contains("Продавцям");
        cy.get('@contactsGreedLocaor').contains("Покупцям");
        cy.get('@contactsGreedLocaor').contains("ЗМІ");
        cy.get('@contactsGreedLocaor').contains("Держструктурам");
        cy.get('@contactsGreedLocaor').contains("Кандидатам на роботу");
    })
})