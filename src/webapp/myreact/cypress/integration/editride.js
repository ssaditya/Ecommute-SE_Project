describe("Render the Edit Ride page", () => {
    it("Edit Ride page rendered correctly", () => {
        cy.visit("/edittrip")
    })
    it("Driver Form submitted properly",()=>{
        cy.get('#editridesource').type("Orlando");
        cy.get('#editridedestination').type("Miami");
        cy.get('#noofseats').type("4");
        cy.get("#editride").click({force:true});
    })
})