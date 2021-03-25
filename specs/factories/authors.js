module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    name: 'Stephen King',
    createdAt: new Date(),
    updatedAt: new Date()
  })
}