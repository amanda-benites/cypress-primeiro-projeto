describe('Login usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('login correto', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login invalido', () => {
        cy.login('ana', '321');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})