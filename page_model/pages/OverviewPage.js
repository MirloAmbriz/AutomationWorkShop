import {Selector} from 'testcafe'

class OverviewPage{
    constructor(){ 
        this.overviewPageHeader = Selector('.subheader')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new OverviewPage()

