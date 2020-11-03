describe("Fixtures", () => {
  before(() => {
    cy.visit("https://react-redux.realworld.io/");
  })
  it("should login, go to profile and load data", () => {
    cy.server()
    cy.fixture("fixtures.json").then(({userJson, articleJson, profileJson, tagsJson})=>{
      const email = userJson.user.email;
      const username = userJson.user.username;

      //Set the routes
      cy.route("POST", "api/users/login", userJson).as("user");
      cy.route("GET","api/articles/feed?limit=10&offset=0",articleJson).as("article");
      cy.route("GET", "api/tags", tagsJson).as("tags");

      //Do the action
      cy.get(".navbar")
        .contains("Sign in")
        .click();
      cy.get("input[placeholder=Email]")
        .type(email);
        cy.get("input[placeholder=Password]")
        .type('dummyPassword');
      cy.get(".btn").click({force:true});

      // Wait for response
      cy.wait("@user");
      cy.wait("@tags");

      // ...
      cy.route("GET", `api/profiles/${username}`, profileJson).as("profile");
      cy.route("GET", `api/articles?author=dummy&limit=5&offset=0`, articleJson).as("articles")

      cy.get(".navbar")
        .contains(username)
        .click();

      cy.wait("@profile")
      cy.wait("@articles")
    })
  })
})