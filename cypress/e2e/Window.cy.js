describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      
      cy.get('.home-list > :nth-child(4) > :nth-child(1)').click()
      cy.window().should('have.property', 'top')
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
      cy.title().should('include', 'Kitchen Sink')

    
    })
  })