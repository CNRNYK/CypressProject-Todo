/// <reference types="cypress" />
const { Tools } = require('../../tools/Tools')

const tools = new Tools();

const eventList = ['feed the cat', 'go to shopping']

describe('example test', () => {

  before(() => {
    cy.navigateToUrl('/');
  })

  it('as a user I should click javascript, click polymer, creat 3 events', () => {

    tools.selectExample('JavaScript');
    tools.selectIssue('Polymer');

    eventList.forEach(item => { tools.createEvent(item) })
    eventList.forEach(item => { tools.checkEventIsCreated(item) })
    let item = eventList[1]
    
    //tools.removeSelectedItem(item) =>  Comment reason: This function is for remove an item from list
    //tools.checkEventIsRemoved(item) =>  Comment reason: This function is for assert an item from list

    tools.editSelectedItem(item, 'check the dentist appointment')
    tools.checkEventIsCreated('check the dentist appointment')


  });

})
