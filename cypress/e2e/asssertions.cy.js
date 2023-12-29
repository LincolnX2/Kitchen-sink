describe('template spec', () => {
    it('passes', () => {
      cy.visit('/commands/assertions')

     //Implicit Assertions - To make an assertion about the current subject, use the .should() command.
     //To chain multiple assertions together, use the .and() command.
      
     cy.get('.assertion-table')
     .find('tbody tr:last').should('have.class', 'success')
     .find('td')
     .first()
     
   /**
     cy.get('.assertions-link')
     .should('have.class', 'active')
     .and('have.attr', 'href')
     .and('include', 'cypress.io') 
     
     */ 

    // checking the text of the  element in various ways
     .should('have.text', 'Column content')
     .should('contain', 'Column content')
     .should('have.html', 'Column content')


     //Explicit Assertions - To make a BDD assertion about a specified subject, use expect.
     // To make a TDD assertion about a specified subject, use assert.

     expect(true).to.be.true
     const o = { foo: 'bar' }
     expect(o).to.equal(o)
     expect(o).to.deep.equal({ foo: 'bar' })
     // matching text using regular expression
     expect('FooBar').to.match(/bar$/i)

     const person = {
        name: 'Joe',
        age: 20,
      }
      assert.isObject(person, 'value is object')


      })
      
    })