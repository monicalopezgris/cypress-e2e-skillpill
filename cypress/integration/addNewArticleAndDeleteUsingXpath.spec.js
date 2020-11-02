describe("Add new Article and delete", () => {
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

  it("Create new Article, check that it has been created and then delete ", () => {
    cy.xpath("//a[contains(text(),'New Post')]").click();
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[1]/input[1]"
    )
      .type("My Test Article for the skillpill")
      .should("have.value", "My Test Article for the skillpill"); //article name
    cy.xpath(
      "//body/div[@id='main']/div/div[@class='editor-page']/div[@class='container page']/div[@class='row']/div[@class='col-md-10 offset-md-1 col-xs-12']/form/fieldset/fieldset[2]/input[1]"
    ).type("Using the xpath plugin"); // waht is the article about
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[3]/textarea[1]"
    ).type("Install xpath with Yar: yarn add cypress-xpath --dev"); //article
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/fieldset[1]/fieldset[4]/input[1]"
    ).type("xpath"); //tag
    cy.xpath("//button[@type='button']").click();
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h1[1]"
    ).contains("My Test Article for the skillpill");
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/form[1]/div[1]/textarea[1]"
    ).type("Very useful");
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/form[1]/div[2]/button[1]"
    ).click();
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/p[1]"
    ).contains("Very useful");
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[4]/a[1]"
    ).click();
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]/h1[1]"
    )
      .contains("My Test Article for the skillpill")
      .click();
    cy.xpath("//button[@class='btn btn-outline-danger btn-sm']")
      .contains("Delete Article")
      .click();
    cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]"
    ).contains("No articles are here... yet.");
  });
});
