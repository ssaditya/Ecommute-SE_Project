describe("Render the LoginPage", () => {
    it("LoginPage rendered correctly", () => {
        cy.visit("/login")
    })
    it("LoginPage has the Login Form", () => {
        cy.get('.login').should('exist')
        cy.get('.login-form').should('exist')
    })
    it("Valid Credentials entered",()=>{
        cy.get('#uname').type("swaroop");
        cy.get('#pass').type("swaroop");
        cy.get("#submit").click();
    })
    it("Invalid Credentials entered",()=>{
        cy.visit("/login");
        cy.get('#uname').type("abc");
        cy.get('#pass').type("randomm");
        cy.get("#submit").click();
    })
})
