//This class is made to declare selectors inside the UserInfo page

import {Selector} from 'testcafe'

class UserInfoPage{
    constructor(){ 
          this.UserInfoContainer = Selector('.checkout_info_container')
          this.continueButton = Selector('input[value="CONTINUE"]')
          this.missingMailErrorMessage =  Selector('[data-test=error]')
          this.firstNameField = Selector('#first-name')
          this.lastNameField = Selector('#last-name')
          this.postalCodeField = Selector('#postal-code')
    }
}

export default new UserInfoPage()

