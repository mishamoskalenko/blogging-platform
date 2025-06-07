import { getByTestId } from 'cypress/support/commands/common';

let profileId = '';

describe('User goes to the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile page loaded successfully', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'Test');
    });
    it('Edit profile', () => {
        const newName = 'new name';
        const newLastname = 'new lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
