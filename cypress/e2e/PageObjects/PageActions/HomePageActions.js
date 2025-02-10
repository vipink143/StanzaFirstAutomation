import loginPage from "./loginPageAction"


let homePageElementLocators= require("../PageElements/HomePageElements.json")

class homePage 
{

    homePageActions()
    {
        let expectedText="Tickets";
        
    cy.wait(3000).get(homePageElementLocators.homePageLocators.verifyTextOnDashboard).then((verifyText)=>{
        let actualText=verifyText.text();
        expect(actualText).to.equal(expectedText);
    })
    cy.get(homePageElementLocators.homePageLocators.addTicketCreationButton)
    .should('not.be.hidden')
    .click();
    //cy.get("[class='sc-chPdSV sc-kpOJdX eINKxn action-btn close']").click({force:true})
    
    }

    close()
    {
        cy.get("[class='sc-chPdSV sc-kpOJdX eINKxn action-btn close']").click({force:true})
    }
} export default homePage
    
    