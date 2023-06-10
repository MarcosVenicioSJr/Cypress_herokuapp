describe("SendEmail", () => {
  it("SendEmail", () => {
    // acessar site da aplicação
    cy.visit("http://automationpratice.com.br/").get("#top_header") // vai buscar o elemento no site.

    cy.get(".form-control") // vai buscar o elemento no site.
      .type("marcos.venicio@hotmail.com") // vai preencher o campo com o valor passado.

    cy.get(".clear .theme-btn-one.btn_md") //vai buscar o elemento no site
      .click() // vai clicar no elemento selecionado

    cy.get("#swal2-title").should("be.visible").should("have.text", "Success")
  })

  it("SendEmail and press button Enter", () => {
    // acessar site da aplicação
    cy.visit("http://automationpratice.com.br/").get("#top_header") // vai buscar o elemento no site.

    cy.get(".form-control") // vai buscar o elemento no site.
      .type("marcos.venicio@hotmail.com{enter}") // vai preencher o campo com o valor passado.

    cy.get("#swal2-title").should("be.visible").should("have.text", "Success")
  })

  it("Verify close to message Success", () => {
    // acessar site da aplicação
    cy.visit("http://automationpratice.com.br/") // vai buscar o elemento no site.
    cy.get(".form-control") // vai buscar o elemento no site.
      .type("marcos.venicio@hotmail.com") // vai preencher o campo com o valor passado.

    cy.get(".clear .theme-btn-one.btn_md") //vai buscar o elemento no site
      .click() // vai clicar no elemento selecionado

    cy.get(".swal2-confirm").click()

    cy.get("#swal2-title").should("not.exist")
  })
})
