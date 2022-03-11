const app = require('./app');
const request = require('supertest');

describe('api server', () => {
    test("responds to get / with status 200", (done) => {

        let api = app.listen(5000, () => {
            console.log("Test server running on port 5000")
        });

        request(api)
            .get('/')
            .expect(200, done)
    })
})
