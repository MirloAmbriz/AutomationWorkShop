import {Selector} from 'testcafe'

class ProductsPage{
    constructor(){ 
          this.productsPageTitle = Selector('.product_label')
          this.inventoryList = Selector('.inventory_list')
          this.productsMenuButton = Selector('#react-burger-menu-btn')
          this.logOutOptionInMenu = Selector('#logout_sidebar_link')
          this.shoppingCartContainer = Selector('.shopping_cart_container')
          this.inventoryProductADDTOCART = Selector('.btn_inventory').withExactText('ADD TO CART')
          this.inventoryProductREMOVE = Selector('.btn_inventory').withExactText('REMOVE')
          this.cartCounter = Selector('.fa-layers-counter.shopping_cart_badge')

    }
}

export default new ProductsPage()