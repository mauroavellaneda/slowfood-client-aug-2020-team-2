describe("Visitor are able to see menu list", () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/products',
      response: 'fixture:products_index.json'
    })
    cy.visit('/')
  })

  it('visitor can see menu title',() => {
    cy.get('[data-cy="header"]').should('contain', 'Menu List')
  }); 

  it("shows first item", () => {
    cy.get("[data-cy=product-1]").within(() => {
      cy.contains("Mauros amazing Pizza");
      cy.contains("150");
    });
  });

  it("shows second item", () => {
    cy.get("[data-cy=product-2]").within(() => {
      cy.contains("Kiwi pizza");
      cy.contains("100");
    });
  });
});
