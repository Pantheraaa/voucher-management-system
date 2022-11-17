const request = require("supertest");

test('should fetch all employees', async () => {
    await request("http://localhost:8000")
        .get('/v1/employee/all')
        .expect(200)
})

test('should create a new employee', async () => {
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

test('should update an existing employee', async () => {
    await request("http://localhost:8000")
        .patch('/v1/employee/update/PRA2081').send({
            email: "prathambharti795@gmail.com",
        })
        .expect(200)
})

test('should delete an existing employee', async () => {
    await request("http://localhost:8000")
        .delete('/v1/employee/delete/PRA2081')
        .expect(200)
})