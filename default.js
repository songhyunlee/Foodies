var reviews = [
  {
    food: 'American',
    biz: 'Cheezboard',
    description: 'Vegetarian pizzeria serving different pizza everyday...',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['The best vegetarian pizza I have ever had.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cheezboard',
    image: "cheezboard.jpg",
  },
  {
    food: 'Chinese',
    biz: 'Great China',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['Delicious food, excellent service','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'greatchina',
    image: 'greatchina.jpeg',
  },
  {
    food: 'Seafood',
    biz: 'Oh Oyster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['I ordered the daily special, but the oysters were not fresh at all.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 2,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'seafood',
    image: 'oysters.jpeg',
  },
  {
    food: 'Italian',
    biz: 'Siciliana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['I do not understand why people line up for this place. It was okay.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 3,
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'italian',
    image: 'siciliana.jpg',
  },
  {
    food: 'Korean',
    biz: 'Baekjung',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['Korean BBQ. Sooo good. I definitely want to go back again.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'korean',
    image: 'baekjung.jpg',
  },
  {
    food: 'Japanese',
    biz: 'Sushi Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['Very low quality. I would rather get sushi from Wholefoods.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 1,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'italian',
    image: 'sushi.jpg',
  },
  {
    food: 'Mexican',
    biz: 'Tacos o Burritos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['My favorite burritos in town. They should put more meat in them, though.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 5,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'tacos',
    image: 'burritos.jpg',
  },
  {
    food: 'Food truck',
    biz: 'Grab N Go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'truck',
    image: 'foodtruck.jpg',
  },
  {
    food: 'Dessert',
    biz: 'Matcha Heaven',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['All their dessert is made with green tea. If you like matcha, this is your place for dessert.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 4,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'heaven',
    image: 'matcha.jpeg',
  },
  {
    food: 'Coffee',
    biz: 'Coffee-to-go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: 1,
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cafe',
    image: 'coffee.jpg',
  },
]

// Run two types of searches using the term.
function homeSearch(term) {
  var suggestions = [];

  var match = fullMatch(term);
  if (match) {
    suggestions.push(match);
  }

  if ( suggestions.length < 1) {
    suggestions = partialMatch(term);
  }

  function fullMatch(term) {
    for (var i = 0; i < reviews.length; i++) {
      if (term === reviews[i].biz) {
        return reviews[i];
      }
      if (term === reviews[i].food) {
        return reviews[i];
      }
    }
  }

  function partialMatch(term) {
    var results = [];
    for (var i =0; i < reviews.length; i++) {
      if (reviews[i].biz.indexOf(term) !== -1) {
        results.push(reviews[i]);
      }
      if (reviews[i].food.indexOf(term) !== -1) {
        results.push(reviews[i]);
      }
    };

    if(results.length > 0) {
      return results;
    } else {
      return false;
    }
  }

  if (suggestions.length > 0) {
    return suggestions;
  };
}

function restaurant(item) {
  var thePanel = document.createElement('div');
  var panelHeading = document.createElement('div');
  var panelBody = document.createElement('div');
  var panelSub = document.createElement('div');

  thePanel.setAttribute('class', 'panel panel-success');
  panelHeading.setAttribute('class', 'panel-heading');
  panelBody.setAttribute('class', 'panel-body');
  panelSub.setAttribute('class', 'panel-body');
  thePanel.appendChild(panelHeading);
  thePanel.appendChild(panelBody);

  var bizName = document.createElement('h4');
  bizName.textContent = item.biz;
  bizName.setAttribute('class', 'biz');

  var rateStar = document.createElement('div');
  rateStar.setAttribute('class', 'rateStar');

  var bizCategory = document.createElement('div');
  bizCategory.textContent = "Category: " + item.food;
  bizCategory.setAttribute('class', 'category');

  var bizAbout = document.createElement('div');
  bizAbout.textContent = item.description;
  bizAbout.setAttribute('class', 'about');

  var bizWhere = document.createElement('div');
  bizWhere.textContent = item.address;
  bizWhere.setAttribute('class', 'addbox');

  var bizNumber = document.createElement('div');
  bizNumber.textContent = item.phone;
  bizNumber.setAttribute('class', 'addbox');

  var theButton = document.createElement('button');
  theButton.setAttribute('class', 'btn btn-default btn-sm center-block');
  theButton.textContent = 'Reviews';
  theButton.setAttribute('id', item.id);

  panelBody.appendChild(bizName);
  panelBody.appendChild(rateStar);
  panelBody.appendChild(bizCategory);
  panelBody.appendChild(bizWhere);
  panelBody.appendChild(bizNumber);
  panelBody.appendChild(bizAbout);
  panelBody.appendChild(panelSub);
  panelBody.appendChild(theButton);

  var allStars = thePanel.getElementsByClassName('rateStar')[0];
  for (var i = 0; i < item.rating; i++) {
    var theStar = document.createElement('i');
    theStar.setAttribute('class', 'fa fa-star');
    rateStar.appendChild(theStar);
  }

  return thePanel;
}

function showResults(e) {
  // Search for restaurants that match the term.
  var term = document.getElementById('term').value;
  var matches = homeSearch(term);

  var heading = document.createElement('h4');
  heading.textContent = "Showing results for: ''" + term + "'.";

  var results = document.getElementById('results');
  results.appendChild(heading);
  for (var i = 0; i < matches.length; i++) {
    theRestaurant = restaurant(matches[i]);
    results.appendChild(theRestaurant);
  }
}

//Listen for the click on the 'find' button.
var myElement = document.getElementById('find');
myElement.addEventListener('click', showResults);

var term = document.getElementById("term")
term.addEventListener("keydown", function(e) {
  if (event.keyCode === 13) {
    showResults(e);
  }
});

btnClicked = document.getElementById('results');
btnClicked.addEventListener('click', function(e) {
  console.log(btnClicked);
  swap('current', 'reviews');
  console.log(e.target.getAttribute('id'));

  var theContainer = document.getElementById('reviews');
  console.log(reviews.length);
  for (var i = 0; i < reviews.length; i++) {

    var buttonId = e.target.getAttribute('id');
    if (buttonId == reviews[i].id) {
      console.log('here');
      var infobox = document.createElement('div');
      var row = document.createElement('div');
      var image = document.createElement('p');
      var food = document.createElement('img');
      var addbox = document.createElement('div');
      var address = document.createElement('div');
      var phone = document.createElement('div')
      var info = document.createElement('div');
      var biz = document.createElement('h2');
      var rateStar = document.createElement('div');
      var description = document.createElement('div');

      infobox.setAttribute('class', 'infobox  col-xs-offset-2');
      row.setAttribute('class', 'row');
      image.setAttribute('class', 'col-xs-3');
      image.setAttribute('id', 'restaurantimg')
      food.setAttribute('src', reviews[i].image);
      food.setAttribute('class', 'img-responsive img-rounded');
      addbox.setAttribute('class', 'addbox col-xs-3');
      address.textContent = reviews[i].address;
      phone.textContent = reviews[i].phone;
      info.setAttribute('class', 'info col-xs-6');
      biz.setAttribute('class', 'biz');
      biz.textContent = reviews[i].biz;
      description.setAttribute('class', 'description');
      description.textContent = reviews[i].description;


      var reviewBox = document.createElement('div');
      reviewBox.setAttribute('class', 'row reviewbox');
      var reviewOne = document.createElement('div');
      var reviewTwo = document.createElement('div');
      var reviewThree = document.createElement('div');
      reviewOne.textContent = "'" + reviews[i].review[0];
      reviewTwo.textContent = "'" + reviews[i].review[1];
      reviewThree.textContent = "'" + reviews[i].review[2];

      theContainer.appendChild(row);
      row.appendChild(image);
      row.appendChild(info);
      row.appendChild(addbox);
      theContainer.appendChild(description);
      theContainer.appendChild(reviewBox);
      reviewBox.appendChild(reviewOne);
      reviewBox.appendChild(reviewTwo);
      reviewBox.appendChild(reviewThree);

      info.appendChild(biz);
      info.appendChild(rateStar);
      image.appendChild(food);
      addbox.appendChild(address);
      addbox.appendChild(phone);

      rateStar.setAttribute('class', 'rateStar');
      var allStars = info.getElementsByClassName('rateStar')[0];
      for (var i = 0; i < reviews[i].rating; i++) {
        var theStar = document.createElement('i');
        theStar.setAttribute('class', 'fa fa-star');
        rateStar.appendChild(theStar);
      };
    }
  };
  });

function swap(current, next) {
  var theCurrent = document.getElementsByClassName(current)[0];
  theCurrent.classList.remove('current');
  theCurrent.classList.add('hide');

  var theNext = document.getElementById(next);
  theNext.classList.add('current');
  theNext.classList.remove('hide');
}



// Add a review button to each restaurant.
// Wait for clicks on the button. Then hide the search results and show the reviews page.


// //---#1 'Search for Reviews' Ends---//
//
// //Listen for the click of the 'reviews' button to lead to a page of reviews.
// document.getElementById('allReviews').addEventListener('click', function reviewPage() {
//   //First clear body except header.
//
//   var containerEl = document.getElementById('searchbox');
//   while (containerEl.firstChild) {
//     containerEl.removeChild(containerEl.firstChild);
//   };
//
//   var listArea = document.getElementById('new');
//   var reviewHeader = document.createElement('h1');
//   reviewHeader.textContent = 'Restaurant Reviews';
//   listArea.appendChild(reviewHeader);
//
//   //Then create the elements.
//   for (var i = 0; i < reviews.length; i++) {
//
//     var infobox = document.createElement('div');
//     var row = document.createElement('div');
//     var image = document.createElement('p');
//     var food = document.createElement('img');
//     var addbox = document.createElement('div');
//     var address = document.createElement('div');
//     var phone = document.createElement('div')
//     var info = document.createElement('div');
//     var biz = document.createElement('h3');
//     var rateStar = document.createElement('div');
//     var description = document.createElement('div');
//     var addButton = document.createElement('button');
//
//     infobox.setAttribute('class', 'infobox  col-xs-offset-2');
//     row.setAttribute('class', 'row');
//     image.setAttribute('class', 'col-xs-3');
//     image.setAttribute('id', 'restaurantimg')
//     food.setAttribute('src', reviews[i].image);
//     food.setAttribute('class', 'img-responsive img-rounded');
//     addbox.setAttribute('class', 'addbox col-xs-3');
//     address.textContent = reviews[i].address;
//     phone.textContent = reviews[i].phone;
//     info.setAttribute('class', 'info col-xs-6');
//     biz.setAttribute('class', 'biz');
//     biz.textContent = reviews[i].biz;
//     description.setAttribute('class', 'description');
//     description.textContent = reviews[i].description;
//     addButton.setAttribute('class','btn btn-default btn-sm center-block');
//     addButton.textContent = 'Add a Review';
//     addButton.setAttribute('id', reviews[i].id);
//
//     var reviewBox = document.createElement('div');
//     reviewBox.setAttribute('class', 'row reviewbox');
//     var reviewOne = document.createElement('div');
//     var reviewTwo = document.createElement('div');
//     var reviewThree = document.createElement('div');
//     reviewOne.textContent = "'" + reviews[i].review[0] + "'" + " - " + reviews[i].reviewer[0];
//     reviewTwo.textContent = "'" + reviews[i].review[1] + "'" + " - " + reviews[i].reviewer[1];
//     reviewThree.textContent = "'" + reviews[i].review[2] + "'" + " - " + reviews[i].reviewer[2];
//
//     listArea.appendChild(infobox);
//     infobox.appendChild(row);
//     row.appendChild(image);
//     row.appendChild(info);
//     row.appendChild(addbox);
//     infobox.appendChild(description);
//     infobox.appendChild(reviewBox);
//     reviewBox.appendChild(reviewOne);
//     reviewBox.appendChild(reviewTwo);
//     reviewBox.appendChild(reviewThree);
//     infobox.appendChild(addButton);
//
//     info.appendChild(biz);
//     info.appendChild(rateStar);
//     image.appendChild(food);
//     addbox.appendChild(address);
//     addbox.appendChild(phone);
//
//     rateStar.setAttribute('class', 'rateStar');
//     var starOne = document.createElement('i');
//     starOne.setAttribute('class', 'fa fa-star');
//     var starTwo = document.createElement('i');
//     starTwo.setAttribute('class', 'fa fa-star');
//     var starThree = document.createElement('i');
//     starThree.setAttribute('class', 'fa fa-star');
//     var starFour = document.createElement('i');
//     starFour.setAttribute('class', 'fa fa-star');
//     var starFive = document.createElement('i');
//     starFive.setAttribute('class', 'fa fa-star');
//
//     if (reviews[i].rating === 5) {
//       rateStar.appendChild(starOne);
//       rateStar.appendChild(starTwo);
//       rateStar.appendChild(starThree);
//       rateStar.appendChild(starFour);
//       rateStar.appendChild(starFive);
//     } else if (reviews[i].rating === 4) {
//       rateStar.appendChild(starOne);
//       rateStar.appendChild(starTwo);
//       rateStar.appendChild(starThree);
//       rateStar.appendChild(starFour);
//     } else if (reviews[i].rating === 3) {
//       rateStar.appendChild(starOne);
//       rateStar.appendChild(starTwo);
//       rateStar.appendChild(starThree);
//     } else if (reviews[i].rating === 2) {
//       rateStar.appendChild(starOne);
//       rateStar.appendChild(starTwo);
//     } else if (reviews[i].rating === 1) {
//       rateStar.appendChild(starOne);
//     };
//   };
//
//   var clicked = document.querySelectorAll('button.btn-sm');
//
//   for (var j=0; j < clicked.length; j++) {
//     clicked[j].addEventListener('click', addText);
//   };
//
//   function addText(theEvent) {
//
//     var infobox = theEvent.target.parentNode;
//     var textBox = document.createElement('textarea');
//     var submitButton = document.createElement('button');
//
//     textBox.setAttribute('class', 'form-control');
//     textBox.setAttribute('rows', '5');
//     textBox.setAttribute('placeholder', 'Start writing your review here...');
//
//     submitButton.textContent = 'Submit';
//     submitButton.setAttribute('class','btn btn-default btn-sm center-block');
//     submitButton.textContent = 'Submit';
//     // submitButton.setAttribute('id', clicked[j].id);  -> clicked[j] is undefined?
//
//     infobox.appendChild(textBox);
//     infobox.appendChild(submitButton);
//     //Remove the 'add a review' button.
//     //Would it be a problem if I remove this button with the id that matches the restaurant?
//     //How can I make all the 'add a review' buttons disappear when they're clicked?
//     var removeB = document.getElementById('cheezboard');
//     var containerB = removeB.parentNode;
//     containerB.removeChild(removeB);
//
//   };
//
// });
//
//


//end of everything under 'reviews' button from main search page//
