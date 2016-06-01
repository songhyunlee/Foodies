var reviews = [
  {
    food: 'american',
    name: 'Cheezboard',
    reviewer: 'Sarah Anderson',
    review: 'The best vegetarian pizza I have ever had.',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612'
    phone: '949-567-8901',
    id: 'cheezboard',
  },
  {
    food: 'chinese',
    name: 'Great China',
    reviewer: 'John Doe',
    review: 'Delicious food, excellent service',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'greatchina',
  },
  {
    food: 'seafood',
    name: 'Oh Oyster',
    reviewer: 'Jen Kim',
    review: 'I ordered the daily special, but the oysters were not fresh at all.',
    rating: 2,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'seafood',
  },
  {
    food: 'italian',
    name: 'Siciliana',
    reviewer: 'Ken Peterson',
    review: 'I do not understand why people line up for this place. It was okay.',
    rating: 3
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'italian',
  },
  {
    food: 'korean',
    name: 'Baekjung',
    reviewer: 'Remmy Smith',
    review: 'Korean BBQ. Sooo good. I definitely want to go back again.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'korean',
  },
  {
    food: 'japanese',
    name: 'Sushi Sushi',
    reviewer: 'Jim Miller',
    review: 'Very low quality. I would rather get sushi from Wholefoods.',
    rating: 1,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901'
    id: 'italian',
  },
  {
    food: 'mexican',
    name: 'Tacos o Burritos',
    reviewer: 'Tucker Venditozzi',
    review: 'My favorite burritos in town. They should put more meat in them, though.',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'tacos',
  },
  {
    food: 'foodtruck',
    name: 'Grab N Go',
    reviewer: 'Fred Huang',
    review: 'You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'truck',
  },
  {
    food: 'dessert',
    name: 'Matcha Heaven',
    reviewer: 'Pooja Shah',
    review: 'All their dessert is made with green tea. If you like matcha, this is your place for dessert.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'heaven',
  },
  {
    food: 'coffee',
    name: 'Coffee-to-go',
    reviewer: 'Bri Angotti',
    review: 'Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.',
    rating: 1,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cafe',
  },
]

function partialMatch(term) {
  var suggestions = [];

  for (var i =0; i < reviews.length; i++) {
  if (reviews[i].name.indexOf(term) !== -1) {
    suggestions.push(reviews[i]);
  }
  if (reviews[i].food.indexOf(term) !== -1) {
    suggestions.push(reviews[i]);
  }
};

  if(suggestions.length > 0) {
    return suggestions;
  } else {
    return false;
  }
}

var myElement = document.getElementById('search')
myElement.addEventListener('click', function search(Event) {
  var removeEl = document.getElementsByClassName('container recommended')[0];
  var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
  var term = document.getElementById('term');
  var matched = fullMatch(term.value);
  var part = partialMatch(term.value);
  var item = document.createElement('p');
  if ( matched ) {
    item.textContent = "You've searched for: " + "'"+term.value +"'. " + matched.name + " has a rating of " + matched.rating + ".";
  } else if (part) {
      var suggestions = partialMatch(term.value);
      item.textContent = "did you mean " + "'" + part[0].name + "'" + "?"
  } else {
    item.textContent = "No review found."
  }
  var position = document.getElementsByClassName('results')[0];
  position.appendChild(item);
});
