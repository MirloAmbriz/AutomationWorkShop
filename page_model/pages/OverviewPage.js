//This class is made to declare selectors inside the Overview page

import {Selector} from 'testcafe'

class OverviewPage{
    constructor(){ 
        this.overviewPageHeader = Selector('.subheader')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new OverviewPage()

