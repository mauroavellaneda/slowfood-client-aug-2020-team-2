describe("User log in", ()=> {
    beforeEach(() => {
        cy.visit("/");

    });
    it("successfully login with valid credentials", () => {
        cy.get("#login").click();
        cy.get("#login-form").within(() => {
            cy.get("#login_email").type("user@mail.com");
            cy.get("#login_password").type("password");
            cy.get('button').contains('Submit').click()
        });
        cy.get("#message").should("contain", "Welcome, user@mail.com");
    });
    it("unsuccessfully login with invalid credentials", () => {
        cy.get("#login").click();
        cy.get("#login-form").within(() => {
            cy.get("#login_email").type("user@mail.com");
            cy.get("#login_password").type("wrongpassword");
            cy.get('button').contains('Submit').click()
        });
        cy.get("#message").should("contain", "Invalid login credentials. Try again.");

    });


})