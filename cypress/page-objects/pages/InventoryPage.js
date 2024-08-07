/// <reference types="cypress" />
import BasePage from "./BasePage";

class InventoryPage extends BasePage {
	#inventoryPageTitle = '[data-test="title"]';
	#allInventoryItems = '[data-test="inventory-item-name"]';
	#allInventoryDescriptions = '[data-test="inventory-item-desc"]';
	#allInventoryPrices = '[data-test="inventory-item-price"]';
	#addToCartBtn = '.btn_primary';
	#removeToCartBtn = '.btn_secondary';

	constructor() {
		super('/inventory.html');
	}

	get inventoryPageTitle() {
		return cy.get(this.#inventoryPageTitle);
	}

	get allInventoryItems() {
		return cy.get(this.#allInventoryItems);
	}

	get allInventoryDescriptions() {
		return cy.get(this.#allInventoryDescriptions);
	}

	get allInventoryPrices() {
		return cy.get(this.#allInventoryPrices);
	}

	get addToCartBtn() {
		return cy.get(this.#addToCartBtn);
	}

	get removeToCartBtn() {
		return cy.get(this.#removeToCartBtn);
	}

	openItem(itemName) {
		cy.get(this.#allInventoryItems).contains(itemName).click();
	}
}

export default new InventoryPage();
