describe("Login Form Fail Test", function() {
  it("Visits the Login", function() {
    cy.visit(`${Cypress.env("baseUrl")}/login`);

    cy.contains("Efficient operations at blazing fast speed");
    cy.contains("Welcome back. Please login to your account");

    cy.url().should("include", "/login");

    cy.get("#email").type("user@mashreq.com");
    cy.get("#password").type("passwor");
    cy.get("form")
      .contains("Login Securely")
      .click();

    cy.url().should("include", "/login");
  });
});
