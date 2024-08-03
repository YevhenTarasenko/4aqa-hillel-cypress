/// <reference types="cypress" />

export default class BasePage {
	#url;

	constructor(url) {
		this.#url = url;
	}

	open() {
		cy.visit(this.#url);
	}
}
