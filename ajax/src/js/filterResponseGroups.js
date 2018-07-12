import {getAjax} from  './ajaxRequest';
import {getAllDataByGroup} from  './getAllDataByGroup';

function filterResponseGroups (xhttp){
  const showGroups = ['1300','1400','2000','0100','0400','1500','0900','1700','1600','2200','1200','1000','1900','1100'];
  var response = JSON.parse(xhttp);
  var items = response.list.item;
  var result = '<form class="row" action="" method="post" id="form-groups">';

  items.forEach(function(item, i){
    showGroups.forEach( function(elem, j){
      if (elem == item.id ){
        result += `<label for="${item.id}" class="col-12">
                        <h6>${item.name}</h6>
                        <input type="radio" id="${item.id}" name="group" value="${item.id}">
                  </label>`;
      }
    });
  });

  // result += '<button type="submit">submit</button>';
  result += '</form><hr>';
  result += '<div id="foodsByGroup"></div>';

  document.getElementById('filtered-groups').innerHTML = result;
  return eventGroupsForm();
}

function eventGroupsForm(){
  var formGroups = document.getElementById('form-groups');
  formGroups.addEventListener('change', function(ev){
    ev.preventDefault();
    var groupSelected = this.elements['group'].value;
    var urlDataGroup = 'https://api.nal.usda.gov/ndb/search/?format=json&fg='+groupSelected+'&sort=n&max=1000&api_key=8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J';
    return getAjax(urlDataGroup, getAllDataByGroup);
  });
}


export {filterResponseGroups};
