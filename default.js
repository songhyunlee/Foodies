var reviews = [
  {
    food: 'American',
    biz: 'Cheezboard',
    description: 'Vegetarian pizzeria serving different pizza everyday...',
    reviewer: ['Sarah Anderson', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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
    reviewer: ['John Doe', 'Reviewer B', 'Reviewer C'],
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

//Listen for the click on the 'find' button.
var myElement = document.getElementById('search')
myElement.addEventListener('click', function search(e) {

  var term = document.getElementById('term');
  var matched = fullMatch(term.value);
  var part = partialMatch(term.value);
  var item = document.createElement('div');
  var thePanel = document.createElement('div');
  var panelHeading = document.createElement('div');
  var panelBody = document.createElement('div');
  var panelSub = document.createElement('div');
  thePanel.setAttribute('class', 'panel panel-success');
  panelHeading.setAttribute('class', 'panel-heading');
  panelBody.setAttribute('class', 'panel-body');
  panelSub.setAttribute('class', 'panel-body');
  item.setAttribute('class', 'results');
  thePanel.appendChild(panelHeading);
  thePanel.appendChild(panelBody);
  item.appendChild(thePanel);

  if ( matched ) {
    panelHeading.textContent = "Showing results for: " + "'"+term.value +"'. " ;
    var bizName = document.createElement('h4');
    bizName.textContent = matched.biz;
    bizName.setAttribute('class', 'biz');
    var rateStar = document.createElement('div');
    rateStar.setAttribute('class', 'rateStar');
    var starOne = document.createElement('i');
    starOne.setAttribute('class', 'fa fa-star');
    var starTwo = document.createElement('i');
    starTwo.setAttribute('class', 'fa fa-star');
    var starThree = document.createElement('i');
    starThree.setAttribute('class', 'fa fa-star');
    var starFour = document.createElement('i');
    starFour.setAttribute('class', 'fa fa-star');
    var starFive = document.createElement('i');
    starFive.setAttribute('class', 'fa fa-star');
    var bizCategory = document.createElement('div');
    bizCategory.textContent = "Category: " + matched.food;
    bizCategory.setAttribute('class', 'category');
    var bizAbout = document.createElement('div');
    bizAbout.textContent = matched.description;
    bizAbout.setAttribute('class', 'about');
    var bizWhere = document.createElement('div');
    bizWhere.textContent = matched.address;
    bizWhere.setAttribute('class', 'addbox');
    var bizNumber = document.createElement('div');
    bizNumber.textContent = matched.phone;
    bizNumber.setAttribute('class', 'addbox');
    var reviewOne = document.createElement('div');
    var reviewTwo = document.createElement('div');
    var reviewThree = document.createElement('div');
    reviewOne.textContent = "'" + matched.review[0] + "'" + " - " + matched.reviewer[0];
    reviewTwo.textContent = "'" + matched.review[1] + "'" + " - " + matched.reviewer[1];
    reviewThree.textContent = "'" + matched.review[2] + "'" + " - " + matched.reviewer[2];

    if (matched.rating === 5) {
      rateStar.appendChild(starOne);
      rateStar.appendChild(starTwo);
      rateStar.appendChild(starThree);
      rateStar.appendChild(starFour);
      rateStar.appendChild(starFive);
    } else if (matched.rating === 4) {
      rateStar.appendChild(starOne);
      rateStar.appendChild(starTwo);
      rateStar.appendChild(starThree);
      rateStar.appendChild(starFour);
    } else if (matched.rating === 3) {
      rateStar.appendChild(starOne);
      rateStar.appendChild(starTwo);
      rateStar.appendChild(starThree);
    } else if (matched.rating === 2) {
      rateStar.appendChild(starOne);
      rateStar.appendChild(starTwo);
    } else if (matched.rating === 1) {
      rateStar.appendChild(starOne);
    };

    panelBody.appendChild(bizName);
    panelBody.appendChild(rateStar);
    panelBody.appendChild(bizCategory);
    panelBody.appendChild(bizWhere);
    panelBody.appendChild(bizNumber);
    panelBody.appendChild(bizAbout);
    panelBody.appendChild(panelSub);
    panelSub.appendChild(reviewOne);
    panelSub.appendChild(reviewTwo);
    panelSub.appendChild(reviewThree);

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

//Enables search by pressing enter in the input box.
document.getElementById("term").addEventListener("keydown", function inputSearch (ele) {
  if (event.keyCode === 13) {

    var term = document.getElementById('term');
    var matched = fullMatch(term.value);
    var part = partialMatch(term.value);
    var item = document.createElement('div');
    var thePanel = document.createElement('div');
    var panelHeading = document.createElement('div');
    var panelBody = document.createElement('div');
    var panelSub = document.createElement('div');
    thePanel.setAttribute('class', 'panel panel-success');
    panelHeading.setAttribute('class', 'panel-heading');
    panelBody.setAttribute('class', 'panel-body');
    panelSub.setAttribute('class', 'panel-body');
    item.setAttribute('class', 'results');
    thePanel.appendChild(panelHeading);
    thePanel.appendChild(panelBody);
    item.appendChild(thePanel);

    if ( matched ) {
      panelHeading.textContent = "Showing results for: " + "'"+term.value +"'. " ;
      var bizName = document.createElement('h4');
      bizName.textContent = matched.biz;
      bizName.setAttribute('class', 'biz');
      var rateStar = document.createElement('div');
      rateStar.setAttribute('class', 'rateStar');
      var starOne = document.createElement('i');
      starOne.setAttribute('class', 'fa fa-star');
      var starTwo = document.createElement('i');
      starTwo.setAttribute('class', 'fa fa-star');
      var starThree = document.createElement('i');
      starThree.setAttribute('class', 'fa fa-star');
      var starFour = document.createElement('i');
      starFour.setAttribute('class', 'fa fa-star');
      var starFive = document.createElement('i');
      starFive.setAttribute('class', 'fa fa-star');
      var bizCategory = document.createElement('div');
      bizCategory.textContent = "Category: " + matched.food;
      bizCategory.setAttribute('class', 'category');
      var bizAbout = document.createElement('div');
      bizAbout.setAttribute('class', 'about');
      bizAbout.textContent = matched.description;
      var bizWhere = document.createElement('div');
      bizWhere.textContent = matched.address;
      bizWhere.setAttribute('class', 'addbox');
      var bizNumber = document.createElement('div');
      bizNumber.textContent = matched.phone;
      bizNumber.setAttribute('class', 'addbox');
      var reviewOne = document.createElement('div');
      var reviewTwo = document.createElement('div');
      var reviewThree = document.createElement('div');
      reviewOne.textContent = "'" + matched.review[0] + "'" + " - " + matched.reviewer[0];
      reviewTwo.textContent = "'" + matched.review[1] + "'" + " - " + matched.reviewer[1];
      reviewThree.textContent = "'" + matched.review[2] + "'" + " - " + matched.reviewer[2];

      if (matched.rating === 5) {
        rateStar.appendChild(starOne);
        rateStar.appendChild(starTwo);
        rateStar.appendChild(starThree);
        rateStar.appendChild(starFour);
        rateStar.appendChild(starFive);
      } else if (matched.rating === 4) {
        rateStar.appendChild(starOne);
        rateStar.appendChild(starTwo);
        rateStar.appendChild(starThree);
        rateStar.appendChild(starFour);
      } else if (matched.rating === 3) {
        rateStar.appendChild(starOne);
        rateStar.appendChild(starTwo);
        rateStar.appendChild(starThree);
      } else if (matched.rating === 2) {
        rateStar.appendChild(starOne);
        rateStar.appendChild(starTwo);
      } else if (matched.rating === 1) {
        rateStar.appendChild(starOne);
      };

      panelBody.appendChild(bizName);
      panelBody.appendChild(rateStar);
      panelBody.appendChild(bizCategory);
      panelBody.appendChild(bizWhere);
      panelBody.appendChild(bizNumber);
      panelBody.appendChild(bizAbout);
      panelBody.appendChild(panelSub);
      panelSub.appendChild(reviewOne);
      panelSub.appendChild(reviewTwo);
      panelSub.appendChild(reviewThree);

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

    };
});


//---#1 'Search for Reviews' Ends---//
