/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("App", () => {
  const PAGE_URL = `/junk`;

  it("Loads the app", () => {
    cy.visit(PAGE_URL);
    cy.findByRole("heading", { name: "404" }).should("be.visible");
  });
});
