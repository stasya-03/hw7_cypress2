Cypress.Commands.add("loadSelectors", () => {
  return cy.fixture("selectors").as("sel");
});
