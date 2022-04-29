

describe ('Validando acesso a page home', function() {
    it('Acessando a home page com sucesso', function() {

        cy.viewport (1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('title').should('have.text', 'My Store')
    })
})

