import Header from '../PageObjects/Header'

class HomePage {
    constructor(){
        this.Header = new Header();
    }
    visit(){
        cy.visit('https://www.alza.cz')
    }

    gotoSignIn(){
        const link = this.Header.getSignInButton();
        link.click();
        return this
    }

    insertCredentials(userName, password){
        cy.get('#i_name')
            .click()
            .clear()
            .type(userName)
            .should('have.value', userName)
        
        cy.get('#i_psw')
            .click()
            .clear()
            .type(password)
            .should('have.value', password)
        
        return this;
    }

}
export default HomePage;
