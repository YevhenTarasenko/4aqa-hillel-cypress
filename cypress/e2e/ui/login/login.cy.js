/// <reference types="cypress" />

// locators
const loginPageTitle = '.login_logo'
const userNameInput = '[placeholder="Username"]'
const passwordInput = '#password'
const loginBtn = 'input[type="submit"]'
const errorIconInInput = '.error'
const errorMessage = '[data-test="error"]'
const mainPageTitle = '.app_logo'

// user data
const userName = Cypress.env('USER_NAME')
const userPassword = Cypress.env('USER_PASSWORD')

describe('Tests for Login', () => {
	beforeEach(() => {
		cy.visit('')
		cy.get(loginPageTitle).should('be.visible')

	})

	it('[valid] Login', () => {
		cy.get(userNameInput).type(userName)
		cy.get(passwordInput).type(userPassword)
		cy.get(loginBtn).click()

		cy.get(mainPageTitle).should('be.visible')
	})


	it('[invalid] Empty Fields', () => {
		cy.get(loginBtn).click()

		cy.get(userNameInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(passwordInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(errorMessage).should('be.visible')
		cy.get(errorMessage).should('have.text', 'Epic sadface: Username is required')
	})

	it('[invalid] Empty Password Field', () => {
		cy.get(userNameInput).type(userName)
		cy.get(loginBtn).click()

		cy.get(userNameInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(passwordInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(errorMessage).should('be.visible')
		cy.get(errorMessage).should('have.text', 'Epic sadface: Password is required')
	})

	it('[invalid] Empty Username Field', () => {
		cy.get(passwordInput).type(userPassword)
		cy.get(loginBtn).click()

		cy.get(userNameInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(passwordInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(errorMessage).should('be.visible')
		cy.get(errorMessage).should('have.text', 'Epic sadface: Username is required')
	})

	it('[invalid] Wrong Username and Password', () => {
		cy.get(userNameInput).type('WrongUsername')
		cy.get(passwordInput).type('WrongPassword')
		cy.get(loginBtn).click()

		cy.get(userNameInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(passwordInput).parent().find(errorIconInInput).should('be.visible')
		cy.get(errorMessage).should('be.visible')
		cy.get(errorMessage).should('have.text', 'Epic sadface: Username and password do not match any user in this service')
	})
})