export class SignUp {

    // Variables 




    // fin Variables
    

        //Renseigner le username
        typeUsername(){
            cy.get('#signInModalLabel').should('have.text', 'Sign up')
            cy.get('#sign-username').type('weuzinho96@gmail.com')
            cy.wait(2000)
        }
    
        //Renseigner le password
        typePassword(){
            cy.get('#sign-password').type('1234')
            cy.wait(2000)
        }
    
        // Cliquer sur le bouton sign Up
        clickSignUp(){
            cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]').click();
            cy.on('windows alert', (text) => {
                except(text).to.equal('Sign up successful')
            })
            cy.wait(3000)
    
        }
}