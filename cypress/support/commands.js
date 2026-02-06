Cypress.Commands.add("loadSelectors", () => {
  return cy.fixture("selectors").as("sel");
});

Cypress.Commands.add("loginAdmin", (email, password) => {
  cy.get("@sel").then((selectors) => {
    cy.get(selectors.admin.email).type(email);
    cy.get(selectors.admin.password).type(password);
    cy.contains("Авторизоваться").click();
  });
});
