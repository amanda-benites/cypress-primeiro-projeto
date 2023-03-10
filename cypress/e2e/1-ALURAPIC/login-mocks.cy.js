describe('Login usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it('login correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })
})