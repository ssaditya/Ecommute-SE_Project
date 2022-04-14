describe("Render the DriverPage", () => {
    it("DriverPage rendered correctly", () => {
        cy.visit("/driver")
    })
    it("Driver Form submitted properly",()=>{
        cy.get('#driversource').type("Orlando");
        cy.get('#driverdestination').type("Miami");
        cy.get('#noofseats').type("4");
        cy.get("#driversubmit").click({force:true});
    })
})