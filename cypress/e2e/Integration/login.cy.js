/// <reference types= "cypress" />
import loginPage from "../PageObjects/PageActions/LoginPage";

describe("Login user with valid and invalid credentials",()=>{

   

    beforeEach(()=>{

        

        cy.visit(Cypress.env('prodUrl'));
        cy.url().should('contain','nucleus.stanzaliving.com');
        
    

    })

    it("Login with valid user",()=>{

        cy.fixture('users.json').then((loginData)=>{

            
            loginPage.submitMobileNumber(loginData.validUser.mobile)
            loginPage.submitOtpForLogin();
            
        })
        

        cy.url().should('contain','https://nucleus.stanzaliving.com/cx/support/ticketResolution')
        
    })

    it("Login with invalid user",()=>{

        cy.fixture('users.json').then((loginData)=>{

            
            loginPage.submitMobileNumber(loginData.invalidUser.mobile)
            loginPage.errormsg()
            
            
        })
        
        
    })
})