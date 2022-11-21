const request = require("supertest");
const app = require('../index');

test('should fetch all employees', async () => {
    await request(app)
        .get('/v1/employee/all')
        .expect(200)
})

test.skip('should create a new employee', async () => {
    await request("http://localhost:8000")
        .post('/v1/employee/new').send({
            name: "Pratham Bharti",
            email: "pratham@gmail.com",
            address: {
                city: "Noida",
                state: "Uttar Pradesh"
            },
            mobile: "82854861"
        })
        .expect(200)
})

test.skip('should update an existing employee', async () => {
    await request("http://localhost:8000")
        .patch('/v1/employee/update/PRA8980').send({
            email: "prathambharti795@gmail.com",
        })
        .expect(200)
})

test.skip('should delete an existing employee', async () => {
    await request("http://localhost:8000")
        .delete('/v1/employee/delete/PRA8980')
        .expect(200)
})