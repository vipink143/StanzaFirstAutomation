/// <reference types= "cypress" />
import loginPage from "../PageObjects/PageActions/loginPageAction";

describe("Automate stanza web app",()=>{

   

    beforeEach("test",()=>{

        cy.session("saved user session",()=>{

            cy.visit("https://nucleus.stanzaliving.com/login");
        cy.url().should('contain','nucleus.stanzaliving.com');
        cy.fixture('StanzaFile').then((loginData)=>{

            let login=new loginPage();
            login.submitMobileNumber(loginData.mobile)
            login.submitOtpForLogin();
            
        })
        })
    })

   

    it("Login to stanza",()=>{

        cy.url().should('have.value','https://nucleus.stanzaliving.com/cx/support/ticketResolution')
        
    })
})