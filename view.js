var reviews = [
  {
    food: 'american',
    biz: 'Cheezboard',
    description: 'Vegetarian pizzeria serving different pizza everyday...',
    reviewer: 'Sarah Anderson',
    review: 'The best vegetarian pizza I have ever had.',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cheezboard',
    image: "cheezboard.jpg",
  },
  {
    food: 'chinese',
    biz: 'Great China',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'John Doe',
    review: 'Delicious food, excellent service',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'greatchina',
    image: 'greatchina.jpeg',
  },
  {
    food: 'seafood',
    biz: 'Oh Oyster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Jen Kim',
    review: 'I ordered the daily special, but the oysters were not fresh at all.',
    rating: 2,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'seafood',
    image: 'oysters.jpeg',
  },
  {
    food: 'italian',
    biz: 'Siciliana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Ken Peterson',
    review: 'I do not understand why people line up for this place. It was okay.',
    rating: 3,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'italian',
    image: 'siciliana.jpg',
  },
  {
    food: 'korean',
    biz: 'Baekjung',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Remmy Smith',
    review: 'Korean BBQ. Sooo good. I definitely want to go back again.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'korean',
    image: 'baekjung.jpg',
  },
  {
    food: 'japanese',
    biz: 'Sushi Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Jim Miller',
    review: 'Very low quality. I would rather get sushi from Wholefoods.',
    rating: 1,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'italian',
    image: 'sushi.jpg',
  },
  {
    food: 'mexican',
    biz: 'Tacos o Burritos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Tucker Venditozzi',
    review: 'My favorite burritos in town. They should put more meat in them, though.',
    rating: 5,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'tacos',
    image: 'burritos.jpg',
  },
  {
    food: 'foodtruck',
    biz: 'Grab N Go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Fred Huang',
    review: 'You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'truck',
    image: 'foodtruck.jpg',
  },
  {
    food: 'dessert',
    biz: 'Matcha Heaven',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: 'Pooja Shah',
    review: 'All their dessert is made with green tea. If you like matcha, this is your place for dessert.',
    rating: 4,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'heaven',
    image: 'matcha.jpeg',
  },
  {
    food: 'coffee',
    biz: 'Coffee-to-go',
    reviewer: 'Bri Angotti',
    review: 'Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.',
    rating: 1,
    address: '6571 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cafe',
    image: 'coffee.jpg',
  },
]
// <div class="infobox cheezboard">
//   <div class="row">
//     <p>
//       <img src="cheezboard.jpg" align="left" id="restaurantimg">
//     </p>
//     <p class="clear address">6571 Culver Dr, Irvine, CA 92612 <br/> 949-567-8901</p>
//     <h4 class="restaurants"> Cheezboard </h4>
//     <div class="row">
//       <div class="rating"> Rating: 5</div>
//       <p class="description"> Vegetarian pizzeria serving different pizza everyday... </p>
//     </div>
//     <button id="cheezboard" class="btn btn-default btn-sm center-block" type="button">Reviews</button>
//     <div class="area"></div>
// </div>
for (var i = 0; i < reviews.length; i++) {
  reviews[i]
  var infobox = document.createElement('div');
  var row = document.createElement('div');
  var imageRest = document.createElement('p');
  var food = document.createElement('img');
  var addbox = document.createElement('div');
  var address = document.createElement('div');
  var phone = document.createElement('div')
  var biz = document.createElement('h4');
  var rating = document.createElement('div');
  var score = document.createElement('div');
  var description = document.createElement('p');
  var theButton = document.createElement('button');
  infobox.setAttribute('class', 'infobox');
  row.setAttribute('class', 'row');
  imageRest.setAttribute('class', 'imageRest');
  food.setAttribute('src', reviews[i].image);
  food.setAttribute('class', 'img-responsive');
  addbox.setAttribute('class', 'div');
  address.setAttribute('class','address');
  phone.setAttribute('class','phone');
  biz.setAttribute('class', 'biz');
  rating.setAttribute('class', 'row');
  score.setAttribute('class', 'div');
  description.setAttribute('class', 'description');
  theButton.setAttribute('class', 'btn btn-default btn-sm center-block');
  var restaurants = document.getElementsByClassName('high')[0];
  restaurants.appendChild(infobox);
  infobox.appendChild(row);
  infobox.appendChild(image);
  infobox.appendChild(addbox);
  infobox.appendChild(biz);
  infobox.appendChild(rating);
  infobox.appendChild(description);
  infobox.appendChild(theButton);
  row.appendChild(image);
  imageRest.appendChild(food);
  addbox.appendChild(address);
  addbox.appendChild(phone);
  rating.appendChild(score);
}
var myElement = document.getElementById('cheezboard')
myElement.addEventListener('click', function view(items, area) {
  var item = document.createElement('p');
  item.textContent = reviews[0].reviewer + " said: " + "'"+ reviews[0].review + "'";
  var area = document.getElementsByClassName('area')[0];
  clear(area);
  area.appendChild(item);
});

function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}
