import message from './message';
import foodGrid from './views/food_categories';
import {apiSearch, apiGroups} from  './utils/apiSearch';
import {sendRequest, requestResponse} from  './utils/getApi';

const queryGroups = apiGroups();
const info = document.getElementById('info');
const app = document.getElementById('app');
const getApiButton = document.getElementById('getApiBtn');
const getButtonFoodSearch = document.getElementById('buttonFoodSearch');
const getFoodGroups = sendRequest(queryGroups);
const response = document.getElementById('response');


getApiButton.addEventListener('click', function(){
  //console.log('click', requestResponse);
  response.innerHTML = requestResponse;
});

buttonFoodSearch.addEventListener('click', function(ev){
  ev.preventDefault();
  let searchValue = $('#foodSearch').find('input').val();
  let apiSearchUrl = apiSearch(searchValue);
  apiResult();
  function apiResult(){
    sendRequest(apiSearchUrl);
    console.log(apiSearchUrl, apiResult);
  };


});



// formFoodGroup.addEventListener('click', function(){
//   console.log(this);
// });

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
