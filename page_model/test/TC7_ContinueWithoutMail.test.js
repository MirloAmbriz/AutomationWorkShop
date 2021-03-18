import LogInPage from '../pages/LogInPage' 
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import UserInfoPage from '../pages/UserInfoPage'
import { CREDENTIALS } from '../data/Constants'
import { USERINFO } from '../data/Constants'

fixture('Continue without mail')
    .page `https://www.saucedemo.com/`

test("Continue without mail", async (t) => {
    await t
    .expect(LogInPage.logInContainer.exists).ok()
    .typeText(LogInPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LogInPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
    .click(LogInPage.logInButton)
    .expect(ProductsPage.productsPageTitle).ok()
    .expect(ProductsPage.productsPageTitle.innerText).eql('Products', 'Checks if the page header matches', { timeout: 500 })
    .click(ProductsPage.inventoryProductADDTOCART)
    .expect(ProductsPage.cartCounter.exists).ok()
    .click(ProductsPage.shoppingCartContainer)
    .expect(ShoppingCartPage.shoppingCartPageTitle.exists).ok()
    .click(ShoppingCartPage.checkOutButton)
    .expect(UserInfoPage.UserInfoContainer.exists).ok()
    .typeText(UserInfoPage.firstNameField, USERINFO.USER_PERSONAL_INFO.NAME)
    .typeText(UserInfoPage.lastNameField, USERINFO.USER_PERSONAL_INFO.LASTNAME)
    .click(UserInfoPage.continueButton)
    .expect(UserInfoPage.missingMailErrorMessage.exists).ok()
    .expect(UserInfoPage.missingMailErrorMessage.innerText).eql('Error: Postal Code is required', 'Checks if the message matches', { timeout: 500 })
 })