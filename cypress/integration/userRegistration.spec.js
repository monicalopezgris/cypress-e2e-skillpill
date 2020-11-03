describe("User register", () => {
  it("Visit login page", () => {
    cy.visit("https://react-redux.realworld.io/#/register?_k=0tz7yv");
  });

  it("Sign Up new user", () => {

    cy.get("input[placeholder=Username]")
      .should("have.class", "form-control form-control-lg")
      .type(""); //Type new user name

    // Get input email and type username

    // Get input password and type username
    
    // Click sign in button
  });
});
