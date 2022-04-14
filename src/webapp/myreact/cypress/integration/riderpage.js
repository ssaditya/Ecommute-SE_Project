describe("Render the RiderPage", () => {
    it("RiderPage rendered correctly", () => {
        cy.visit("/rider")
    })
    it("Rider Form submitted properly",()=>{
        cy.get('#ridersource').type("Orlando");
        cy.get('#riderdestination').type("Miami");
        cy.get('#noofseats').type("4");
        cy.get("#ridersubmit").click({force:true});
    })
})