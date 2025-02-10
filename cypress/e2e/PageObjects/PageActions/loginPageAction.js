let loginElementLocators=require("../PageElements/loginPageElements.json")

class loginPage
{

    submitMobileNumber(mobileNumber)
    {
        cy.get(loginElementLocators.loginPageLocators.mobileLocator).type(mobileNumber);
        cy.get(loginElementLocators.loginPageLocators.submitMobileOTP)
        .should('not.be.disabled')
        .should('not.be.hidden')
        .then(($btn)=>{
            if($btn.is(":enabled"))
            {
                cy.wrap($btn).click();
            }
            else{
                // button is disbled
            }
        })
    }
    submitOtpForLogin()
    {
        
        let otp=['4','5','6','7']
        
       // cy.get('[class="sc-VJcYb gbPZFI"] >input')
        cy.get(loginElementLocators.loginPageLocators.otpPlaceholder)
        .each(($el,index,$list)=>{
            cy.wrap($el).type(otp[index])
            .should('be.visible');

        })

        
        cy.get(loginElementLocators.loginPageLocators.submitOtp)
        .should('not.be.disabled')
        .should('not.be.hidden')
        .then(($btn)=>{
            if($btn.is(":enabled"))
            {
                cy.wrap($btn).click()
            }
            else{
                // button is disabled
            }
        })
        
    }
    
    
    
    

} export default loginPage