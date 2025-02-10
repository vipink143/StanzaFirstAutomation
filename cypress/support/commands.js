// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "../e2e/PageObjects/PageActions/LoginPage";


// custom command for locator
Cypress.Commands.add('validateLocator', (locator) => {
    cy.get(locator).should('be.visible');
  })

  // custom command for click action
 Cypress.Commands.add('locatorForClick', (locator) => {
    cy.get(locator).should('be.visible').click();
  })

  Cypress.Commands.add('login',()=>{
    cy.fixture('StanzaFile').then((loginData)=>{
      loginPage.submitMobileNumber(loginData.mobile)
      loginPage.submitOtpForLogin();
      
  })

  })