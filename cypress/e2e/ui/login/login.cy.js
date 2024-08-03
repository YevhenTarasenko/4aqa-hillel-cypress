/// <reference types="cypress" />

import InventoryPage from '../../../page-objects/pages/InventoryPage'
import LoginPage from '../../../page-objects/pages/LoginPage'
import TestData from '../../../fixtures/testData.json'

const loginPage = LoginPage
const inventoryPage = InventoryPage
const testData = TestData

// correct user data
const userName = Cypress.env('USER_NAME')
const userPassword = Cypress.env('USER_PASSWORD')

describe('Tests for Login', () => {
	beforeEach(() => {
		loginPage.open()
		loginPage.loginPageTitle.should('be.visible').should('have.text', 'Swag Labs')
	})

	it('[valid] Login', () => {
		loginPage.login(userName, userPassword)
		inventoryPage.inventoryPageTitle.should('be.visible').should('have.text', 'Products')
	})

	it('[invalid] Empty Fields', () => {
		loginPage.loginBtn.click()

		loginPage.userNameInput.should('have.class', 'input_error')
		loginPage.passwordInput.should('have.class', 'input_error')
		loginPage.verifyErrorMessage('Epic sadface: Username is required')
	})

	it('[invalid] Empty Password Field', () => {
		loginPage.userNameInput.type(userName)
		loginPage.loginBtn.click()

		loginPage.userNameInput.should('have.class', 'input_error')
		loginPage.passwordInput.should('have.class', 'input_error')
		loginPage.verifyErrorMessage('Epic sadface: Password is required')
	})

	it('[invalid] Empty Username Field', () => {
		loginPage.passwordInput.type(userPassword)
		loginPage.loginBtn.click()


		loginPage.userNameInput.should('have.class', 'input_error')
		loginPage.passwordInput.should('have.class', 'input_error')
		loginPage.verifyErrorMessage('Epic sadface: Username is required')
	})


	it('[invalid] Wrong Username and Password', () => {
		loginPage.userNameInput.type(testData.userNames.incorrectUsername)
		loginPage.passwordInput.type(testData.passwords.incorrectPassword)
		loginPage.loginBtn.click()

		loginPage.userNameInput.should('have.class', 'input_error')
		loginPage.passwordInput.should('have.class', 'input_error')
		loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')
	})
})