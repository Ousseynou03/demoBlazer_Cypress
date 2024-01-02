import { Home } from "../../pages/Home"
import { Login } from "../../pages/Login"
import { SignUp } from "../../pages/SignUp"

describe('POM in Cypress', ()=> {

    const home = new Home()
    const login = new Login()
    const signUp = new SignUp()

    it('Accéder à la page d\'acueil', ()=> {
        home.visit()
    })

    it('Accéder à la page et s\'inscrire', ()=> {
        home.visit()
        home.SignUp()
        signUp.typeUsername()
        signUp.typePassword()
        signUp.clickSignUp()
    })

     it('Accéder à la page d\'accueil et se connecter Login', ()=> {
        home.visit()
        home.login()
        login.typeUsernameLogin()
        login.typePasswordLogin()
        login.clickLogin()
        
     })
})
