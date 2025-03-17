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
        const filtersToApply=['Location','Complaint Group','Priority','Sort By','Status']
        
       
        this.filtersTagInput.contains('Location').each(($el,index,list)=>{
            let filterText=$el.text().trim();
            if(filtersToApply.includes(filterText))
            {
                cy.wrap($el).click({force:true})
            }
            if(filterText==='Location')
            {
                cy.get(".jpmeCn").contains("City")
                .click()
                 cy.get('.select__value-container').type('Bombay').wait(2000)

                 cy.get('.select__menu-list').find('div').then((cityElements) => {
                    cityElements.toArray().forEach((eleCity) => {
                      if (eleCity.innerText.trim() === 'Bombay') {
                        cy.wrap(eleCity).click(); // Click on the matching city
                      }
                    });
                  });

                  cy.get(".jpmeCn").contains("Micromarket")
                  .click({force:true})
                  cy.get('.select__value-container').type('Vile Parla').wait(2000)
                  cy.get('.select__menu-list').find('div').then((micromarketElements)=>{
                    micromarketElements.toArray().forEach((eleMicromarket)=>{
                        if(eleMicromarket.innerText.trim() === 'Vile Parla')
                        {
                            cy.wrap(eleMicromarket).click()   // Click on the matching micromarket
                        }
                    })

                  })
                
                  cy.get(".jpmeCn").contains("Micromarket")
                  .click({force:true})
                  cy.get('.select__value-container').type('Bombay House').wait(2000)
                  cy.get('.select__menu-list').find('div').then((residenceElements)=>{
                    residenceElements.toArray().forEach((eleResidence)=>{
                        if(eleResidence.innerText.trim()==='Bombay House')
                        {
                            cy.wrap(eleResidence).click();       // Click on the matching residence
                        }
                        
                    })
                  })
                  
                        

               
            }
        })

       
    }

} export default new FiltersPage

