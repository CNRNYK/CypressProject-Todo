class PolymerPage {

    findEventBox() {
        cy.reload();
        return cy.get('input[is="td-input"]');
    }

    findCreatedEvent(item) {
        cy.reload();
        return cy.get(`label[class="style-scope td-item"]:contains(${item})`);

    }
    findItemToRemove(item) {
        cy.reload();
        return cy.get(`label[class="style-scope td-item"]:contains(${item})`);
    }

    findRemovedItem() {
        cy.reload();
        return cy.get('label[class="style-scope td-item"]');

    }

    findItemToEdit(item) {

        return cy.get(`label[class="style-scope td-item"]:contains(${item})`)
            .dblclick()
            .parents()
            .find('input[class="edit style-scope td-item"]');
    }
}

module.exports = { PolymerPage };