describe('Login usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })
    it('login correto', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login invalido', () => {
        cy.login('ana', '321');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})