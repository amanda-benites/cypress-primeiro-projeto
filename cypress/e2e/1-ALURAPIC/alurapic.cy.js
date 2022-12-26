describe('Funcionalidades tela inicial', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    const user = 'flavio'
    const password = '123'

    it('pesquisar foto do farol', () => {
        cy.login(user, password);
        cy.contains('a', '(Logout)').should('be.visible');
        cy.get('input[placeholder="search..."]').type('farol');
    })

    it('pesquisar foto do farol', () => {
        cy.login(user, password);
        cy.contains('a', '(Logout)').should('be.visible');
        cy.get('input[placeholder="search..."]').type('pessoa');
    })

    
    it('pesquisar foto do farol', () => {
        cy.login(user, password);
        cy.contains('a', '(Logout)').should('be.visible');
        cy.get('input[placeholder="search..."]').type('montanha');
    })
    
})