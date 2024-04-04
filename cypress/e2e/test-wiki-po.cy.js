
const LandingPage = require('../pages/landing-page');
const MainPage = require('../pages/main-page');

describe('template spec', () => {
    it.skip('passes', () => {
        let landingPage = new LandingPage();
        let mainPage = new MainPage();

        WikiLandingPage.navigate();
        WikiLandingPage.engBtn().click();

        wikiHome.createAccount().click();
        cy.go('back');
    })
})









