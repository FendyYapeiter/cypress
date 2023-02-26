const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = '.btn'

class LoginPage {
    pageLogin() {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit(URL);
    }

    fillUsername(username){
        cy.get(USERNAME).type(username);
    }

    fillPassword(password){
        cy.get(PASSWORD).type(password);
    }

    SignIn(){
        cy.get(SIGN_IN).click();
    }

    getURL(){
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        return URL
    }
}

export default LoginPage