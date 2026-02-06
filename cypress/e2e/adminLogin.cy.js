describe("Admin login", () => {
  beforeEach(() => {
    cy.loadSelectors();
    cy.visit("/admin");
  });

  it("Successfull login", () => {
    cy.fixture("adminUsers").then((users) => {
      cy.loginAdmin(users.happy.email, users.happy.password);
      cy.contains("Управление залами").should("be.visible");
    });
  });

  it("Unsuccessfyll ligin with wrong email", () => {
    cy.fixture("adminUsers").then((users) => {
      cy.loginAdmin(users.wrongEmail.email, users.wrongEmail.password);
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  });

  it("Unsuccessfyll ligin with wrong password", () => {
    cy.fixture("adminUsers").then((users) => {
      cy.loginAdmin(users.wrongPassword.email, users.wrongPassword.password);
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  });
});
