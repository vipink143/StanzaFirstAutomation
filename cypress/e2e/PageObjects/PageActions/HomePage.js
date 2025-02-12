
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

    createNewTickets()
    {
        this.addingNewTicketInput.click();
        this.newTicketTextVerification.should('contain',"Add New Tickets")
    }


    moreFilerActions()
    {
        this.moreFilterInput.click({force: true})
    }

    getStatusOfTickets()
    {
        // this.statusDropdownInput.contains('Status').click({force: true})
        // return this
    //    cy.contains('Status').click({force: true})
    //    cy.get(".select__value-container").type("open").check()

    const ExpectedDropdown=['Marketing','Customer Experience']
        // Code not Working
    cy.get("[class='select department__control css-yxr2ga-control']>div").eq(0).click()
        cy.get(".department__menu-list")
        //.find('div')
        .each(($el,index)=>{
            if($el.text()==='Marketing')
            {
                cy.wrap($el).click()
          return false
            }

           
        })

   

       
       
    }
    
   
} export default new homePage
    
    