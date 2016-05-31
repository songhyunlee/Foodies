var reviews = [
  {
    food: 'american',
    name: 'Cheezboard',
    reviewer: 'Sarah Anderson',
    review: 'The best vegetarian pizza I have ever had.',
    rating: '5'
  },
  {
    food: 'asian',
    name: 'Great China',
    reviewer: 'John Doe',
    review: 'The food in general was all good, but the service was not that great.',
    rating: 4
  },
  {
    food: 'seafood',
    name: 'Oh Oyster',
    reviewer: 'Jen Kim',
    review: 'I ordered the daily special, but the oysters were not fresh at all.',
    rating: 2
  },
  {
    food: 'italian',
    name: 'Siciliana',
    reviewer: 'Ken Peterson',
    review: 'I do not understand why people line up for this place. It was okay.',
    rating: 3
  },
  {
    food: 'asian',
    name: 'Baekjung',
    reviewer: 'Remmy Smith',
    review: 'Korean BBQ. Sooo good. I definitely want to go back again.',
    rating: 5
  },
  {
    food: 'asian',
    name: 'Sushi Sushi',
    reviewer: 'Jim Miller',
    review: 'Very low quality. I would rather get sushi from Wholefoods.',
    rating: 1
  },
  {
    food: 'mexican',
    name: 'Tacos o Burritos',
    reviewer: 'Tucker Venditozzi',
    review: 'My favorite burritos in town. They should put more meat in them, though.',
    rating: 4
  },
  {
    food: 'foodtruck',
    name: 'Grab N Go',
    reviewer: 'Fred Huang',
    review: 'You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.',
    rating: 5
  },
  {
    food: 'dessert',
    name: 'Matcha Heaven',
    reviewer: 'Pooja Shah',
    review: 'All their dessert is made with green tea. If you like matcha, this is your place for dessert.',
    rating: 4
  },
  {
    food: 'dessert',
    name: 'Coffee-to-go',
    reviewer: 'Bri Angotti',
    review: 'Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.',
    rating: 1
  },
]

var theButton = document.getElementById('search');
theButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  console.log((term.value, reviews));
});

function fullMatch(term) {
  for (var i = 0; i < reviews.length; i++) {
    if (term === reviews[i].name) {
      return reviews[i].name;
    }
    if (term === reviews[i].food) {
      return reviews[i].name;
    }
  }

  return false;
}

function partialMatch(term) {
  var suggestions = [];

  for (var i =0; i < reviews.length; i++) {
  if (reviews[i].name.indexOf(term) !== -1) {
    return(reviews[i]);
  }
  if (reviews[i].food.indexOf(term) !== -1) {
    return(reviews[i]);
  }
};

  if(suggestions) {
    return suggestions;
  } else {
    return false;
  }
}

var myElement = document.getElementById('search')
myElement.addEventListener('click', function search(Event) {
    var term = document.getElementById('term');
    var matched = fullMatch(term.value);
    var part = partialMatch(term.value);
    var item = document.createElement('p');
    if (matched) {
      item.textContent = matched + " has a rating of " + matched.rating;
    } if (part) {
        var suggestions = partialMatch(term.value);
        console.log(suggestions)
        item.textContent = "did you mean " + "'" + part.name + "'" + "?"
    } else {
      item.textContent = "No review found."
    }
    document.body.appendChild(item);
});
