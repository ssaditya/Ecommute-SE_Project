describe("Render the Edit Ride page", () => {
    it("Edit Rider page rendered correctly", () => {
        cy.visit("/edittripdriver")
    })
    it("Rider Form submitted properly",()=>{
        cy.get('#editridesource').type("Orlando");
        cy.get('#editridedestination').type("Miami");
        cy.get('#noofseats').type("4");
        cy.get("#editride").click({force:true});
    })
    it("Edit Driver page rendered correctly", () => {
        cy.visit("/edittriprider")
    })
    it("Driver Form submitted properly",()=>{
        cy.get('#editridesource').type("Orlando");
        cy.get('#editridedestination').type("Miami");
        cy.get('#noofseats').type("4");
        cy.get("#editride").click({force:true});
    })
})