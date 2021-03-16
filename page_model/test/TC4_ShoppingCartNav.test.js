import LogInPage from '../pages/LogInPage' 
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Navigate to the shopping cart')
    .page `https://www.saucedemo.com/`

test("Navigate to the shopping cart", async (t) => {
    await t
    .expect(LogInPage.logInContainer.exists).ok()
    .typeText(LogInPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LogInPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LogInPage.logInButton)
    .expect(ProductsPage.productsPageTitle).ok()
    .expect(ProductsPage.productsPageTitle.innerText).eql('Products', 'Checks if the page header matches', { timeout: 500 })
    .click(ProductsPage.shoppingCartContainer)
    .expect(ShoppingCartPage.shoppingCartPageTitle.exists).ok()
})

