import {getAjax} from  './ajaxRequest';
import {filterResponseGroups} from  './filterResponseGroups';

var submitEvent = document.getElementById('submit-btn');

submitEvent.addEventListener('click', function(ev){
  ev.preventDefault();
  var urlAllGroups = 'https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J';
  getAjax(urlAllGroups, filterResponseGroups);

});

console.log('App ready');
