/// <reference types="cypress" />

describe('API extension tests', () => {
	it('GET api test /users', () => {
		cy.api('GET', 'https://jsonplaceholder.typicode.com/users').then((res) => {

			// Check status and response type
			expect(res.status).to.eq(200)
			expect(res.body).to.be.an('array')
			expect(res.body.length).to.eq(10)

			// Check properties
			expect(res.body[0]).to.have.all.keys('id', 'name', 'username', 'email', 'address',
				'phone', 'website', 'company')
			expect(res.body[0].address).to.have.all.keys('street', 'suite', 'city', 'zipcode', 'geo')
			expect(res.body[0].address.geo).to.have.all.keys('lat', 'lng');
			expect(res.body[0].company).to.have.all.keys('name', 'catchPhrase', 'bs');

			// Check values in the first user
			expect(res.body[0].id).to.eq(1)
			expect(res.body[0].name).to.eq('Leanne Graham')
			expect(res.body[0].username).to.eq('Bret')
			expect(res.body[0].email).to.eq('Sincere@april.biz')

		})
	})

	it('GET api test /todos', () => {
		cy.api('GET', 'https://jsonplaceholder.typicode.com/todos').then((res) => {

			// Check status and response type
			expect(res.status).to.eq(200)
			expect(res.body.length).to.eq(200)
			expect(res.body).to.be.an('array')

			// Check properties
			expect(res.body[0]).to.have.all.keys('userId', 'id', 'title', 'completed')

			// Check values in the first todo
			expect(res.body[0].userId).to.eq(1)
			expect(res.body[0].id).to.eq(1)
			expect(res.body[0].title).to.eq('delectus aut autem')
			expect(res.body[0].completed).to.eq(false)
		})
	})

	it('POST api test /posts', () => {
		cy.api({
			method: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
		}).then((res) => {
			cy.log(JSON.stringify(res))
			expect(res.status).to.eq(201)
			expect(res.body.id).to.eq(101)
			expect(res.statusText).to.eq('Created')
			expect(res.isOkStatusCode).to.eq(true)
		})
	})

})
