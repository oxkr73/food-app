function apiSearch(food) {
  let usdaId = '8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J';
  let usdaUrl = 'https://api.nal.usda.gov/ndb/';
  let foodName = food;
  let urlQueryFoods = `${usdaUrl}search/?format=json&q=${foodName}&sort=n&max=15&offset=0&fg=2000&amp;lt=f&api_key=${usdaId}`;

  return urlQueryFoods;
}

function apiGroups() {
  let usdaId = '8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J';
  let usdaUrl = 'https://api.nal.usda.gov/ndb/';
  let urlQueryGroups = usdaUrl + 'list?format=json&lt=g&sort=n&api_key=' + usdaId;

  return urlQueryGroups;
}

export {apiSearch, apiGroups};
// groups list
// https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J

// https://api.nal.usda.gov/ndb/search/?format=json&q=rice&sort=n&max=15&offset=0&fg=2000&api_key=8cjUgt6qXK0aWcQif1iSBh11IIfD4b1jLhxc1F6J
