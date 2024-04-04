
const pageUri = 'https://en.wikipedia.org/wiki/Wikipedia:Main';
const pageTitle = 'Wikipedia, the free encyclopedia';
const uniqueElementXpath = '//span[@id="Welcome_to_Wikipedia"]';

class MainPage {

  async isPageLoaded() {
    expect(this.page.url()).toBe(pageUri);
    await expect(this.page).toHaveTitle(pageTitle);
    await expect(this.page.locator(uniqueElementXpath)).toBeVisible();
  }

  createAccount = () => {
    return cy.get("#pt-createaccount-2 a")
  }

}


module.exports = new MainPage();