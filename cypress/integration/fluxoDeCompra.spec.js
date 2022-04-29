

describe('Validando acesso a page home', function () {
    it('Acessando a home page com sucesso', function () {

        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('title').should('have.text', 'My Store')
    })

    it('Fazendo a busca de um produto', function () {
        //efetuando pesquisa por Busca
        cy.get('input[id="search_query_top"]').type('Blouse')
        cy.get('button[name="submit_search"]').click()

         //validando o resultado da Busca
         cy.get('title').should('have.text', 'Search - My Store')
         cy.get('a[title="Blouse"][class="product-name"]').should('contain', 'Blouse')
 
         //selecionando o produto
         cy.get('div a[title="Add to cart"]').click({ force: true })
 
         //validando o modal e confirmando o checkout
         cy.get('a[class="btn btn-default button button-medium"]')
             .should('is.visible')
             .click()

        //fazendo o Checkout
        cy.get('title').should('have.text', 'Order - My Store')
        cy.get('tbody tr td span[class="label label-success"]').should('contain', 'In stock')
        cy.get('a[title="Proceed to checkout"][href*="order&step=1"]').click()

        //fazendo novo cadastro
        cy.get('title').should('have.text', 'Login - My Store')
        cy.get('#email_create').should('is.visible')
            .type('qa.teste@gmail.com')
            .should('have.value', 'qa.teste@gmail.com')

        cy.get('#SubmitCreate').click()

        //creando nova conta
        //dados pessoais
        cy.get('#id_gender1')
            .should('is.visible')
            .click()
        cy.get('#customer_firstname').type("Marcelo")
        cy.get('#customer_lastname').type('Pereira')
        cy.get('#passwd').type('test@123', { log: false }) // ocultando o log da senha durante o teste
        cy.get('#days').select('10')
        cy.get('#months').select('June')
        cy.get('#years').select('2021')
    })
   
})

