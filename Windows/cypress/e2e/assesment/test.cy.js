describe('Basic Calculator Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5501/Windows/index.html')
    })
  
    it('should display "" by default', () => {
      cy.get('#result').should('have.text', '')
    })
  
    it('should append numbers to display', () => {
      cy.get('#one').click()
      cy.get('#two').click()
      cy.get('#three').click()
      cy.get('#result').should('have.text', '123')
    })
  
    it('should handle decimal points', () => {
      cy.get('#one').click()
      cy.get('#decimalPoint').click()
      cy.get('#two').click()
      cy.get('#result').should('have.text', '1.2')
    })
  
    it('should perform addition', () => {
      cy.get('#one').click()
      cy.get('#plus').click()
      cy.get('#two').click()
      cy.get('#equal').click()
      cy.get('#result').should('have.text', '3')
    })
  
    it('should perform subtraction', () => {
      cy.get('#five').click()
      cy.get('#minus').click()
      cy.get('#three').click()
      cy.get('#equal').click()
      cy.get('#result').should('have.text', '2')
    })
  
    it('should perform multiplication', () => {
      cy.get('#four').click()
      cy.get('#multiply').click()
      cy.get('#five').click()
      cy.get('#equal').click()
      cy.get('#result').should('have.text', '20')
    })
  
    it('should perform division', () => {
      cy.get('#six').click()
      cy.get('#division').click()
      cy.get('#two').click()
      cy.get('#equal').click()
      cy.get('#result').should('have.text', '3')
    })
  
    it('should clear the display', () => {
      cy.get('#one').click()
      cy.get('#two').click()
      cy.get('#onoffclear').click()
      cy.get('#result').should('have.text', '0')
    })
  
    it('should handle memory functions', () => {
      cy.get('#memoryRecall').click()
      cy.get('#result').should('have.text', '0')
      
      cy.get('#five').click()
      cy.get('#memoryPlus').click()
      cy.get('#onoffclear').click()
      cy.get('#memoryRecall').click()
      cy.get('#result').should('have.text', '5')
      
      cy.get('#two').click()
      cy.get('#memoryMinus').click()
      cy.get('#onoffclear').click()
      cy.get('#memoryRecall').click()
      cy.get('#result').should('have.text', '3')
    })
  })