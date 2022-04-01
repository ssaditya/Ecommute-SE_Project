describe("Render the LoginPage", () => {
    it("LoginPage rendered correctly", () => {
        cy.visit("/login")
    })
    it("LoginPage has the Login Form", () => {
        cy.get('.login').should('exist')
        cy.get('.login-form').should('exist')
    })
})
