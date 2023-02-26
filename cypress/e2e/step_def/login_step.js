/// <reference types="cypress" />
import LoginPage from '../page_object/login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const PoLogin = new LoginPage

Given ('I open login page', () => {
    PoLogin.pageLogin()
    // cy.visit(Pologin.getURL())
})

When ('I submit login', () => {
    PoLogin.fillUsername('username')
    PoLogin.fillPassword('password')
    PoLogin.SignIn()
})

Then ('I should see homepage', () => {
    cy.get('#account_summary_tab > a').should('be.visible')
    cy.get('h2').should('contains.text','Cash Accounts')
})