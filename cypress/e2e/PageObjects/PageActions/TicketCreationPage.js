
const ticketCreationLocators= require("../PageElements/TicketCreationElements.json")

class TicketCreationPage
{

    get cityDropdownInput() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get cityDropdownInputValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get residenceDropdownInput() {return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get residenceDropdownInputValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get onBehalfDropdownInput() {return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get onBehalfDropdownInputValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get complaintGroupDropdownInput() {return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get complaintGroupDropdownInputValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get categoryDropdownInput() {return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get categoryDropdownInputValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get subCategoryDropdownInput() {return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownInputLocator)}
    get subCategoryDropdownInputValue () { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DropdownValueLocator)}
    get descriptionValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.DescriptionValueLocator)}
    get imageUploadValue() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.ImageUploadLocator)}
    get checkBoxInput() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.SelectCheckBoxLocator)}
    get ticketSubmitInput() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.TicketSubmitButtonLocator)}
    get closeButtonInput() { return cy.get(ticketCreationLocators.ticketCreationElementLocators.CloseButtonLocator)}


    enterCityName()
    {
        this.cityDropdownInput.contains('City').click();
        this.cityDropdownInputValue.type("Bombay").type('{Enter}')
    }

    enterResidenceName()
    {
        this.residenceDropdownInput.contains('Residence').click()
       
        this.residenceDropdownInputValue.type("Bombay House").type('{Enter}')

    }

    enterOnBehalfValue()
    
    {
        this.onBehalfDropdownInput.contains('On Behalf Of').click();
        this.onBehalfDropdownInputValue.type("Self").type('{Enter}')
    }

    enterComplaintGroupName()
    {
        this.complaintGroupDropdownInput.contains('Complaint Group').click();
        this.complaintGroupDropdownInputValue.type("App Issues").type('{Enter}')

    }
    enterCategoryName()
    {
        this.categoryDropdownInput.contains('Category').click();
        this.categoryDropdownInputValue.type("Not working").type('{Enter}')
        
    }
    enterSubCategoryName()
    {
        this.subCategoryDropdownInput.contains('Sub Category').click();
        this.subCategoryDropdownInputValue.type("Others").type('{Enter}')
        
    }

    enterDescriptionValue()
    {
        this.descriptionValue.type("App is running slow")
    }
    uploadImage()
    {
        this.imageUploadValue.selectFile("IMG_2669.jpg")
    }

    confirmPolicy(value) {

        
         this.checkBoxInput.should('not.be.checked');
         this.checkBoxInput.check({force:true})
       
    }

    submitButton()
    {
        this.ticketSubmitInput.click()
    }
    closeButton()
    {
        this.closeButtonInput.click()

    }



} export default new TicketCreationPage