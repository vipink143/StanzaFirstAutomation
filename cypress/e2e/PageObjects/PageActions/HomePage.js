
let homePageLocators= require("../PageElements/HomePageElements.json")

class homePage 
{

    get searchInput() { return cy.get(homePageLocators.homePageElementLocators.searchLocator)}
    get statusDropdownInput() { return cy.get(homePageLocators.homePageElementLocators.dropDownLocator)}
    get categoryDropdownInput() { return cy.get(homePageLocators.homePageElementLocators.dropDownLocator)}
    get moreFilterInput() { return cy.get(homePageLocators.homePageElementLocators.moreFilterLocator)}
    get addingNewTicketInput() { return cy.get(homePageLocators.homePageElementLocators.addNewTicketLocator)}
    get findRowNumberInput() { return cy.get(homePageLocators.homePageElementLocators.rowItemLocator)}
    get findColumnNumberInput() { return cy.get(homePageLocators.homePageElementLocators.columnItemLocator)}




    searchCriteria()
    {
        this.searchInput.type("vipin test");

        this.findRowNumberInput.eq(0).each(($row,index,rows)=>{
            cy.wrap($row).within(()=>{
                this.findColumnNumberInput.each(($residentName)=>{
                    cy.log('Resident Name :',$residentName.text().trim())

                })
            

                })
            })
        
    


    }

    
   
} export default new homePage
    
    