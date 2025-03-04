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

    it("should add the new tickets",()=>{
        HomePage.createNewTicketsCTA();
    })

    it("should action through more filters",()=>{
        HomePage.moreFilerActions();
    })

    it.skip("should handle the status dropdown",()=>{
        HomePage.getStatusOfTickets();
    })



})