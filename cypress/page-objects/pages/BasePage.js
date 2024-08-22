/// <reference types="cypress" />

export default class BasePage {
	// #url;

	// constructor(url) {
	// 	this.#url = url;
	// }

	// open() {
	// 	cy.visit(this.#url);
	// }

	constructor() {
		this.baseURL = Cypress.env('BASE_URL');
	}

	open() {
		cy.visit(`${this.baseURL}`);
	}

}
