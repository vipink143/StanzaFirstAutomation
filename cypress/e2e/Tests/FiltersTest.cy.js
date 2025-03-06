import FiltersPage from "../PageObjects/PageActions/FiltersPage";
import HomePage from "../PageObjects/PageActions/HomePage";

describe("Test the different filters and buttons",()=>{

    beforeEach(()=>{

        cy.visit(Cypress.env("prodUrl"));
        cy.login();
        HomePage.moreFilerActions()


    })

    it("Should close the page",()=>{

        FiltersPage.closebutton()

    })

    it("Should reset the data",()=>{

        FiltersPage.resetButton()
        
    })

    it.only("Should applied the filters and get the data",()=>{

        FiltersPage.statusFilterApplicable();
        
    })
})