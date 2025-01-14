
describe("Automate stanza website",()=>{

    it("New website testing",()=>{

        cy.visit(Cypress.env("prodUrl"));
        cy.wait(5000)

        cy.scrollTo('bottom')
    })
})