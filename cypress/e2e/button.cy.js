describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
      //cy.get('#query-btn').click()
      //cy.get('#query-btn').should('contain', 'Button')
      cy.get('.query-btn').click().wait(4000)
      
      /**
      cy.get('.query-form').within(() => {
        cy.get('input:first').should('have.attr', 'placeholder', 'Email')
        cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    */

      })
      
    })
