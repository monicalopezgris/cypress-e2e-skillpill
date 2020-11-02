describe("User register", () => {
  it("Log In User", () => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=xgdaby");
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(0)
      .type("testuser2223@mail.com");
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(1)
      .type("testuser");
    cy.get("button").contains("Sign in").click();
  });

  it("Add Article to favorite articles list and Delete article", () => {
    cy.get("div > div > a").contains("dragons").click();
    cy.get("div > a > h1").contains("How to train your dragon");
    cy.get("button")
      .should("have.class", "btn btn-sm btn-outline-primary")
      .contains("2")
      .click();

    cy.get("nav > div > ul > li")
      .should("have.class", "nav-item")
      .eq(3)
      .click();
    cy.get("div > div > ul > li").eq(1).click();
    cy.get("div > a > h1").contains("How to train your dragon");
    cy.get("button")
      .should("have.class", "btn btn-sm btn-primary")
      .contains("3")
      .click();
    cy.reload();
    cy.get("div")
      .should("have.class", "article-preview")
      .contains("No articles are here... yet.");
  });
});
