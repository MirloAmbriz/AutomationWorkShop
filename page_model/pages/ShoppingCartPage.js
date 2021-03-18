//This class is made to declare selectors inside the Shopping Cart page

import {Selector} from 'testcafe'

class ShoppingCartPage{
    constructor(){ 
          this.shoppingCartPageTitle = Selector('.subheader')
          this.checkOutButton = Selector('.checkout_button')
    }
}

export default new ShoppingCartPage()