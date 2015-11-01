import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('search-result', params);
    //return this.store.findAll('search-result');
  },
  actions: {
    search: function(input) {
      console.log(Ember.$("#indication").val());
      console.log(Ember.$("#modality").val());
      console.log(Ember.$("#areaimaged").val());
      console.log(Ember.$("#technique").val());
      console.log(Ember.$("#comparison").val());
      console.log(Ember.$("#findings").val());
      console.log(Ember.$("#conclusion").val());
      
      // TODO: need to make sure at least some of the above have values
      // then pass off to the IRServer for retrieval
      //return this.store.query('search-result', params);
    }
  }
});
