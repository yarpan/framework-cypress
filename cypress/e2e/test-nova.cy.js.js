/// <reference types="Cypress" />

describe('NovaPoshta tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.closePopupMask();
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('passes', () => {
        cy.get(".fast_icons_new li").should('have.length', 6)
        cy.contains("ТОВ «Нова Пошта»");
        cy.get("#contacts_home").contains("Контакти");

        cy.get("#cargo_number").as("trackingField");
        cy.get("@trackingField").type("20400384325121{enter}");
    })

    it('test forward-back', { defaultCommandTimeout: 7000 }, () => {
        cy.get(".fast_icons_new li").should('have.length', 6)
        cy.get(".fast_icons_new li").eq(2).click();
        cy.location("host").should('eq', "novaposhta.ua");
        cy.location("pathname").should('eq', "/onlineorder/estimatedate")

        cy.go("back");
        cy.location("host").should('eq', "novaposhta.ua");
        cy.location("pathname").should('eq', "/");

        cy.go("forward");
        cy.location("host").should('eq', "novaposhta.ua");
        cy.location("pathname").should('eq', "/onlineorder/estimatedate");
    })

    it('test with then', () => {
        cy.get(".fast_icons_new li").should('have.length', 6)
        cy.get(".fast_icons_new li").then((elements) => {
            expect(elements).to.exist;
            expect(elements.length).to.equal(6);
            expect(elements).to.be.visible;          
        })
    })
})

