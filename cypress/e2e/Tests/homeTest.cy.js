import HomePage from "../PageObjects/PageActions/HomePage";
import LoginPage from "../PageObjects/PageActions/LoginPage";

describe("Home page actions",()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env('prodUrl'))

        cy.fixture('users.json').then((users)=>{
            LoginPage.submitMobileNumber(users.validUser.mobile)
            LoginPage.submitOtpForLogin()

        })   
    })


    it("should search the data",()=>{
        HomePage.searchCriteria(); 
    })

    it.only("should add the new tickets",()=>{
        HomePage.createNewTicketsCTA();
    })

    it("should action through more filters",()=>{
        HomePage.moreFilterActions();
    })

    it("should handle the status dropdown",()=>{
        HomePage.getStatusOfTickets();
    })
    it.skip("Should change the dropdown value",()=>{
        HomePage.handleDepartmentDropdown()

    })
    
    afterEach(()=>{
        cy.get("[class='logout-link']").should('be.visible').click()
    })


})