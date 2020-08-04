describe('Submit guess', () => {
	it('Types in a guess and submits it', () => {
    cy.visit('http://localhost:1234');
    //Type in a guess
    cy.get('#guess')
      .type('50')
      .should('have.value', '50');
    //Click the button
    cy.get('#submit').click();
    cy.get('.history').should('exist');
    cy.get('#guess')
      .should('have.value', '');
    cy.contains('1 50 Cold');
	})
})

