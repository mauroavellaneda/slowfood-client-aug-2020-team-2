/// <reference types="cypress" />

describe("User can se menu list", () => {
  it('visitor can visit landing page',() => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Slowfood');
  }); 
});