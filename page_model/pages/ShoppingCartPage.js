import {Selector} from 'testcafe'

class ShoppingCartPage{
    constructor(){ 
          this.shoppingCartPageTitle = Selector('.subheader')
          this.checkOutButton = Selector('.checkout_button')
    }
}

export default new ShoppingCartPage()