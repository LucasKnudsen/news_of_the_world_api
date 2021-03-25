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
    let author = await factory.create('Author')
    await factory.createMany('Article', 5, { authorId: author.id })
    response = await request.get('/api/articles')
  });

  it('is expected to respond with status 200', () => {
    expect(response.status).to.equal(200)
  });

  it('is expected to respond with a list of 5 articles', () => {
    expect(response.body.articles.length).to.equal(5)
  });

  it('is expected to have a Stephen King as the author', () => {
    expect(response.body.articles[0].author.name).to.equal('Stephen King')
  })

});