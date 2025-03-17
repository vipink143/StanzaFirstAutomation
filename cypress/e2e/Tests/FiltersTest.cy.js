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

    it("Should applied the location filters and get the data",()=>{

        FiltersPage.locationFilterApplicable();
        
    })

    it("Should applied the sort by filter and get the data",()=>{

        FiltersPage.sortByFilterApplicable();
    })

    it("Should applied the location and sort by filters and get the data",()=>{


        FiltersPage.locationFilterApplicable();
        HomePage.moreFilerActions()
        FiltersPage.sortByFilterApplicable();
    })


})