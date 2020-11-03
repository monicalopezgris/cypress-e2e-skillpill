describe("User register", () => {
  before(() => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=xgdaby");
  })
  it("Log In User", () => { 
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
    cy.get(".tag-list").contains("dragons").click();
    cy.wait(2000)
    cy.get(".article-preview")
      .contains(".article-meta", "micha")
      .parent()
      .should("contain", "How to train your dragon")
      .within(()=>{
        cy.get("button").click();
      })
    cy.get('.navbar')
      .contains('testUser2223')
      .click();
    cy.get(".articles-toggle")
      .contains("Favorited Articles")
      .click();
    cy.get(".article-preview")
      .contains("How to train your dragon")
      .parent()
      .within(()=>{
        cy.get("button").click();
      });
    cy.reload();
    cy.get("div")
      .should("have.class", "article-preview")
      .contains("No articles are here... yet.");
  });
});
