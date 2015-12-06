import DS from 'ember-data';

// how to disable stupid 'intelligent' pluralization
//var inflector = Ember.Inflector.inflector;
//inflector.uncountable('search-results');

export default DS.Model.extend({
  resultID: DS.attr('string'),
  imageLink: DS.attr('string'),
  source: DS.attr('string'),
  resultTitle: DS.attr('string'),
  linkTitle : DS.attr('string'),
  articleLink : DS.attr('string'),
  figsonlyLink : DS.attr('string'),
  content : DS.attr('string'),
  modality : DS.attr('string'),
  date : DS.attr('string'),
  ObjectId : DS.attr('string'),
});
