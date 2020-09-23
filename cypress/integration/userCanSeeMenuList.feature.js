/// <reference types="cypress" />

describe("User can see menu list", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('visitor can visit landing page',() => {
    cy.get('[data-cy="header"]').should('contain', 'Menu List')
  }); 

  it('visitor can visit landing page',() => {
    cy.get('[data-cy="list"]').should('contain', 'Starters')
  });

  it('visitor can visit landing page',() => {
    cy.get('[data-cy="header"]').should('contain', 'Menu List')
  }); 
});