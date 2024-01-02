export class Login {


    // Variables 
    btnLogin = '//*[@id="logInModal"]/div/div/div[3]/button[2]' 
    username = 'weuzinho96@gmail.com'
    password = '1234'
    msgBienvenu = 'Welcome weuzinho96@gmail.com'
    verifyLogIn = '#logInModalLabel'
    chpUsername = '#loginusername'
    chpPassword = '#loginpassword'


    // Fin Variables



    // Renseigner le username login
    typeUsernameLogin(){
        cy.get(this.verifyLogIn).should('have.text', 'Log in')
        cy.get(this.chpUsername).type(this.username)
        cy.wait(2000)
    }

    // Renseigner le password login
    typePasswordLogin(){
        cy.get(this.chpPassword).type(this.password)
    }

    // Cliquer sur le bouton login
    clickLogin(){
        cy.xpath(this.btnLogin).click()
        cy.on('message de bienvenue', (text) => {
            except(text).to.equal(this.msgBienvenu)
        })
        cy.wait(5000)
    }
}