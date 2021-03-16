import {Selector} from 'testcafe'

class LogInPage{
    constructor(){
        this.logInContainer = Selector('.form_column')
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.logInButton = Selector('#login-button')
        this.logInErrorMessage = Selector('[data-test="error"]')
    }
}

export default new LogInPage()