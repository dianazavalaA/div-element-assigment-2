describe("should go to page ", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
      cy.get("#user-name").type("standard_user");
      cy.get("#password").type("secret_sauce");
      cy.get("#login-button").click();
    });
  
    it("should login to the page", () => {
      cy.contains("products", { matchCase: false });
    });
  
    it("should add one product, do checkout process and logout after", () => {
      cy.get(".inventory_item").first();
      cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click();
      cy.get("[data-test='remove-sauce-labs-backpack']").contains("remove", {
        matchCase: false,
      });
  
      cy.get(".shopping_cart_badge").contains(1);
  
      cy.get(".shopping_cart_link").click();
  
      cy.get('[data-test="checkout"]').click();
  
      cy.get('[data-test="firstName"]').type("firstname");
      cy.get('[data-test="lastName"]').type("lastname");
      cy.get('[data-test="postalCode"]').type("12345");
  
      cy.get('[data-test="continue"]').click();
  
      cy.get('[data-test="finish"]').click();
  
      cy.contains("THANK YOU FOR YOUR ORDER", { matchCase: false });
  
      cy.get(".bm-burger-button").click();
  
      cy.get("#logout_sidebar_link").click();
    });
  });
