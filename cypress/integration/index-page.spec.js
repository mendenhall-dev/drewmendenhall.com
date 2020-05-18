describe('Index Page', () => {
  it('toMatchImageSnapshot - whole page', () => {
    cy.visit('/')

    cy.contains(/drew mendenhall/i)
    cy.contains(/experience/i)
    cy.contains(/education/i)

    cy.document().toMatchImageSnapshot({
      name: `index-page-${Cypress.browser.name}`,
    })
  })
})
