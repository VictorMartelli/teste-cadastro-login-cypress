describe('Testar Cadastro', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.wait(1000)

    cy.contains('Ir para o Cadastro').click()

    cy.get('[placeholder="Nome Completo"]').type('Teste')

    cy.get('[placeholder="Email"]').type('cypress@teste.com')

    cy.get('[placeholder="senha"]').type('cypress')

    cy.get('[placeholder="Confirme a senha"]').type('cypress')

    cy.contains('Criar conta').click()

    cy.contains('Você está logado!').should('be.visible')

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.wait(1000)

    cy.get('[placeholder="Email"]').type('cypress@teste.com')

    cy.get('[placeholder="senha"]').type('cypress')

    cy.get('[onclick="handleLogin()"]').click()

    cy.contains('Você está logado!').should('be.visible')

  })
})