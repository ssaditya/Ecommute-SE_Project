describe("Render the HomePage", () => {
    it("HomePage rendered correctly", () => {
        cy.visit("/home")
        cy.get('.card').should('exist')
        cy.get('.container').should('exist')
    })
})