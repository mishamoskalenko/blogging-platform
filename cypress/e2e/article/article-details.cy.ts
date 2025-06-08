let currentArticleId = '';

describe('User goes to the article details page ', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Sees the content of the article', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Sees recommendations list', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Leaves a review', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
    it('Leaves a review (with fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
