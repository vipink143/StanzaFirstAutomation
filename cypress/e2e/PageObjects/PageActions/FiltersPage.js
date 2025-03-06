const filtersPageLocators = require("../PageElements/FiltersPageElements.json")


class FiltersPage
{
    get closeButtonInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.closeButtonLocator) }
    get resetButtonInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.resetButtonLocator)}
    get filtersTagInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.filtersTagLocator)}

    closebutton()
    {
        this.closeButtonInput
        .should('not.be.disabled')
        .then(($btn)=>{
            if($btn.is(":enabled"))
            {
                cy.wrap($btn).click()
            }
            else{
                // button is disabled
            }
        })
        
        return this
    }

    resetButton()
    {
        this.resetButtonInput
        .should('not.be.disabled')
        .then(($btn)=>{
            if($btn.is(":enabled"))
            {
                cy.wrap($btn).click()
            }
            else{
                //button is disabled
            }
        })
        return this
    }

    statusFilterApplicable()
    {
        const status=['Location','Complaint Group','Priority','Sort By','Status']
        
       
        this.filtersTagInput.each(($el,index,list)=>{
            if($el=='Location')
            {
                cy.wrap($el).click()
            }

        })
    }

} export default new FiltersPage