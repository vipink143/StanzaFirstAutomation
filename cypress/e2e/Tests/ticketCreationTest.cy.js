import TicketCreationPage from "../PageObjects/PageActions/TicketCreationPage";
import HomePage from "../PageObjects/PageActions/HomePage";

describe ("Should create a new Ticket",()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env("prodUrl")) 
        cy.login();
        HomePage.createNewTicketsCTA()

    })


    it("Should create ticket for test users",()=>{


       TicketCreationPage.enterCityName();
       TicketCreationPage.enterResidenceName();
       TicketCreationPage.enterOnBehalfValue();
       TicketCreationPage.enterComplaintGroupName();
       TicketCreationPage.enterCategoryName();
       TicketCreationPage.enterSubCategoryName();
       TicketCreationPage.enterDescriptionValue();
       TicketCreationPage.uploadImage();
       TicketCreationPage.confirmPolicy();
       TicketCreationPage.submitButton();
        
    })

    it("Should be close this page",()=>{

        TicketCreationPage.closeButton();
    })



})