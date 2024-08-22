/// <reference types="cypress" />

import InventoryPage from '../../../page-objects/pages/InventoryPage';
import LoginPage from '../../../page-objects/pages/LoginPage';
import HeaderComponent from '../../../page-objects/components/header/HeaderComponent';
import ItemsPage from '../../../page-objects/pages/ItemsPage';

const loginPage = LoginPage;
const inventoryPage = InventoryPage;
const headerComponent = HeaderComponent;
const itemsPage = ItemsPage;

describe('Tests for Inventory page', () => {
	beforeEach(() => {
		loginPage.open();
		loginPage.loginPageTitle.should('be.visible').should('have.text', 'Swag Labs');
		loginPage.loginWithValidCredentials();
		headerComponent.pageTitle.should('be.visible').should('have.text', 'Products');
	});

	it('Check item 1 data', () => {
		inventoryPage.openItem('Sauce Labs Backpack')
		itemsPage.itemName.should('be.visible').should('have.text', 'Sauce Labs Backpack')
		itemsPage.itemImage.should('be.visible')
		itemsPage.itemDescription.should('be.visible')
		itemsPage.itemPrice.should('be.visible')
	});

	it('Check item 2 data', () => {
		inventoryPage.openItem('Sauce Labs Bike Light')
		itemsPage.itemName.should('be.visible').should('have.text', 'Sauce Labs Bike Light')
		itemsPage.itemImage.should('be.visible')
		itemsPage.itemDescription.should('be.visible')
		itemsPage.itemPrice.should('be.visible')
	});

	it('Check the "Remove" btn is visible after click to "Add to cart"', () => {
		inventoryPage.openItem('Sauce Labs Backpack')
		itemsPage.addToCartBtn.click()
		itemsPage.removeToCartBtn.should('be.visible')
	})

	it('Check the "Add to cart" btn is visible after click to "Remove"', () => {
		inventoryPage.openItem('Sauce Labs Backpack')
		itemsPage.addToCartBtn.click()
		itemsPage.removeToCartBtn.click()
		itemsPage.addToCartBtn.should('be.visible')
	})



});