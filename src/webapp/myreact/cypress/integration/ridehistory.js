describe("Render the Ride History", () => {
    it("Ride History rendered correctly", () => {
        cy.visit("/ridehistory")
    })
    it("Renders past trips correctly", () => {
        cy.get('.pasttripsDriverCard').should('exist')
        cy.get('.pasttripsRiderCard').should('exist')
        cy.get('.upcomingtripsCard').should('exist')
       
    }
    )
})