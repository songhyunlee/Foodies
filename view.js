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

for (var i = 0; i < reviews.length; i++) {
  reviews[i]
  var infobox = document.createElement('div');
  var row = document.createElement('div');
  var image = document.createElement('p');
  var food = document.createElement('img');
  var addbox = document.createElement('div');
  var address = document.createElement('div');
  var phone = document.createElement('div')
  var info = document.createElement('div');
  var biz = document.createElement('h4');
  var rating = document.createElement('div');
  var score = document.createElement('div');
  var description = document.createElement('div');
  var theButton = document.createElement('button');
  var area = document.createElement('div');
  var thePanel = document.createElement('div');
  var panelHeading = document.createElement('div');
  var panelBody = document.createElement('div');
  area.setAttribute('class', 'area');
  thePanel.setAttribute('class', 'panel panel-success hide');
  panelHeading.setAttribute('class', 'panel-heading');
  panelBody.setAttribute('class', 'panel-body');
  infobox.setAttribute('class', 'infobox');
  row.setAttribute('class', 'row');
  image.setAttribute('class', 'col-xs-3');
  food.setAttribute('src', reviews[i].image);
  food.setAttribute('class', 'img-responsive');
  addbox.setAttribute('class', 'addbox col-xs-3');
  address.textContent = reviews[i].address;
  phone.textContent = reviews[i].phone;
  info.setAttribute('class', 'info col-xs-6');
  biz.setAttribute('class', 'biz');
  biz.textContent = reviews[i].biz;
  score.textContent = "Rating: " + reviews[i].rating ;
  description.setAttribute('class', 'description');
  description.textContent = reviews[i].description ;
  theButton.setAttribute('class', 'btn btn-default btn-sm center-block');
  theButton.setAttribute('id', reviews[i].id);
  theButton.textContent = "Reviews";
  var restaurants = document.getElementsByClassName('high')[0];
  restaurants.appendChild(infobox);
  infobox.appendChild(row);
  row.appendChild(image);
  row.appendChild(info);
  row.appendChild(addbox);
  info.appendChild(biz);
  info.appendChild(rating);
  info.appendChild(description);
  image.appendChild(food);
  addbox.appendChild(address);
  addbox.appendChild(phone);
  rating.appendChild(score);
  infobox.appendChild(theButton);
  infobox.appendChild(area);
  area.appendChild(thePanel);
  thePanel.appendChild(panelHeading);
  thePanel.appendChild(panelBody);
}

// Create HTML elements out of the reviews.

function get(reviews) {
  var set = [];
  for (var i = 0; i < reviews.review.length; i++) {
    var theReview = document.createElement('div');
    theReview.textContent = reviews.review[i];
    set.push(theReview);
  }
  return set;
}

//Hide and show thePanel (reviews) when the button is clicked.
// function show(hide) {
//      var hide = document.getElementById('hide');
//      if(hide.style.display == 'none')
//         hide.style.display = 'block';
//      else
//         hide.style.display = 'none';
//   }

function addReviews(theEvent) {
var buttonId = theEvent.target.getAttribute('id');
  for (var i = 0; i < reviews.length; i++) {

    if (reviews[i].id == buttonId) {

      var list = get(reviews[i]);
      var infobox = theEvent.target.parentNode;

      for (var i = 0; i < list.length; i++) {
        var message = infobox.getElementsByClassName('panel-body')[0];
        message.appendChild(list[i]);
      }

    }
  }
}

var clicked = document.querySelectorAll('button.btn-sm');

for (var j=0; j < clicked.length; j++) {
  clicked[j].addEventListener('click', addReviews);
  // clicked[j].addEventListener('click', show);  **to hide/show thePanel
}
