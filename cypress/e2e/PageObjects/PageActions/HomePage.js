
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
    get findSpecificElementInput() { return cy.get(homePageLocators.homePageElementLocators.specificElementLocator)}




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



/*

        cy.get('table tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($td) => {
                    if ($td.text().includes('Vipin Test')) {
                        cy.log('Found Vipin Test in:', $row.text()); // Log the whole row
                    }
                });
            });
        });
        
        */
    


    }

    
   
} export default new homePage
    
    