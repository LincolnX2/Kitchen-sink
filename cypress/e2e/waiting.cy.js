describe('template spec', () => {
    it('passes', () => {
      cy.visit('/commands/waiting')

      cy.get(':nth-child(1) > .form-control').type('Wait 1000ms after typing').wait(1000)
      cy.get('.wait-input2').type('Wait 1500ms after typing')
      cy.wait(1500)
      cy.get('.wait-input3').type('Wait 2000ms after typing')
      cy.wait(2000)
      cy.get('.network-btn').rightclick().click()
    

      })
      
    })

