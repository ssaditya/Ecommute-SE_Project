describe("Render the Driver confirmation Page", () => {
    it("DriverConfirmationPage rendered correctly", () => {
        cy.visit("/driverconfirmation")
    })
    it("Rendered output correctly", () => {

        cy.get('.card').should('exist')
    })
})