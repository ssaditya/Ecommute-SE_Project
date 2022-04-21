describe("Render the Rider confirmation Page", () => {
    it("RiderConfirmationPage rendered correctly", () => {
        cy.visit("/riderconfirmation")
    })
    it("Rendered output correctly", () => {

        cy.get('.card').should('exist')
    })
})