import {apiSearch, apiGroups} from  './apiSearch';

let urlQuery = apiGroups();
console.log('urlQuery '+ urlQuery);

function getApi(){
  let req = new XMLHttpRequest();
  req.open('GET', urlQuery, true);
  req.send();
  req.onreadystatechange = function (aEvt) {
    console.log(req.readyState);
    if (req.readyState == 4) {
      if(req.status == 200){
        let responseItems = JSON.parse(req.responseText);
        let foodItems = [];
        for (var i = 0; i < responseItems.list.item.length; i++) {
          foodItems.push('<label for="foodCat-'+i+'"><input type="radio" name="foodCat" id="foodCat-'+i+'" value="foodCat-'+i+'">'+ responseItems.list.item[i].name +'</label>');
        }
        let foodForm = '<form class="" action="" method="post">form ' + foodItems.join('') + '</form>';
        response.innerHTML = foodForm;
        return responseItems.list.item;
      } else {
        console.log("Error loading page\n");
      }
    }
  };
}

export default getApi;
