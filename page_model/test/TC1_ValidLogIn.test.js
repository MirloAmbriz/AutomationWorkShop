import ProductsPage from '../pages/ProductsPage'
import * as Roles from '../data/Roles'

fixture('Valid Login TestCase')
    .page `https://www.saucedemo.com/`

test("This is a valid LogIn Test Case", async (t) => {
    await t
    .useRole(Roles.standard_user)       //Using a role for a standard User (this user should not have any issue)
    .expect(ProductsPage.productsPageTitle).ok()
    .expect(ProductsPage.productsPageTitle.innerText).eql('Products')
})