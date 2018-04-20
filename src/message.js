import UserId from './utils/userId';
import {apiSearch, apiGroups} from  './utils/apiSearch';

let userId = UserId();
let querySearch = apiSearch('rice');
let queryGroups = apiGroups();
//console.log(querySearch, queryGroups);

/*export default `Hello, your ID: ${userId} <br>
welcome to the Nutri App <br>
your query is: <a href="${queryGroups}">${queryGroups}</a>`;*/

export default queryGroups;
