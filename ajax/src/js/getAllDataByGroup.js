import {getAjax} from  './ajaxRequest';
import {getNutritionData} from  './getNutritionData';

function getAllDataByGroup(xhttp){
  var response = JSON.parse(xhttp);
  var items = response.list.item;
  var result = '<form class="" action="" method="post" id="foodItem">';
  items.forEach(function(item, i){
    result += '<div><input type="radio" id="'+item.ndbno+'" name="food" value="'+item.ndbno+'"><label for="'+item.ndbno+'">'+item.name+'</label></div>';
  });
  result +='<button type="submit" name="get-nutrition" id="get-nutrition">Get nutrition data</button>';
  result += '</form>';
  result += '<div id="foodsByGroup"></div>';
  document.getElementById('foodsByGroup').innerHTML = result;
  return eventNutritionData();
}

function eventNutritionData(){
  var formFood = document.getElementById('foodItem');
  formFood.addEventListener('submit', function(ev){
    ev.preventDefault();
    var foodSelected = this.elements['food'].value;
    var urlDataFood = 'https://api.nal.usda.gov/ndb/V2/reports?ndbno='+foodSelected+'&type=f&format=json&api_key=8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J';
    return getAjax(urlDataFood, getNutritionData);
  });
}

export {getAllDataByGroup};
