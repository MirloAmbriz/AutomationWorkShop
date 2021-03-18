//This class is made to declare selectors inside the Finish page

import {Selector} from 'testcafe'

class FinishPage{
    constructor(){ 
        this.finishPageHeader = Selector('.subheader')
        this.finishContainer = Selector('#checkout_complete_container')
    }
}

export default new FinishPage()