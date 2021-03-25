const { expect, factory, pending } = require('../helpers')
const { Association, DataTypes } = require('sequelize')

describe('Author', () => {
  AuthorModel = factory.factories.Author.Model
  const { tableName, tableAttributes, associations } = AuthorModel

  beforeEach(async () => {
    subject = await factory.create('Author')
  });

  describe('Model', () => {
    it('is expected to have table name "Authors"', () => {
      expect(tableName).to.equal('Authors')

    });

    describe('is expected to have property:', () => {

      it('name:string', () => {
        expect(tableAttributes)
          .to.have.own.property('name')
          .that.has.property('type').to.be.instanceOf(DataTypes.STRING)
      });
    });

    describe('is expected to have associations', () => {
      it('article:hasMany', () => {
        expect(associations)
          .to.have.own.property('articles')
          .to.be.instanceOf(Association.HasMany)
      });
    });
  });

  describe('Instance', () => {

    it('is expected to have a valid factory', () => {
      expect(subject).to.be.ok
    });

    describe('is expected to have properties', () => {
      it('name:string', () => {
        expect(subject)
          .to.have.property('name').to.be.a('string')
      });
    });

    describe('is expected to have association accessors', () => {
      it('for the Articles association', () => {
        expect(subject)
          .to.respondTo('getArticles')
          .and.respondTo('setArticles')
      });
    });
  });
});