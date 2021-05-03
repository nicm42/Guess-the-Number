describe('Submit guess', () => {
  it('Types in a guess and submits it', () => {
    cy.visit('http://localhost:1234');
    //Type in a guess
    cy.get('.guess').type('50').should('have.value', '50');
    //Click the button
    cy.get('.submit-guess').click();
    cy.get('.history').should('exist');
    cy.get('.guess').should('have.value', '');
  });

  it('Checks temperature is correct', () => {
    cy.visit('http://localhost:1234');
    cy.get('.congrats').should('not.be.visible');
    cy.get('.guess').type('100');
    cy.get('.submit-guess').click();
    cy.contains('1 100 Correct');
    cy.get('.congrats').should('be.visible');
    cy.get('.guess').should('be.disabled');
    cy.get('.submit-guess').should('be.disabled');
  });

  it('Types in two guesses and submits them', () => {
    cy.visit('http://localhost:1234');
    cy.get('.guess').type('50');
    cy.get('.submit-guess').click();
    cy.get('.guess').type('90');
    cy.get('.submit-guess').click();
    cy.contains('1 50 Cold');
    cy.contains('2 90 Warm');
  });

  it('Tests a value is present when button clicked', () => {
    cy.visit('http://localhost:1234');
    cy.get('.submit-guess').click();
    cy.get('.guess').should('have.length', 1);
    cy.get('.guess').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill in this field.');
    });
  });

  it('Tests a for a validation message if value is less than min', () => {
    cy.visit('http://localhost:1234');
    cy.get('.guess').type('0');
    cy.get('.submit-guess').click();
    cy.get('.guess').then(($input) => {
      expect($input[0].validationMessage).to.eq(
        'Value must be greater than or equal to 1.'
      );
    });
  });

  it('Tests a for a validation message if value is more than max', () => {
    cy.visit('http://localhost:1234');
    cy.get('.guess').type('101');
    cy.get('.submit-guess').click();
    cy.get('.guess').then(($input) => {
      expect($input[0].validationMessage).to.eq(
        'Value must be less than or equal to 100.'
      );
    });
  });
});
