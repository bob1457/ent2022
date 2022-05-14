describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('ent2022-nx-welcome').should('exist');
  });
});