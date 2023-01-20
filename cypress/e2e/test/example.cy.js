/// <reference types="cypress" />
const { Tools } = require('../../tools/Tools');

const tools = new Tools();
const eventList = ['feed the cat', 'go to shopping'];

describe('ToDO Task', { testIsolation: false }, () => {

  before(() => {
    cy.navigateToUrl('/');
  });

  it('As a user I should select javascript', () => {
    tools.selectExample('JavaScript');
  });

  it('As a user I should select polymer', () => {
    tools.selectIssue('Polymer');
  });

  it('As a user I should create 2 events', () => {
    eventList.forEach(item => { tools.createEvent(item) });
    eventList.forEach(item => { tools.checkEventIsCreated(item) });
  });

  it('As a user I should edit 2nd event', () => {
    let item = eventList[1];
    tools.editSelectedItem(item, 'check the dentist appointment');
    tools.checkEventIsCreated('check the dentist appointment');
  });
    
  after(() => {
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

});
