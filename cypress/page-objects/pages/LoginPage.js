/// <reference types="cypress" />
import BasePage from "./BasePage";

const userName = Cypress.env('USER_NAME');
const userPassword = Cypress.env('USER_PASSWORD');

class LoginPage extends BasePage {
	#loginPageTitle = '.login_logo';
	#userNameInput = '[placeholder="Username"]';
	#passwordInput = '#password';
	#loginBtn = 'input[type="submit"]';
	#errorMessage = '[data-test="error"]';

	constructor() {
		super('/');
	}

	get loginPageTitle() {
		return cy.get(this.#loginPageTitle);
	}

	get userNameInput() {
		return cy.get(this.#userNameInput);
	}

	get passwordInput() {
		return cy.get(this.#passwordInput);
	}

	get loginBtn() {
		return cy.get(this.#loginBtn);
	}

	get errorMessage() {
		return cy.get(this.#errorMessage);
	}

	login(userName, password) {
		cy.get(this.#userNameInput).type(userName);
		cy.get(this.#passwordInput).type(password);
		cy.get(this.#loginBtn).click();
	}

	loginWithValidCredentials() {
		this.login(userName, userPassword);
	}

	verifyErrorMessage(text) {
		cy.get(this.#errorMessage).should('be.visible');
		cy.get(this.#errorMessage).should('have.text', text);
	}
}

export default new LoginPage();
