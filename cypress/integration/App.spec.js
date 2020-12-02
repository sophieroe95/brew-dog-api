beforeEach(() => {
    cy.visit('http://localhost:3000');
})

//valid test
it('should show beers on page load', () => {

    //find an h1 tag to check the page actually loaded
    cy.get('h1').should('exist');

    cy.get('[data-cy=card]').should('have.length', 25)

    cy.get('[data-cy=searchIcon]').click()

    //find the searchbox
    cy.get('[data-cy=searchInput]').type('trashy blonde')

    //get the list of beers and make sure they're on the page
    cy.get('[data-cy=card]').should('have.length', 1)
})

//invalid test 
it('should show no beers when aaaaaaaaaa is typed in', () => {

    //find the searchbox
    cy.get('[data-cy=searchIcon]').click()

    cy.get('[data-cy=searchInput]').type('aaaaaaaaaa')

    cy.get('[data-cy=card]').should('have.length', 0)
})

//null test
it('should show no beers when empty string is typed in', () => {
    cy.visit('http://localhost:3000');
    //find the searchbox
    cy.get('[data-cy=searchIcon]').click()

    cy.get('[data-cy=searchInput]').type('t').clear();

    cy.get('[data-cy=card]').should('have.length', 0)
})