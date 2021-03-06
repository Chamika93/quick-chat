describe('Create a new chat room', () => {
    it('Navigate to the chat page', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="mainText"]').contains('Create a chat quickly without a hassle.');

        cy.get('[data-testid="name"]')
           .type('Chamika');
        
        cy.get('[data-testid="createChatButton"]')
           .click();

        // cy.location('pathname').should('match', /^chat\/*/);

        cy.get('[data-testid="messageText"]')
            .type('New message');

        cy.get('[data-testid="sendButton"]')
            .click();

        cy.get('[data-testid="messageText"]')
            .should('have.value', '');

        cy.contains('New message');
    })
})