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

	it('Adds congrats message if temperature is correct', () => {
	  cy.visit('http://localhost:1234');
	  cy.get('#guess')
	    .type('100')
	  cy.get('#submit').click();
    cy.contains('1 100 Correct');
    cy.get('.congrats').should('exist');
	})
})

