const filtersPageLocators = require("../PageElements/FiltersPageElements.json")


class FiltersPage
{
    get closeButtonInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.closeButtonLocator) }
    get resetButtonInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.resetButtonLocator)}
    get filtersTagInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.filtersTagLocator)}
    get locationDropdownInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.locationDropDownLocator)}
    get locationPlaceholderInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.locationPlaceholderLocator)}
    get locationListDropdownInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.locationListDropdownLocator)}
    get locationApplyFilterBtnInput() { return cy.get(filtersPageLocators.filtersPageElementLocators.locationApplyFilterBtnLocator)}

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
        const filtersToApply=['Location','Complaint Group','Priority','Sort By','Status']
        
       
        this.filtersTagInput.contains('Location').each(($el,index,list)=>{
            let filterText=$el.text().trim();
            if(filtersToApply.includes(filterText))
            {
                cy.wrap($el).click({force:true})
            }
            if(filterText==='Location')
            {
                this.locationDropdownInput.contains("City")
                .click()
                 this.locationPlaceholderInput.type('Bombay').wait(2000)
                 this.locationListDropdownInput.find('div').then((cityElements) => {
                    cityElements.toArray().forEach((eleCity) => {
                      if (eleCity.innerText.trim() === 'Bombay') {
                        cy.wrap(eleCity).click(); // Click on the matching city
                      }
                    });
                  });

                  this.locationDropdownInput.contains("Micromarket")
                  .click({force:true})
                  this.locationPlaceholderInput.type('Vile Parla').wait(2000)
                  this.locationListDropdownInput.find('div').then((micromarketElements)=>{
                    micromarketElements.toArray().forEach((eleMicromarket)=>{
                        if(eleMicromarket.innerText.trim() === 'Vile Parla')
                        {
                            cy.wrap(eleMicromarket).click()   // Click on the matching micromarket
                        }
                    })

                  })
                
                  this.locationDropdownInput.contains("Residence")
                  .click({force:true})
                  this.locationPlaceholderInput.type('Bombay House').wait(2000)
                  this.locationListDropdownInput.find('div').then((residenceElements)=>{
                    residenceElements.toArray().forEach((eleResidence)=>{
                        if(eleResidence.innerText.trim() === 'Bombay House')
                        {
                            cy.wrap(eleResidence).click();       // Click on the matching residence
                        }
                        
                    })
                  })
            }
        })

        this.locationApplyFilterBtnInput.contains('APPLY FILTERS').should('be.visible').click()

       
    }

} export default new FiltersPage

