function getNutritionData(xhttp){
  var response = JSON.parse(xhttp);
  console.log(response);
  var foodName = response.foods[0].food.desc.name;
  var nutrients = response.foods[0].food.nutrients;
  var result = '<h3>'+foodName+' (100grs)</h3>';
  nutrients.forEach(function(item, i){
    console.log(item)
    result += '<div>' + item.name + ' | ' + item.value + ' ' + item.unit + '</div>' ;
  });
  document.getElementById('foodsByGroup').innerHTML = result;
}

export {getNutritionData}
