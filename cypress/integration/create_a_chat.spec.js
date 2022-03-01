describe('Create a new chat room', () => {
    it('Navigate to the chat page', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="mainText"]').contains('Create a disposable chat quickly without a hassle.');

        cy.get('[data-testid="name"]')
           .type('Chamika');
        
        cy.get('[data-testid="createChatButton"]')
           .click();

        cy.location('pathname').should('match', /\/chat$/);
    })
})