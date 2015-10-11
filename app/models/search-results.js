import DS from 'ember-data';

export default DS.Model.extend({
  resultID: DS.attr('string'),
  thumbLocalLink: DS.attr('string'),
  source: DS.attr('string'),
  fullFigureLink : DS.attr('string'),
  articleTitle : DS.attr('string'),
  articleLink : DS.attr('string'),
  articleLinkPDF : DS.attr('string'),
  figsonlyLink : DS.attr('string'),
  caption : DS.attr('string'),
  imageType : DS.attr('string'),
  date : DS.attr('string'),
  subscriptionStatus : DS.attr('string')
});
