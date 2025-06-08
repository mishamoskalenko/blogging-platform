import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized user', () => {
        it('Go to main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to non-existent page', () => {
            cy.visit('/fgdfgsdgresgser');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Go to articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
