const { Article } = require('../models')
const articlesController = {
  async index(request, response) {
    const articles = await Article.findAll()

    response.send({ articles: articles })
  }
}

module.exports = articlesController