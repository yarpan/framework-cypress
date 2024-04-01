
const WikiLandingPage = require('../pages/wiki-landing');
const WikiHome = require('./pages/wiki-home');

describe('template spec', () => {
    it.skip('passes', () => {
        let wikiLanding = new WikiLandingPage();
        let wikiHome = new WikiHome();

        WikiLandingPage.navigate();
        WikiLandingPage.engBtn().click();

        wikiHome.createAccount().click();
        cy.go('back');
    })
})









