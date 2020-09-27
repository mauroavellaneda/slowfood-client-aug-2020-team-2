describe("Logged in user can see add to order button", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products_index.json",
    });

    cy.visit("/");
  });

  it("if authenticated successfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login.json",
      headers: {
        uid: "user@mail.com",
      },
    });

    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#login_email").type("user@mail.com");
      cy.get("#login_password").type("password");
      cy.get("#submit").contains("Submit").click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");

    cy.get("[data-cy=product-1]").within(() => {
      cy.get('button').contains("Add to order");
    });
  });

  it("unsuccessfully if authentication failed", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      },
    });
    cy.get("#login").click();
    cy.get("#login-form").within(() => {
      cy.get("#login_email").type("user@mail.com");
      cy.get("#login_password").type("wrongpassword");
      cy.get("#submit").contains("Submit").click();
    });
    cy.get("#message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );

    cy.get("[data-cy=product-1]").within(() => {
      cy.get('button').should("not.exist");
    });
  });
});