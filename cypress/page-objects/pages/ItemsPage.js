/// <reference types="cypress" />
import BasePage from "./BasePage";

class ItemsPage extends BasePage {
	#itemName = '[data-test="inventory-item-name"]';
	#itemDescription = '[data-test="inventory-item-desc"]';
	#itemPrice = '[data-test="inventory-item-price"]';
	#addToCartBtn = '[data-test="add-to-cart"]';
	#removeToCartBtn = '[data-test="remove"]';
	#itemImage = '.inventory_details_img'

	constructor() {
		super('inventory-item.html');
	}

	get itemName() {
		return cy.get(this.#itemName);
	}

	get itemDescription() {
		return cy.get(this.#itemDescription);
	}

	get itemPrice() {
		return cy.get(this.#itemPrice);
	}

	get addToCartBtn() {
		return cy.get(this.#addToCartBtn);
	}

	get removeToCartBtn() {
		return cy.get(this.#removeToCartBtn);
	}

	get itemImage() {
		return cy.get(this.#itemImage);
	}
}

export default new ItemsPage();
