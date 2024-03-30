
const WikiLanding = require('../pages/wiki-landing');
const WikiHome = require('../pages/wiki-home');

describe('template spec', () => {
    it('passes', () => {
        let wikiLanding = new WikiLanding();
        let wikiHome = new WikiHome();

        WikiLanding.navigate();
        WikiLanding.engBtn().click();

        wikiHome.createAccount().click();
        cy.go('back');

    })



})









