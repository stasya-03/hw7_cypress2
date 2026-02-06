describe("Correct display of the main page", () => {
  beforeEach(() => {
    cy.loadSelectors();
    cy.visit("/");
  });

  it("Correct display of the title, movies, seances and days", () => {
    cy.get("@sel").then((selectors) => {
      cy.get(selectors.mainPage.header)
        .should("be.visible")
        .and("contain.text", "Идёмвкино");
      cy.get(selectors.mainPage.daysList).should("have.length", 7);
      cy.get(selectors.mainPage.moviesList).should("be.visible");
      cy.get(selectors.mainPage.movieCard)
        .should("have.length", 4)
        .should("be.visible");
      cy.get(selectors.mainPage.moviePoster).should("be.visible");
    });
  });
});
