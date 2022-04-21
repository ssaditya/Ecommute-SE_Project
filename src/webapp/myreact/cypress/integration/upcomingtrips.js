describe("Render Upcoming Trips in Ride History", () => {
    it("Upcoming Trips page rendered", () => {
        cy.visit("/upcomingtrips")
    })
    it("Rendered upcoming trips correctly", () => {
        cy.get('.upcomingdisplay').should('exist')
    }
    )
})