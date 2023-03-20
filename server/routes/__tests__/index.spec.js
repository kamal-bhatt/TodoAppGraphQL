const request = require('supertest');
const chai = require('chai');  
const expect = chai.expect;    // Using Expect style
const app = require('../../app');
describe("Testing index Route",()=>{
    it("Should get 200 on path /",async()=>{
        let res = await request(app).get('/')
        expect(res.statusCode).to.be.equal(200)
    })
    it("Should return text",async()=>{
        let res = await request(app).get('/')
        expect(res.text).to.be.a('string')
    })
    it("Should return json",async()=>{
        let res = await request(app).get('/')
        let jsonBody = JSON.parse(res.text)
        expect(jsonBody.title).to.be.a('string')
    })
})