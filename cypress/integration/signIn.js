import HomePage from '../support/PageObjects/HomePage'

it('Sign in with correct user details', () => {
    const home = new  HomePage();
    home.visit();
    const signIn = home.gotoSignIn();
    signIn
    .insertCredentials(Cypress.env('userName'),Cypress.env('password'))

})