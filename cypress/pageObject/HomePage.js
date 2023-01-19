class HomePage {

    findExample(example) {
        return cy.get('div[class="horizontal layout style-scope paper-tabs"]').children().first().should('have.text', `${example}`)
    }
    findIssue(issue) {
        return cy.get('iron-pages[selected="{{selectedTab}}"]').contains('a', `${issue}`);
    }

}

module.exports = { HomePage };