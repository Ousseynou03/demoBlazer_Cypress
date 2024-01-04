import { Cart } from "../../pages/Cart"
import { Home } from "../../pages/Home"
import { Login } from "../../pages/Login"
import { PlaceOrder } from "../../pages/placeOrder"
import { Products } from "../../pages/products"

describe('Test de bout en bout de commande de produit', ()=> {


    const home = new Home()
    const login = new Login
    const products = new Products()
    const cart = new Cart()
    const placeOrder = new PlaceOrder()

    it('Commander un produit Samsung S6', ()=> {
        home.visit()
        home.login()
        login.typeUsernameLogin()
        login.typePasswordLogin()
        login.clickLogin()
        products.clickSamsungGalaxy()
        products.clickAddToCart()
        products.clickOnCart()
        cart.verifyTitle()
        cart.clickOnPlaceOrder()
        placeOrder.verifiyPlaceOrder()
        placeOrder.typeName()
        placeOrder.typeCountry()
        placeOrder.typeCity()
        placeOrder.typeCreditCard()
        placeOrder.typeMonth()
        placeOrder.typeYear()
        placeOrder.clickOnPurchase()


    })
})