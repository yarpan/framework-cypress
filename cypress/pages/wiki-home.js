class WikiHomePage {
    createAccount = () => {
        return cy.get("#pt-createaccount-2 a")
    }

}

module.exports = WikiHomePage;