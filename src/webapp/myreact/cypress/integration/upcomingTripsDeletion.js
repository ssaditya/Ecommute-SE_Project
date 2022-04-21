describe("Render Upcoming Trips post deletion", () => {
    it("Updated upcoming trips rendered", () => {
        cy.visit("/upcomingtripdelete")
    })
    it("Rendered upcoming trips correctly", () => {
        cy.get('.upcomingdisplay').should('exist')
   
    }
    )
})