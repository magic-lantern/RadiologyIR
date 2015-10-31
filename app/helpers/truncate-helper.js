import Ember from 'ember';

export function truncateHelper(params/*, hash*/) {
  var str = params[0];
  var len = params[1] || 40;
  if ((typeof str !== 'undefined') && (str.length > len)) {
    var retStr = str.substring(0, len) + "...";
    return new Ember.Handlebars.SafeString(retStr);
  }
  else {
      return str;
  }
}

export default Ember.Helper.helper(truncateHelper);
