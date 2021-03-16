import ProductsPage from '../pages/ProductsPage'
import * as Roles from '../data/Roles'

fixture('Problem  user Login TestCase')
    .page `https://www.saucedemo.com/`

test("Problem user Login TestCase", async (t) => {
    await t
    .useRole(Roles.problem_user)       //Using a role for a problem user
    .expect(ProductsPage.productsPageTitle.exists).ok()
    .click(ProductsPage.inventoryProductADDTOCART)
    .expect(ProductsPage.cartCounter.exists).ok()
    .click(ProductsPage.inventoryProductREMOVE)     //this user does not allow to remove items already in cart
    .expect(ProductsPage.cartCounter.innerText).eql('1', 'Checks cart items count', { timeout: 500 })
})