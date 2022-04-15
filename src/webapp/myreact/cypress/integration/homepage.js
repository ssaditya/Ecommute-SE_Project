describe("Render the HomePage", () => {
    it("HomePage rendered correctly", () => {
        cy.visit("/home")
    })
    it("HomePage has the Driver and Rider Options", () => {
        cy.get('.card').should('exist')
        cy.get('.container').should('exist')
    })
    it("Successfully going to driver page from home page", () => {
        cy.get('.card').should('exist')
        cy.get('.container').should('exist')
        cy.get('#homebutton').click();
    })
})

