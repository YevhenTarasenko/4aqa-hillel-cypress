/// <reference types="cypress" />

import InventoryPage from '../../../page-objects/pages/InventoryPage';
import LoginPage from '../../../page-objects/pages/LoginPage';
import HeaderComponent from '../../../page-objects/components/header/HeaderComponent';
import ItemsPage from '../../../page-objects/pages/ItemsPage';


const loginPage = LoginPage;
const inventoryPage = InventoryPage;
const headerComponent = HeaderComponent;
const itemsPage = ItemsPage;


describe('Tests for Inventory page and Header', () => {
	beforeEach(() => {
		loginPage.open();
		loginPage.loginPageTitle.should('be.visible').should('have.text', 'Swag Labs');
		loginPage.loginWithValidCredentials();
		headerComponent.pageTitle.should('be.visible').should('have.text', 'Products');
	});

	it('Check items in header', () => {
		headerComponent.burgerMenu.should('be.visible')
		headerComponent.cartBtn.should('be.visible')
		headerComponent.filter.should('be.visible')
	});

	it('Check all options in filter', () => {
		headerComponent.filter.select('Name (Z to A)')
		headerComponent.filter.should('contain.text', 'Name (Z to A)')

		headerComponent.filter.select('Name (A to Z)')
		headerComponent.filter.should('contain.text', 'Name (A to Z)')

		headerComponent.filter.select('Price (low to high)')
		headerComponent.filter.should('contain.text', 'Price (low to high)')

		headerComponent.filter.select('Price (high to low)')
		headerComponent.filter.should('contain.text', 'Price (high to low)')
	})

	it('Check "Your Cart" page is open after clicking to cart', () => {
		headerComponent.cartBtn.click()
		headerComponent.pageTitle.should('be.visible').should('have.text', 'Your Cart')
		cy.url().should('include', '/cart.html')
	})

	it('Open item from inventory list', () => {
		inventoryPage.openItem('Sauce Labs Backpack')
		itemsPage.itemName.should('be.visible').should('have.text', 'Sauce Labs Backpack')
	})

});