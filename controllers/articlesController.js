const { Article } = require('../models')
const articlesController = {
  async index(request, response) {
    const articles = await Article.findAll({
      include: 'author'
    })
    debugger
    response.send({ articles: articles })
  }
}

module.exports = articlesController