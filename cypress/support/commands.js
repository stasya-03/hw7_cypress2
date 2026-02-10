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

Cypress.Commands.add("takeSeat", (count) => {
  cy.get("@sel").then((s) => {
    cy.get(s.booking.chair)
      .not(s.booking.chairTaken)
      .not(s.booking.chairDisabled)
      .then((chairs) => {
        for (let i = 0; i < count; i += 1) {
          cy.wrap(chairs[i]).click();
        }
      });
  });
});

Cypress.Commands.add("getMovieFromAdmin", (email, password, movieName = "Ведьмак") => {
    cy.visit("/admin");
    cy.loginAdmin(email, password);
    cy.contains("Управление залами").should("be.visible");
    cy.get("@sel").then((s) => {
    cy.contains(s.admin.movieTitle, movieName).then((movie) => {
      cy.wrap(movie.text().trim()).as("movieTitle");
    });
  });
  },
);
