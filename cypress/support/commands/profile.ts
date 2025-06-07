import { User } from '../../../src/entities/User';

export const updateProfile = (firsname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firsname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asasf' },
    body: {
        id: '4',
        first: 'Test',
        lastname: 'User',
        age: 35,
        currency: 'EUR',
        country: 'France',
        city: 'Paris',
        username: 'testuser1',
        avatar: 'https://i.ibb.co/B52J0x4K/image.png',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firsname: string, lastname: string): Chainable<User>
            resetProfile(profileId: string): Chainable<User>
        }
    }
}
