/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

const PAGE_URL = `/`;

describe("App", () => {
  it("Loads the app", () => {
    cy.visit(PAGE_URL);

    cy.findByRole("heading", { name: "Hi!" }).should("be.visible");
  });
});
