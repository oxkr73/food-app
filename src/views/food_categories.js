import getApi from '../utils/getApi';


/*let foodItems = [];
for (var i = 0; i < getApi.length; i++) {
    foodItems.push('<label for="foodCat-'+i+'"><input type="radio" name="foodCat" id="foodCat-'+i+'" value="foodCat-'+i+'">'+ getApi[i] +'</label>');
}

console.log(foodItems);

const foodGrid = '<form class="" action="" method="post">form ' + foodItems.join('') + '</form>';*/

const foodGrid =
`<form class="" action="" method="post">
  <label for="foodCat-1">
    <input type="radio" name="foodCat" id="foodCat-1" value="foodCat-1">
    food-1
  </label>
  <label for="foodCat-2">
    <input type="radio" name="foodCat" id="foodCat-2" value="foodCat-2">
    food-2
  </label>
  <label for="foodCat-3">
    <input type="radio" name="foodCat" id="foodCat-3" value="foodCat-3">
    food-3
  </label>
  <label for="foodCat-4">
    <input type="radio" name="foodCat" id="foodCat-4" value="foodCat-4">
    food-4
  </label>
  <label for="foodCat-5">
    <input type="radio" name="foodCat" id="foodCat-5" value="foodCat-5">
    food-5
  </label>
  <label for="foodCat-6">
    <input type="radio" name="foodCat" id="foodCat-6" value="foodCat-6">
    food-6
  </label>
</form>`;

export default foodGrid;
