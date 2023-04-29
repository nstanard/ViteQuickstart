/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("About Us", () => {
  const PAGE_URL = `/about-us`;

  it("Loads the about us page", () => {
    cy.visit(PAGE_URL);
    cy.findByRole("heading", { name: "About Us" }).should("be.visible");
    cy.findByText("This is an about us page").should("be.visible");
    cy.title().should("equal", "About Us");
  });
});
