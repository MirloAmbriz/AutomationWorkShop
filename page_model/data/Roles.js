import {Role} from 'testcafe'
import LogInPage from '../pages/LogInPage'
import dotenv from 'dotenv'
dotenv.config(  )

export const standard_user = Role('https://www.saucedemo.com/', async t => {
    await t
        .expect(LogInPage.logInContainer.exists).ok()
        .typeText(LogInPage.userNameField , process.env.USERNAME_STANDARD)
        .typeText(LogInPage.passwordField , process.env.PASSWORD_STANDARD)
        .click(LogInPage.logInButton)
},{preserveUrl : true})

export const problem_user = Role('https://www.saucedemo.com/', async t => {
    await t
        .expect(LogInPage.logInContainer.exists).ok()
        .typeText(LogInPage.userNameField , process.env.USERNAME_PROBLEM)
        .typeText(LogInPage.passwordField , process.env.PASSWORD_PROBLEM)
        .click(LogInPage.logInButton)
},{preserveUrl : true})