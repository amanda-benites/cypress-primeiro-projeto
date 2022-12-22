describe('Funcionalidades tela inicial', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    const user = 'cindy'
    const password = 'disney01'

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