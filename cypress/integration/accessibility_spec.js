/// <reference types="cypress" />
describe('A11y passes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('accessibility check', () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})