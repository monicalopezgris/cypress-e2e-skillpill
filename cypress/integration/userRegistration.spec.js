describe("User register", () => {
  it("Visit login page", () => {
    cy.visit("https://react-redux.realworld.io/#/register?_k=0tz7yv");
  });

  it("Sign Up new user", () => {
    cy.get("input[placeholder=Username]")
      .should("have.class", "form-control form-control-lg")
      .type(""); //Type new user name
    cy.get("input[placeholder=Email]")
      .should("have.class", "form-control form-control-lg")
      .type("@mail.com"); // Type new user email
    cy.get("input[placeholder=Password]")
      .should("have.class", "form-control form-control-lg")
      .type(""); // Type password
    cy.get("button").contains("Sign in").click();
  });
});
