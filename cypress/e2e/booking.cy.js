describe("Booking: movie taken from admin", () => {
  beforeEach(() => {
    cy.loadSelectors();
  });

  it("Book seats for movie from admin", () => {
    cy.fixture("adminUsers").then((users) => {
      cy.getMovieFromAdmin(users.happy.email, users.happy.password, "Ведьмак");
    });

    cy.get("@movieTitle").then((movieTitle) => {
      cy.visit("/");

      cy.get("@sel").then((s) => {
        cy.get(s.mainPage.daysList).eq(1).click();

        cy.contains(s.mainPage.movieTitle, movieTitle).should("be.visible");

        cy.get(s.mainPage.seanceTime)
          .not(".acceptin-button-disabled")
          .first()
          .click();

        cy.takeSeat(2);
        cy.get(s.booking.acceptBtn).click();
        cy.get(s.booking.acceptBtn).click();
        cy.get(s.booking.checkTitleSelector).should("be.visible");
      });
    });
  });
});
