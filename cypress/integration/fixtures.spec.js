describe('Fixtures', () => {

  it('should login and go to profile', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.server()
    cy.fixture('users.json').then(({userJson, articleJson, profileJson, tagsJson})=>{
      const email = userJson.user.email;
      const username = userJson.user.username;
      cy.route('POST', 'api/users/login', userJson).as('user');
      cy.route('GET','api/articles/feed?limit=10&offset=0',articleJson).as('article');
      cy.route('GET', 'api/tags', tagsJson).as('tags');

      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type(email);
      cy.get(':nth-child(2) > .form-control').type('asassa');
      cy.get('.btn').click({force:true});

      cy.wait('@user');
      cy.wait('@tags');

      cy.route('GET', `api/profiles/${username}`, profileJson).as('profile');
      cy.route('GET', `api/articles?author=dummy&limit=5&offset=0`, articleJson).as('articles')

      cy.get(':nth-child(4) > .nav-link').click();

      cy.wait('@profile')
      cy.wait('@articles')
    })
  })
})