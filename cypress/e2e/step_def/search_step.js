import SearchPage from '../page_object/search.page';
const SP = new SearchPage
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given ('I open page Zero Bank', () => {
    cy.clearAllCookies;
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.clearCookies;
    cy.reload();
    SP.URL()
})

When ('I search fitur or news', () => {
    SP.SEARCH()
})

Then ('I should see search page', () => {
    cy.get('h2').contains('Search Results:',{timeout:5000})
    cy.get('.top_offset').contains(' The following pages were found for the query: online ',{timeout:5000})
})