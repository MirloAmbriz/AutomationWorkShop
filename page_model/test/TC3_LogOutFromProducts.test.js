import LogInPage from '../pages/LogInPage' 
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Log Out from Products Page')
    .page `https://www.saucedemo.com/`

test("Log Out from Products Page", async (t) => {
    await t
    .expect(LogInPage.logInContainer.exists).ok()
    .typeText(LogInPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LogInPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LogInPage.logInButton)
    .expect(ProductsPage.productsPageTitle).ok()
    .expect(ProductsPage.productsPageTitle.innerText).eql('Products', 'Checks if the page header matches', { timeout: 500 })
    .click(ProductsPage.productsMenuButton)
    .click(ProductsPage.logOutOptionInMenu)
    .expect(LogInPage.logInContainer.exists).ok()
})