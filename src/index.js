import message from './message';
import foodGrid from './views/food_categories';
import {apiSearch, apiGroups} from  './utils/apiSearch';
import getApi from  './utils/getApi';

const queryGroups = apiGroups();
const info = document.getElementById('info');
const app = document.getElementById('app');
const getApiButton = document.getElementById('getApi');
const response = document.getElementById('response');

//info.innerHTML =  message;

getApiButton.addEventListener('click', function(){

  let foodList = getApi();
  console.log(getApi());
//  response.innerHTML = foodList;

});

/*function getApi(){
//console.log('getApi call', message);
let req = new XMLHttpRequest();
req.open('GET', message, true);
req.send();
req.onreadystatechange = function (aEvt) {
console.log(req.readyState);
if (req.readyState == 4) {
if(req.status == 200){
let responseItems = JSON.parse(req.responseText);
let foodItems = [];
for (var i = 0; i < responseItems.list.item.length; i++) {
foodItems.push(responseItems.list.item[i].name);
}
response.innerHTML = foodItems;
return foodItems;
} else {
console.log("Error loading page\n");
}
}
};
}*/
