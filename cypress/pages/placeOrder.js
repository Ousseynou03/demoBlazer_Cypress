export class placeOrder {


    // Variables
    chpPlaceOrder = '#orderModalLabel'
    textPlaceOrder = 'Place order'
    chpName = '#name'
    chpCountry = '#country'
    chpCity = '#city'
    chpCreditCard = '#card'
    chpMonth = '#month'
    chpYear = '#year'
    

    //Fin Variables

    // Vérifier qu'il s'agit bien du formulaire de palce order
    verifiyPlaceOrder(){
        cy.get(this.chpPlaceOrder)

    }

}