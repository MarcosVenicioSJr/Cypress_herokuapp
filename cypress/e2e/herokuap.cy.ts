describe("Page Initial to Site", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Validate Style to InitialPage", () => {
    cy.get("body").should("have.css", "background-color")
  })
  it("Validate page initial", () => {
    cy.get(".heading").should("have.text", "Welcome to the-internet")
    cy.get("#content h2").should("have.text", "Available Examples")
  })

  describe("Validate links to page", () => {
    it("Validate quantity links to page", () => {
      cy.get("#content ul").should("have.length", 1)
      cy.get("#content ul").within(() => {
        cy.get("li").should("have.length", 44)
      })
    })
    it("Validate content in li", () => {
      cy.get("#content ul li").each(($li) => {
        expect($li).not.to.null
        expect($li.find("a")).to.have.lengthOf(1)
        cy.wrap($li).should("be.visible").find("img").should("not.exist")
      })
    })
  })
})
