export class Products {

    // Variables
    chpSamsungGalaxy = '//*[@id="tbodyid"]/div[1]/div/div/h4/a"'
    msgSamsung = "Samsung galaxy s6"
    chpMsgSamsung = '//*[@id="tbodyid"]/h2'
    chpAddToCart = '//*[@id="tbodyid"]/div[2]/div/a'
    msgAlertAddToCart = 'Product added.'
    chpMenuCart = '#cartur'


    // Fin variables


    //Cliquer sur le produit Samsung galaxy s6
    clickSamsungGalaxy(){
        cy.xpath(this.chpSamsungGalaxy).click();
        const checkMsgSamsung = cy.get(this.chpMsgSamsung)
        checkMsgSamsung.should('have.text', this.msgSamsung)
        cy.wait(2000)
    }


    // Cliquer sur add to cart
    clickAddToCart(){
        cy.xpath(this.chpAddToCart).click()
        cy.on('window:alert', (text) => {
            expect(text).to.equal(this.msgAlertAddToCart)
        })
        cy.wait(2000)
    }


    // Cliquer sur le menu cart
    clickOnCart(){
        cy.get('#cartur').click()
        cy.wait(2000)
    }

    

}