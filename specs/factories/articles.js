const faker = require('faker')

module.exports = (factory, Models) => {
  factory.define('Article', Models.Article, {
    title: () => faker.lorem.word(),
    lead: () => faker.lorem.sentence(),
    content: () => faker.lorem.paragraphs(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}