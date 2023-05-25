import * as applitoolObj from '../../pageobject/applitoolObj'

describe('UITest', () => {
    it('visit Url', () => {
        cy.visit('https://uat.ordering-falkari.ekbana.net/')
        applitoolObj.Openeyes()
        applitoolObj.eyescheckwindow('homepage')
        applitoolObj.closeEyes()
    });
});