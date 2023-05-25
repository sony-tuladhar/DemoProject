export function Openeyes(){
    cy.eyesOpen({
        appName: 'Falkari',
        testName: 'Falkari Test',
        browser: { width: 800, height: 600 },
      });
}

export function eyescheckwindow(name){
    cy.eyesCheckWindow(name)
}

export function closeEyes(){
    cy.eyesClose()
}