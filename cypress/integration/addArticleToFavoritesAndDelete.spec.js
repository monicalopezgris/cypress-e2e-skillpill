describe("User register", () => {
  before(() => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=xgdaby");
  })
  it("Log In User", () => { 
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(0)
      .type(""); //Add the email
    cy.get("input")
      .should("have.class", "form-control form-control-lg")
      .eq(1)
      .type(""); // Add the password
    cy.get("button").contains("Sign in").click();
  });

  it("Add Article to favorite articles list and Delete article", () => {

    // Get the tag "Dragons" from the tag list.

    cy.wait(2000) // Just for the exercice, bad practice!

    // Get article "How to train your dragon" by author "micha" and add to favorites (click fav button)
    
    // Get open the profile link on the navbar
    
    //Click on "Favorited Articles"

    // Get the article "How to train your dragon" and delete from favorites (click fav button)
    
    cy.reload();
    cy.get("div")
      .should("have.class", "article-preview")
      .contains("No articles are here... yet.");
  });
});
