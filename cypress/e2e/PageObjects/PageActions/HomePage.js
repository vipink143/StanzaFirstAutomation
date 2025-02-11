
let homePageLocators= require("../PageElements/HomePageElements.json")

class homePage 
{

    get searchInput() { return cy.get(homePageLocators.homePageElementLocators.searchLocator)}
    get statusDropdownInput() { return cy.get(homePageLocators.homePageElementLocators.statusDropDownLocator)}
    get categoryDropdownInput() { return cy.get(homePageLocators.homePageElementLocators.dropDownLocator)}
    get moreFilterInput() { return cy.get(homePageLocators.homePageElementLocators.moreFilterLocator)}
    get addingNewTicketInput() { return cy.get(homePageLocators.homePageElementLocators.addNewTicketLocator)}
    get findRowNumberInput() { return cy.get(homePageLocators.homePageElementLocators.rowItemLocator)}
    get findColumnNumberInput() { return cy.get(homePageLocators.homePageElementLocators.columnItemLocator)}
    get findSpecificElementInput() { return cy.get(homePageLocators.homePageElementLocators.specificElementLocator)}
    get newTicketTextVerification() { return cy.get(homePageLocators.homePageElementLocators.addNewTicketTextVerifyLocator)}




    searchCriteria()
    {
        cy.wait(3000)
        this.searchInput.type("vipin test");
        this.findSpecificElementInput.each(($el)=>{         // locator -> [class='sc-iomxrj ehBufO']>tbody>tr:nth-child(2)>td:nth-child(2)
            if($el.text().includes('AL-'))
            {
                cy.log($el.text())
            }
        })
    }

    getStatusOfTickets()
    {
        this.statusDropdownInput.contains('Status').click()
        return this
    }

    createNewTickets()
    {
        this.addingNewTicketInput.click();
        this.newTicketTextVerification.should('contain',"Add New Tickets")
    }


    moreFilerActions()
    {
        this.moreFilterInput.click({force: true})
    }
    
   
} export default new homePage
    
    