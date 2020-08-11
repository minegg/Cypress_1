import HomePage from '../support/PageObjects/HomePage'

it('.type() - type into a DOM element', () => {
    const home = new  HomePage();
    home.visit();
    const signIn = home.gotoSignIn();
})