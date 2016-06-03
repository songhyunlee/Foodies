var reviews = [
  {
    food: 'american',
    biz: 'Cheezboard',
    description: 'Vegetarian pizzeria serving different pizza everyday...',
    reviewer: ['Sarah Anderson', 'Two', 'Three'],
    review: ['The best vegetarian pizza I have ever had.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cheezboard',
    image: "cheezboard.jpg",
  },
  {
    food: 'chinese',
    biz: 'Great China',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['Delicious food, excellent service','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'greatchina',
    image: 'greatchina.jpeg',
  },
  {
    food: 'seafood',
    biz: 'Oh Oyster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['I ordered the daily special, but the oysters were not fresh at all.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 2,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'seafood',
    image: 'oysters.jpeg',
  },
  {
    food: 'italian',
    biz: 'Siciliana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['I do not understand why people line up for this place. It was okay.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 3,
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'italian',
    image: 'siciliana.jpg',
  },
  {
    food: 'korean',
    biz: 'Baekjung',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['Korean BBQ. Sooo good. I definitely want to go back again.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'korean',
    image: 'baekjung.jpg',
  },
  {
    food: 'japanese',
    biz: 'Sushi Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['Very low quality. I would rather get sushi from Wholefoods.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 1,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'italian',
    image: 'sushi.jpg',
  },
  {
    food: 'mexican',
    biz: 'Tacos o Burritos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['My favorite burritos in town. They should put more meat in them, though.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'tacos',
    image: 'burritos.jpg',
  },
  {
    food: 'foodtruck',
    biz: 'Grab N Go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'truck',
    image: 'foodtruck.jpg',
  },
  {
    food: 'dessert',
    biz: 'Matcha Heaven',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['All their dessert is made with green tea. If you like matcha, this is your place for dessert.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'heaven',
    image: 'matcha.jpeg',
  },
  {
    food: 'coffee',
    biz: 'Coffee-to-go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
    review: ['Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 1,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cafe',
    image: 'coffee.jpg',
  },
]

function fullMatch(term) {
  for (var i = 0; i < reviews.length; i++) {
    if (term === reviews[i].biz) {
      return reviews[i];
    }
    if (term === reviews[i].food) {
      return reviews[i];
    }
  }

  return false;
}

function partialMatch(term) {
  var suggestions = [];

  for (var i =0; i < reviews.length; i++) {
  if (reviews[i].biz.indexOf(term) !== -1) {
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

  var term = document.getElementById('term');
  var matched = fullMatch(term.value);
  var part = partialMatch(term.value);
  var item = document.createElement('div');
  var thePanel = document.createElement('div');
  var panelHeading = document.createElement('div');
  var panelBody = document.createElement('div');
  thePanel.setAttribute('class', 'panel panel-success');
  panelHeading.setAttribute('class', 'panel-heading');
  panelBody.setAttribute('class', 'panel-body');
  item.setAttribute('class', 'results');
  thePanel.appendChild(panelHeading);
  thePanel.appendChild(panelBody);
  item.appendChild(thePanel);
  if ( matched ) {
    panelHeading.textContent = "Showing results for: " + "'"+term.value +"'. " ;
    panelBody.textContent = matched.biz + " has a rating of " + matched.rating + ".";
  } else if (part) {
      var suggestions = partialMatch(term.value);
      panelHeading.textContent = "Showing results for: " + "'"+term.value +"'. " ;
      panelBody.textContent = "did you mean " + "'" + part[0].biz + "'" + "?"
  } else {
    panelHeading.textContent = "Showing results for: " + "'"+term.value +"'. " ;
    panelBody.textContent = "No review found."
  }
  var position = document.getElementById('results');
  position.appendChild(item);
});




//Change below function to use when the user searches for another restaurant:
// var removeEl = document.getElementsByClassName('container recommended')[0];
// var containerEl = removeEl.parentNode;
// containerEl.removeChild(removeEl);
