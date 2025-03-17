
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
    get newTicketTextVerificationInput() { return cy.get(homePageLocators.homePageElementLocators.addNewTicketTextVerifyLocator)}
    get headerDropdownComponentInput() { return cy.get(homePageLocators.homePageElementLocators.headerDropdownLocator)}
    get headerDropdoemItemsComponentInput() { return  cy.get(homePageLocators.homePageElementLocators.headerDropdownItemsLocator)}




    searchCriteria()
    {
       
        this.searchInput.type("vipin test");
        this.findSpecificElementInput.each(($el)=>{         // locator -> [class='sc-iomxrj ehBufO']>tbody>tr:nth-child(2)>td:nth-child(2)
            if($el.text().includes('AL-'))
            {
                cy.log($el.text())
            }
        })
    }

    createNewTicketsCTA()
    {
        this.addingNewTicketInput.click();
        this.newTicketTextVerificationInput.should('contain',"Add New Tickets")
    }


    moreFilterActions()
    {
        this.moreFilterInput.click({force: true})
    }

    getStatusOfTickets()
    {
        

    const ExpectedDropdown=['Marketing','Customer Experience','Sales']
        // Code not Working
        this.headerDropdownComponentInput.eq(0).click()
        this.headerDropdoemItemsComponentInput
        .find('div')
        .each(($el,index)=>{
            if($el.text()==='Customer Experience')
            {
                cy.wrap($el).click()
          return false
            }  
            
        })  
        /////////
        ExpectedDropdown.forEach((item)=>{
        // Code not Working
        this.headerDropdownComponentInput.eq(0).click()
        this.headerDropdoemItemsComponentInput
        .find('div')
        .each(($el,index)=>{
            if($el.text()===item)
            {
                cy.wrap($el).click()
          return false
            }  
            
        })  
        })

        
    
    }

    handleDepartmentDropdown()
    {
        let userRoles=['SALES','Operations','Marketing','Customer Experience']
        cy.get('.department__indicators > .select').click()
        cy.get('.department__menu-list').each(($el)=>{
           // let getText=$el.text().trim();
            if(userRoles==='Marketing')
            {
                cy.wrap($el).click();
            }
        })
    }


   
} export default new homePage
    
    