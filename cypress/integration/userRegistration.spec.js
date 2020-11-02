describe("User register", () => {
  it("Visit login page", () => {
    cy.visit("https://react-redux.realworld.io/#/register?_k=0tz7yv");
  });

  it("Sign Up new user", () => {
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(0)
      .type(""); //put new user name
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(1)
      .type("@mail.com"); // put new user email
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(2)
      .type("testuser");
    cy.get("button").contains("Sign in").click();
  });
});
