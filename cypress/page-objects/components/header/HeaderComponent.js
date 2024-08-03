/// <reference types="cypress" />

class HeaderComponent {
	#burgerMenu = '#react-burger-menu-btn';
	#cartBtn = '[data-test="shopping-cart-link"]';
	#filter = '[data-test="product-sort-container"]';
	#pageTitle = '[data-test="title"]';

	get burgerMenu() {
		return cy.get(this.#burgerMenu);
	}

	get cartBtn() {
		return cy.get(this.#cartBtn);
	}

	get filter() {
		return cy.get(this.#filter);
	}

	get pageTitle() {
		return cy.get(this.#pageTitle);
	}
}

export default new HeaderComponent();
