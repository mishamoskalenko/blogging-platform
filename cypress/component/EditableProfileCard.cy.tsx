import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: USER_ID,
                        },
                    },
                },
            }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );
        const newName = 'new name';
        const newLastname = 'new lastname';
        cy.getByTestId('EditableProfileCardHeader.EditButton').click();
        cy.getByTestId('ProfileCard.firstname').clear().type(newName);
        cy.getByTestId('ProfileCard.lastname').clear().type(newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
