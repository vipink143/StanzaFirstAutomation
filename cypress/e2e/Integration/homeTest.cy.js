import HomePage from "../PageObjects/PageActions/HomePage";
import LoginPage from "../PageObjects/PageActions/LoginPage";

describe("Home page actions",()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env('prodUrl'))

        cy.fixture('StanzaFile').then((users)=>{
            LoginPage.submitMobileNumber(users.validUser.mobile)
            LoginPage.submitOtpForLogin()

        })   
    })


    it("Home page details",()=>{
        HomePage.searchCriteria();

     
    })
})