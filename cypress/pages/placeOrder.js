export class PlaceOrder {


    // Variables
    chpPlaceOrder = '#orderModalLabel'
    textPlaceOrder = 'Place order'
    chpName = '#name'
    chpCountry = '#country'
    chpCity = '#city'
    chpCreditCard = '#card'
    chpMonth = '#month'
    chpYear = '#year'
    chpPurchase = '//*[@id="orderModal"]/div/div/div[3]/button[2]'
    chpOkay = '/html/body/div[10]/div[7]/div/button'


    //Fin Variables

    // Vérifier qu'il s'agit bien du formulaire de palce order
    verifiyPlaceOrder(){
        cy.get(this.chpPlaceOrder)
    }

    // Saisir le name
    typeName(){
        cy.get(this.chpName).type('Ousseynou Dione')
        cy.wait(1000)
    }

    // Saisir le country
    typeCountry(){
        cy.get(this.chpCountry).type('Maroc')
        cy.wait(1000)
    }

    // Saisir le City
    typeCity(){
        cy.get(this.chpCity).type('Casablanca')
        cy.wait(1000)
    }

    // Saisir le credit card
    typeCreditCard(){
        cy.get(this.chpCreditCard).type('33567886532235')
        cy.wait(1000)
    }

    // Saisir Month
    typeMonth(){
        cy.get(this.chpMonth).type('Janvier')
        cy.wait(1000)
    }

    //Saisir Year
    typeYear(){
        cy.get(this.chpYear).type('2024')
    }

    // Cliquer sur purchase
    clickOnPurchase(){
        cy.xpath(this.chpPurchase).click()
        cy.xpath(this.chpOkay).click()
        cy.wait(1000)

    }

}