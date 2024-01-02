export class Home {


    // Variables
    chpSignup = '#signin2'
    chpLogin = '#login2'

    visit(){
        cy.log('Page d\'accueil de demo blase');
    }

    // Cliquer sur Sign Up
    SignUp(){
        cy.get(this.chpSignup).click()
    }

    // Cliquer sur login
    login(){
        cy.get(this.chpLogin).click()
    }



}
