describe('Login usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    })

    it('estratégia 1: voltar para o elemento pai, e aqvançar para um td img attr', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .parent()
            .find('img[onclick*=remove]')
            .click()
    })
    
    
    
    it('estratégia 2: buscar todos os irmaos, e buscar o que tem img + attr', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .siblings() 
            .children('img[onclick*=remove]') 
            .click()
    })
    
    
    
    it('estratégia 2.2: buscar todos os irmaos, e buscar o que tem img + attr', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .siblings()
            .children()
            .filter('img[onclick*=remove]')
            .click()
    })
    
    
    
    it('estratégia 3: buscar todos os irmaos mais novos, seleciona o caçula e busca seu filho img', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .nextAll()
            .eq(2)
            .find('img')
            .click()
    })
    
    
    
    it('estratégia 3: busca o último elemento da lista', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .nextAll()
            .last()
            .find('img')
            .click()
    })
    
    
    
    it('estratégia 4: buscar o primeiro elemento da lista', () => {
        cy.add_mesada('Mesada', '100', '2023-01-12')
        cy.get('td[class="description"]')
            .contains('Mesada')
            .nextAll()
            .first()
            .find('img')
            .click()
    })
    
})