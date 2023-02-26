const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchPage {
    URL () {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit(URL);
    }
    SEARCH (){
        cy.get(SEARCH).type('online {enter}')
    }
}

export default SearchPage