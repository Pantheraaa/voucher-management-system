const request = require("supertest");
const app = require('../index');

test('should fetch all vouchers', async () => {
    await request(app)
        .get('/v1/xl/voucher/all')
        .expect(200)
})
