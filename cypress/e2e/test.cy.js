describe('Kitchen sink e2e Testing', () => {
    it('to test the functionality of its features', () => {
      cy.visit('/')
  
  // To click any link on the page
  
      cy.contains('should').click()
      cy.contains('type').click()
      cy.contains('get').click()
  
  
  // To type into the DOM element     
      
      cy.get('#email1').type('sabur.yinus@gmail.com').should('have.value','sabur.yinus@gmail.com')
      //cy.get('.action-email')
    //.type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#password1').type('unknown@2321')
    cy.get('#fullName1').type('Yinus Sabur Olamilekan').should('have.value','Yinus Sabur Olamilekan')
    cy.get('#description').type('to illustrate the power of API testing using cypress')
   // cy.get('#couponCode1').type('#63CglQV').submit()
   // cy.submit('.action-form > .btn')
  
  /**  cy.get('.action-form')
    .find('[type="text"]').type('HALFOFF')
  cy.get('.action-form').submit()
    .next().should('contain', 'Your form has been submitted!') */
  
    cy.get('.action-form')
    .find('[type="text"]').type('HALFOFF')
  cy.get('.action-form').submit()
    .next().should('contain', 'Your form has been submitted!')
  
  
  
    //cy.get('#fullName1').blur()
  // To focus on DOM element
   // cy.get('.action-focus').focus()
    //.should('have.class', 'focus')
    //.prev().should('have.attr', 'style', 'color: orange;')
  
  // To blur a DOM element
  cy.get('.action-blur').type('About to blur').blur()
  .should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')
  
  
  cy.get('.action-btn').click()
  
  // clicking in the center of the element is the default
  cy.get('#action-canvas').click()
  
  cy.get('#action-canvas').click('topLeft')
  cy.get('#action-canvas').click('top')
  cy.get('#action-canvas').click('topRight')
  cy.get('#action-canvas').click('left')
  cy.get('#action-canvas').click('right')
  cy.get('#action-canvas').click('bottomLeft')
  cy.get('#action-canvas').click('bottom')
  cy.get('#action-canvas').click('bottomRight')
  
  // .click() accepts a an x and y coordinate
  // that controls where the click occurs :)
  cy.get('#action-canvas')
    .click(80, 75)
  
  // click multiple elements by passing multiple: true
  //cy.get('.action-labels>.label').click({ multiple: true })
  cy.get('.action-labels > :nth-child(1)').click()
  
  // Ignore error checking prior to clicking
  cy.get('.action-opacity>.btn').click({ force: true })
  
  //To double click a DOM element, use the .dblclick() command.
  cy.get('.action-div').dblclick().should('not.be.visible')
  cy.get('.action-input-hidden').type('sample message').should('be.visible')
  
  //To right click a DOM element, use the .rightclick() command.
  cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
  cy.get('.rightclick-action-input-hidden').should('be.visible')
  
  
  //To select an option in a select, use the .select() command.
  
  // at first, no option should be selected
  cy.get('.action-select')
    .should('have.value', '--Select a fruit--')
  
  // Select option(s) with matching text content
  cy.get('.action-select').select('apples')
  // confirm the apples were selected
  // note that each value starts with "fr-" in our HTML
  cy.get('.action-select').should('have.value', 'fr-apples')
  //cy.get('.action-select').should('have.value', 'fr-oranges')
  
  
  cy.get('.action-select-multiple')
    .select(['apples', 'oranges', 'bananas'])
    // when getting multiple values, invoke "val" method first
    .invoke('val')
    .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  
  
  // Select option(s) with matching value
  cy.get('.action-select').select('fr-bananas')
    // can attach an assertion right away to the element
    .should('have.value', 'fr-bananas')
  
  cy.get('.action-select-multiple')
    .select(['fr-apples', 'fr-oranges', 'fr-bananas'])
    .invoke('val')
    .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
  // assert the selected values include oranges
  cy.get('.action-select-multiple')
    .invoke('val').should('include', 'fr-oranges')
  
  
  //To check a checkbox or radio, use the .check() command.
  
  // By default, .check() will check all
  // matching checkbox or radio elements in succession, one after another
  cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
  .check().should('be.checked')
  
  
  cy.get('.action-radios [type="radio"]').not('[disabled]')
  .check().should('be.checked')
  
  /**
  
  // .check() accepts a value argument
  cy.get('.action-radios [type="radio"]')
  .check('radio1').should('be.checked')
  
  // .check() accepts an array of values
  cy.get('.action-multiple-checkboxes [type="checkbox"]')
  .check(['checkbox1', 'checkbox2']).should('be.checked')
  
  // Ignore error checking prior to checking
  cy.get('.action-checkboxes [disabled]')
  .check({ force: true }).should('be.checked')
  
  cy.get('.action-radios [type="radio"]')
  .check('radio3', { force: true }).should('be.checked')
  
  */
  
  //.scrollIntoView()
  //To scroll an element into view, use the .scrollintoview() command.
  
  cy.get('#scroll-horizontal button')
    .should('not.be.visible')
  
  // scroll the button into view, as if the user had scrolled
  
  cy.get('#scroll-horizontal button').scrollIntoView()
    .should('be.visible')
  
  
  
  cy.get('#scroll-vertical button')
    .should('not.be.visible')
  
  // Cypress handles the scroll direction needed
  cy.get('#scroll-vertical button').scrollIntoView()
    .should('be.visible')
  
  cy.get('#scroll-both button')
    .should('not.be.visible')
  
  // Cypress knows to scroll to the right and down
  cy.get('#scroll-both button').scrollIntoView()
    .should('be.visible')
  
    //.check()
    //To check a checkbox or radio, use the .check() command.
    
    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')
    
    cy.get('.action-radios [type="radio"]').not('[disabled]')
      .check().should('be.checked')
    
    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check('radio1').should('be.checked')
    
    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(['checkbox1', 'checkbox2']).should('be.checked')
    
    // Ignore error checking prior to checking
    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')
    
    cy.get('.action-radios [type="radio"]')
  
    //.check('radio3', { force: true }).should('be.checked')
    //Checkbox one has value "checkbox1"
   // Checkbox two is disabled
   //Checkbox three has value "checkbox3"
    //Checkbox one has value "checkbox1"
    //Checkbox two has value "checkbox2"
    //Checkbox three has value "checkbox3"
    //Radio one has value "radio1"
    //Radio two has value "radio2". When checked, it will uncheck Radio one.
   // Radio three is disabled
  
   // .uncheck()
    //To uncheck a checkbox or radio, use the .uncheck() command.
    
    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]')
      .not('[disabled]')
      .uncheck().should('not.be.checked')
    
    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]')
      .check('checkbox1')
      .uncheck('checkbox1').should('not.be.checked')
    
    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]')
      .check(['checkbox1', 'checkbox3'])
      .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')
    
    // Ignore error checking prior to unchecking
    cy.get('.action-check [disabled]')
      .uncheck({ force: true }).should('not.be.checked')
  
    //.trigger()
   //To trigger an event on a DOM element, use the .trigger() command.
  
  cy.get('.trigger-input-range')
    .invoke('val', 25)
    .trigger('change')
    .get('input[type=range]').siblings('p')
    .should('have.text', '25')
  
  
      // To make Assertion 
  
      cy.url().should('include', '/commands/actions')
      
    
    
    })
  })