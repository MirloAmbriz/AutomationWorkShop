import LogInPage from '../pages/LogInPage' 
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import UserInfoPage from '../pages/UserInfoPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS } from '../data/Constants'
import { USERINFO } from '../data/Constants'

fixture('Fill user info and continue to the Overview Page')
    .page `https://www.saucedemo.com/`

test("Fill user info and continue to the Overview Page", async (t) => {
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
    .typeText(UserInfoPage.postalCodeField, USERINFO.USER_PERSONAL_INFO.MAIL)
    .click(UserInfoPage.continueButton)
    .expect(OverviewPage.overviewPageHeader.exists).ok()
    .expect(OverviewPage.overviewPageHeader.innerText).eql('Checkout: Overview', 'Checks if the page header matches', { timeout: 500 })


})