import Header from '../PageObjects/Header'

class HomePage {
constructor(){
    this.Header = new Header();
}
 visit(){
     cy.visit('https://www.cypress.io')
 }

gotoSignIn(){
const link = this.Header.getSignInButton();
link.click();

}

}
export default HomePage;
