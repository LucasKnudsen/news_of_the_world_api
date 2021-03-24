const { factory, expect, serverConfig } = require('../helpers')

let request, response

before(done => {
  request = serverConfig(done)
});

afterEach(async () => {
  await factory.cleanUp()
})

describe('GET /api/articles', () => {
  beforeEach(async () => {
    await factory.createMany('Article', 5, [
      {
        title: 'My fantastic article!'
      }
    ])
    response = await request.get('/api/articles')
  });

  it('is expected to respond with status 200', () => {
    expect(response.status).to.equal(200)
  });

  it.only('is expected to respond with a list of 5 articles', () => {
    expect(response.body['articles'].length).to.equal(5)
  });

});