describe("Login Form Empty Input Fail Test", function() {
  it("if user enters empty  input and try to login than show input errors", function() {
    cy.visit(`${Cypress.env("baseUrl")}/login`);

    cy.contains("Efficient operations at blazing fast speed");
    cy.contains("Welcome back. Please login to your account");

    cy.url().should("include", "/login");

    cy.get("input[type=text]")
      .invoke("val","")
      .trigger("change");
    cy.get("input[type=password]")
      .invoke("val","")
      .trigger("change");
    cy.get("form")
      .contains("Login Securely")
      .click();

    cy.url().should("include", "/login");
  });
});
