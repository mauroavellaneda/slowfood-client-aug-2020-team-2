describe("User sing up", ()=> {
    beforeEach(() => {
        cy.visit("/");

    });
    it("successfully sign up with valid credentials", () => {
        cy.get("#signup").click();
        cy.get("#signup-form").within(() => {
            cy.get("#email").type("user@mail.com");
            cy.get("#password").type("password");
            cy.get("#confirm_password").type("password");
            cy.get('button').contains('Submit').click()
        });
        cy.get("#message").should("contain", "user@mail.com has been successfully registered");
    });
    it("unsuccessfully sign up with invalid credentials", () => {
        cy.get("#signup").click();
        cy.get("#signup-form").within(() => {
            cy.get("#email").type("user@mail.com");
            cy.get("#password").type("wrongpassword");
            cy.get("#confirm_password").type("wrongpassword");
            cy.get('button').contains('Submit').click()
        });
        cy.get("#message").should("contain", "Account has been not registered. Try again");

    });


})