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
    cy.fixture('users.json').then((loginData)=>{
      loginPage.submitMobileNumber(loginData.mobile)
      loginPage.submitOtpForLogin();
      
  })

  })


  Cypress.Commands.add("applyFilters", (filters) => {
    if (filters.status) {
        cy.get('[data-test="status-filter"]').select(filters.status); // Example selector
    }
    
    if (filters.location) {
        cy.get('[data-test="location-filter"]').select(filters.location);
    }
    
    if (filters.priority) {
        cy.get('[data-test="priority-filter"]').select(filters.priority);
    }

    if (filters.tags) {
        filters.tags.forEach(tag => {
            cy.get('[data-test="tag-filter"]').type(tag).type('{enter}');
        });
    }

    if (filters.assignedUser) {
        cy.get('[data-test="assigned-user-filter"]').type(filters.assignedUser);
    }

    if (filters.dateRange) {
        cy.get('[data-test="start-date"]').type(filters.dateRange.start);
        cy.get('[data-test="end-date"]').type(filters.dateRange.end);
    }

    if (filters.ticketType) {
        cy.get('[data-test="ticket-type-filter"]').select(filters.ticketType);
    }

    if (filters.sortBy) {
        cy.get('[data-test="sort-by-filter"]').select(filters.sortBy);
    }

    if (filters.ticketSource) {
        cy.get('[data-test="ticket-source-filter"]').select(filters.ticketSource);
    }

    // Click the apply button after setting filters
    cy.get('[data-test="apply-filters"]').click();
});
