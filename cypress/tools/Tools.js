const { HomePage } = require("../pageObject/HomePage");
const { PolymerPage } = require("../pageObject/PolymerPage");

const homePage = new HomePage();
const polymerPage = new PolymerPage();

class Tools {

    selectExample(example) {
        homePage.findExample(example).click();
    }
    
    selectIssue(issue) {
        homePage.findIssue(issue).click();
    }

    createEvent(item) {
        cy.reload();
        polymerPage.findEventBox().type(item).type('{enter}');
    }

    checkEventIsCreated(item) {
        cy.reload();
        polymerPage.findCreatedEvent(item).should('have.text', item);

    }

    removeSelectedItem(item) {
        polymerPage.findItemToRemove(item).next().invoke('click');
    }

    checkEventIsRemoved(item) {
        cy.reload();
        polymerPage.findRemovedItem().each(element => {
            cy.wrap(element).should('not.contain', item);
        });
    }

    editSelectedItem(item, newItem){
        polymerPage.findItemToEdit(item).clear()
            .type(newItem)
            .type('{enter}');
    }

}

module.exports = { Tools }