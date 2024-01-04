export class Cart {

    //Variables
    chpTitreProduit = '//*[@id="tbodyid"]/tr/td[2]'
    titreProduit = 'Samsung galaxy s6'
    chpPlaceOrder = '//*[@id="page-wrapper"]/div/div[2]/button'



    //Fin Variables

    // Vérifier que le produit dans le panier est bien Samsung galaxy s6
    verifyTitle(){
        cy.xpath(this.chpTitreProduit).should('have.text', this.titreProduit)
        cy.wait(2000)
    }

    // Cliquer sur Place Order
    clickOnPlaceOrder(){
        cy.xpath(this.chpPlaceOrder).click()
    }
}