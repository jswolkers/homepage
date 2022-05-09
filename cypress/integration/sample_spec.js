describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('http://localhost:8080')
      cy.contains('Contact').click()
      cy.url().should('include', 'contact')
    })
  })