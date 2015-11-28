import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },
  model() {
    // this is required - even though it returns nothing - if this line missing,
    // cannot add to model and have template automatically update later
    return this.store.peekAll('search-result');
  },
  actions: {
    search: function() {
      var self = this;
      // need to make sure at least two of the fields values then pass
      // off to the IRServer for retrieval. May tweak threshold later.
      // only pass those items that have values
      var counter = 0;
      var filter = {};
      var values = ['indication', 'modality', 'areaimaged', 'technique', 'comparison', 'findings', 'conclusions', 'gender'];
      values.forEach(function(v) {
        if (!Ember.isEmpty(Ember.$('#' + v).val())) {
          counter++;
          filter[v] = Ember.$('#' + v).val();
        }
      });

      if (counter >= 2) {
        this.store.unloadAll();
        this.store.query('search-result', filter).then(function(value) {
            return;
          }, function(reason) {
            console.log("error reason: ", reason);
            self.transitionTo('error');
        });
      }
    },
    error(error, transition) {
      console.log("error : ", error);
      console.log("transition: ", transition);
      if (error && error.status === 400) {
        return this.transitionTo('error');
      }
    }
  },
});
