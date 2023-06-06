describe('visiting Demoblaze', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/');

    // Navigate to login
    cy.get('#login2').click();

    // Fill out the valid credentials
    cy.get('#loginusername').type('JohnWick123');
    cy.get('#loginpassword').type('John@123');

    // click on login button
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    // c;ick on desired product
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();

    // click on add to cart
    cy.get('.col-sm-12 > .btn').click();

    // navigate to cart
    cy.get(':nth-child(4) > .nav-link').click();

    // click on place order
    cy.get('.col-lg-1 > .btn').click();

    // fill the form
    cy.get('#name').type('John');
    cy.get('#country').type('India');
    cy.get('#city').type('Bengaluru');
    cy.get('#card').type('411111111111');
    cy.get('#month').type('06');
    cy.get('#year').type('2024');

    // click on purchase
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  }) 
})