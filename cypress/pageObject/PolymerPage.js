class PolymerPage {

    findEventBox() {
        cy.reload();
        return cy.get('input[is="td-input"]')
    }

    findCreatedEvent(item) {
        cy.reload();
        return cy.get(`label[class="style-scope td-item"]:contains(${item})`)

    }
    findItemToRemove(item) {
        cy.reload();
        return cy.get(`label[class="style-scope td-item"]:contains(${item})`);
    }

    findRemovedItem() {
        cy.reload();
        return cy.get('label[class="style-scope td-item"]');

    }
}

module.exports = { PolymerPage }