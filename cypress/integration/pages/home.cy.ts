/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("Home", () => {
  const PAGE_URL = `/`;

  it("Loads the home page by default", () => {
    cy.visit(PAGE_URL);
    cy.findByRole("heading", { name: "Home" }).should("be.visible");
    cy.findByText("This is a home page").should("be.visible");
    cy.title().should("equal", "Home");
  });
});
