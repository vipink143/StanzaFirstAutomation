
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

        cy.get('table tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($td) => {
                    if ($td.text().includes('Vipin Test')) {
                        cy.log('Found Vipin Test in:', $row.text()); // Log the whole row
                    }
                });
            });
        });
        
    


    }

    
   
} export default new homePage
    
    