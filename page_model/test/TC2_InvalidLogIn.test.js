import LogInPage from '../pages/LogInPage' 
import { CREDENTIALS } from '../data/Constants'

fixture('Invalid Login TestCase')
    .page `https://www.saucedemo.com/`

test("This is an invalid LogIn Test Case", async (t) => {
    await t
    .expect(LogInPage.logInContainer.exists).ok()
    .typeText(LogInPage.userNameField, CREDENTIALS.INVALID_USER.USERNAME)
    .typeText(LogInPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
    .click(LogInPage.logInButton)
    .expect(LogInPage.logInErrorMessage.exists).ok()
})