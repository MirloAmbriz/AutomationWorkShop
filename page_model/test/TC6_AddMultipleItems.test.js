import LogInPage from '../pages/LogInPage' 
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Add multiple items to the shopping cart')
    .page `https://www.saucedemo.com/`

test("Add multiple items to the shopping cart", async (t) => {
    await t
    .expect(LogInPage.logInContainer.exists).ok()
    .typeText(LogInPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LogInPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LogInPage.logInButton)
    .expect(ProductsPage.productsPageTitle).ok()
    .expect(ProductsPage.productsPageTitle.innerText).eql('Products')
    .click(ProductsPage.inventoryProductADDTOCART)
    .click(ProductsPage.inventoryProductADDTOCART)
    .expect(ProductsPage.cartCounter.exists).ok()
    .expect(ProductsPage.cartCounter.innerText).eql('2', 'Checks cart items count', { timeout: 500 })
})