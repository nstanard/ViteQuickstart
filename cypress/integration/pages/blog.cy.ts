/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("Blog", () => {
  const PAGE_URL = `/`;

  it("Loads the blog page", () => {
    cy.visit(PAGE_URL);
    cy.findByRole("heading", { name: "Home" }).should("be.visible");
    cy.findByText("This is a home page").should("be.visible");
    cy.title().should("equal", "Home");
  });
});
