var reviews = [
  {
    food: 'American',
    biz: 'Cheezboard',
    description: 'Vegetarian pizzeria serving different pizza everyday...',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['The best vegetarian pizza I have ever had.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [5, 5, 5],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cheezboard',
    image: "images/cheezboard.jpg",
  },
  {
    food: 'Chinese',
    biz: 'Great China',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['Delicious food, excellent service','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [5, 5, 5],
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'greatchina',
    image: 'images/greatchina.jpeg',
  },
  {
    food: 'Seafood',
    biz: 'Oh Oyster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['I ordered the daily special, but the oysters were not fresh at all.', 'Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [2, 2, 2],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'seafood',
    image: 'images/oysters.jpeg',
  },
  {
    food: 'Italian',
    biz: 'Siciliana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['I do not understand why people line up for this place. It was okay.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [3, 3, 3],
    address: '3333 Bristol St, Costa Mesa CA 92603',
    phone: '949-567-8901',
    id: 'italian',
    image: 'images/siciliana.jpg',
  },
  {
    food: 'Korean',
    biz: 'Baekjung',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['Korean BBQ. Sooo good. I definitely want to go back again.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [4, 4, 4],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'korean',
    image: 'images/baekjung.jpg',
  },
  {
    food: 'Japanese',
    biz: 'Sushi Sushi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['Very low quality. I would rather get sushi from Wholefoods.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [1, 1, 1],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'japnese',
    image: 'images/sushi.jpg',
  },
  {
    food: 'Mexican',
    biz: 'Tacos o Burritos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['My favorite burritos in town. They should put more meat in them, though.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [5, 5, 5],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'tacos',
    image: 'images/burritos.jpg',
  },
  {
    food: 'Food truck',
    biz: 'Grab N Go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['John D.', 'Reviewer B', 'Reviewer C'],
    review: ['You do not want to miss out when their truck is in your area. It is just amazing. Order the cuban or the rubenesque.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [4, 4, 4],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'truck',
    image: 'images/foodtruck.jpg',
  },
  {
    food: 'Dessert',
    biz: 'Matcha Heaven',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['All their dessert is made with green tea. If you like matcha, this is your place for dessert.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [4, 4, 4],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'heaven',
    image: 'images/matcha.jpeg',
  },
  {
    food: 'Coffee',
    biz: 'Coffee-to-go',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
    reviewer: ['Sarah A.', 'Reviewer B', 'Reviewer C'],
    review: ['Never coming back to this coffeeshop. Dirty and rude service for very cheap quality coffee.','Lorem ipsum dolor sit amet', 'consectetur adipiscing elit, sed do'],
    rating: [1, 1, 1],
    address: '1 Culver Dr, Irvine, CA 92612',
    phone: '949-567-8901',
    id: 'cafe',
    image: 'images/coffee.jpg',
  },
]

//Listen for the click on the 'find' button.
var myElement = document.getElementById('find');
myElement.addEventListener('click', showResults);

var term = document.getElementById("term")
term.addEventListener("keydown", function(e) {
  if (event.keyCode === 13) {
    showResults(e);
  }
});

// View one review.
var matchedBiz =[];
var btnClicked = document.getElementById('results');
btnClicked.addEventListener('click', function(e) {
  if (e.target.className.indexOf('review-button') !== -1) {

    swap('current', 'reviews');

    for (var i = 0; i < reviews.length; i++) {
      if (e.target.getAttribute('id') == reviews[i].id) {
        var theReview = pageElements(reviews[i]);
        matchedBiz.push(i);
      }
    }
    var theContainer = document.getElementById('reviews');
    clear(theContainer)
    theContainer.appendChild(theReview);
  };
});

var header = document.getElementById('foodies-header');
header.addEventListener('click', function(h) {

  if (h.target.id==='home') {
  swap('current', 'searchbox');
  }
});

// Listen for the submit button to gather review from user.
var submitted = document.getElementById('reviews');
submitted.addEventListener('click', function submit(theEvent) {

  if (theEvent.target.id==='submit-review') {
    var newReview = document.getElementById('new-review').value;
    reviews[matchedBiz].review.push(newReview);

    var newPerson = document.getElementById('new-person').value;
    reviews[matchedBiz].reviewer.push(newPerson);

    var newBox = document.createElement('div');
    newBox.setAttribute('class', 'reviewbox');
    newBox.textContent = newReview;

    var newUser = document.createElement('div');
    newUser.setAttribute('class', 'reviewer');
    newUser.textContent = newPerson;

    var theUser = document.createElement('i');
    theUser.setAttribute('class', 'fa fa-user pull-left');

    newUser.appendChild(theUser);

    var here = document.getElementById('newperson');
    var there = document.getElementById('newbox');

    here.appendChild(newUser);
    there.appendChild(newBox);

    clearFields('new-person');
    clearFields('new-review');

  }
});

function showResults(results) {
  var theResults= document.getElementById('results');
  clear(theResults);

  var term = document.getElementById('term').value;
  var matches = search(term);

  var heading = document.createElement('h4');
  heading.textContent = "Showing results for: " + "'"+ term + ".'" ;

  var results = document.getElementById('results');
  results.appendChild(heading);

  for (var i = 0; i < matches.length; i++) {
    theRestaurant = resultElements(matches[i]);
    results.appendChild(theRestaurant);
  }
}

function search(term) {
  var results = [];
  for (var i =0; i < reviews.length; i++) {
    if (reviews[i].biz.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
      results.push(reviews[i]);
    }
    if (reviews[i].food.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
      results.push(reviews[i]);
    }
  };

  if(results.length > 0) {
    return results;
  } else {
    return false;
  }
}

function clearFields(id) {
  document.getElementById(id).value = "";
}

function swap(current, next) {
  var theCurrent = document.getElementsByClassName(current)[0];
  theCurrent.classList.remove('current');
  theCurrent.classList.add('hide');

  var theNext = document.getElementById(next);
  theNext.classList.add('current');
  theNext.classList.remove('hide');
};

function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}

//creates elements for a restaurant review page.
function pageElements(item) {
  var reviewHeader = document.createElement('h1');
  var row = document.createElement('div');
  var container = document.createElement('div');
  var panel = document.createElement('div');
  var panelbody = document.createElement('div');
  var panelbodyA = document.createElement('div');
  var panelbodyB = document.createElement('div');
  var panelbodyC = document.createElement('div');
  var image = document.createElement('p');
  var food = document.createElement('img');
  var address = document.createElement('div');
  var phone = document.createElement('div')
  var info = document.createElement('div');
  var biz = document.createElement('h2');
  var rateStar = document.createElement('div');
  var description = document.createElement('div');

  reviewHeader.textContent = 'Reviews';
  row.setAttribute('class', 'row');
  row.setAttribute('id', 'show');
  container.setAttribute('class', 'col-md-offset-1 col-md-10');
  panel.setAttribute('class', 'panel panel-default');
  panel.setAttribute('id', 'show');
  panelbody.setAttribute('class', 'panel-body');
  panelbodyA.setAttribute('class', 'panel-body col-md-2');
  panelbodyA.setAttribute('id', 'newperson');
  panelbodyB.setAttribute('class', 'panel-body col-md-9');
  panelbodyB.setAttribute('id','newbox');
  panelbodyC.setAttribute('class', 'panel-body');
  image.setAttribute('class', 'col-xs-3');
  image.setAttribute('id', 'restaurantimg')
  food.setAttribute('src', item.image);

  food.setAttribute('class', 'img-responsive img-rounded');
  address.textContent = item.address;
  address.setAttribute('class', 'gray');
  phone.textContent = item.phone;
  phone.setAttribute('class','gray');
  info.setAttribute('class', 'info col-md-6');
  biz.setAttribute('class', 'biz');
  biz.textContent = item.biz;
  description.setAttribute('class', 'description');
  description.textContent = item.description;

  row.appendChild(reviewHeader);
  row.appendChild(container);
  container.appendChild(panel);
  panel.appendChild(panelbody);
  panel.appendChild(panelbodyA);
  panel.appendChild(panelbodyB);
  panelbody.appendChild(image);
  panelbody.appendChild(info);

  rateStar.setAttribute('class', 'rateStar');
  var allStars = container.getElementsByClassName('rateStar')[0];
  var sum = item.rating.reduce(function (a, b) {
    return a + b;
  });
  var average = sum / item.rating.length;

  for (var k = 0; k < average; k++) {
    var theStar = document.createElement('i');
    theStar.setAttribute('class', 'fa fa-star');
    rateStar.appendChild(theStar);
  };

  info.appendChild(biz);
  info.appendChild(rateStar);
  image.appendChild(food);
  info.appendChild(address);
  info.appendChild(phone);
  info.appendChild(description);

  //display review that's in the data.
  item.review.forEach(function(text) {
    var reviewBox = document.createElement('div');
    reviewBox.setAttribute('class', 'reviewbox');
    reviewBox.textContent = text;
    panelbodyB.appendChild(reviewBox);
  });

  item.reviewer.forEach(function(text) {
    var reviewer = document.createElement('div');
    reviewer.setAttribute('class', 'reviewer');
    var theUser = document.createElement('i');
    theUser.setAttribute('class', 'fa fa-user pull-left');

    reviewer.textContent = "  " + text;
    reviewer.appendChild(theUser);
    panelbodyA.appendChild(reviewer);

  })

  panel.appendChild(panelbodyC);
  //create review form.
  var reviewContent = reviewElements();
  panelbodyC.appendChild(reviewContent);

  return row;
}

//creates elements to be displayed when user searches for a restaurant.
function resultElements(item) {
  var thePanel = document.createElement('div');
  var panelHeading = document.createElement('div');
  var panelBody = document.createElement('div');

  thePanel.setAttribute('class', 'panel panel-success');
  panelHeading.setAttribute('class', 'panel-heading');
  panelBody.setAttribute('class', 'panel-body');
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
  theButton.setAttribute('class', 'btn btn-default btn-sm review-button');
  theButton.textContent = 'Reviews';
  theButton.setAttribute('id', item.id);

  panelBody.appendChild(bizName);
  panelBody.appendChild(rateStar);
  panelBody.appendChild(bizCategory);
  panelBody.appendChild(bizWhere);
  panelBody.appendChild(bizNumber);
  panelBody.appendChild(bizAbout);
  panelBody.appendChild(theButton);

  var sum = item.rating.reduce(function (a, b) {
    return a + b;
  });
  var average = sum / item.rating.length;

  var allStars = thePanel.getElementsByClassName('rateStar')[0];
  for (var i = 0; i < average; i++) {
    var theStar = document.createElement('i');
    theStar.setAttribute('class', 'fa fa-star');
    rateStar.appendChild(theStar);
  }

  return thePanel;
}

//creates separate review 'boxes' for each review
function reviewElements(item) {

  var theForm = document.createElement('form');
  var username = document.createElement('input');
  var textBox = document.createElement('textarea');
  var starNumbers = 5;
  // var starArea = document.createElement('div');
  var submitButton = document.createElement('button');

  // for (var i = 0; i < starNumbers; i++) {
  //   var emptyStars = document.createElement('i');
  //   emptyStars.setAttribute('class', 'fa fa-star-o');
  //   starArea.appendChild(emptyStars);
  // };

  theForm.setAttribute('id', 'theForm');

  username.setAttribute('type', 'text');
  username.setAttribute('id', 'new-person');
  username.setAttribute('class', 'form-control');
  username.setAttribute('placeholder','Your name: ')

  textBox.setAttribute('class', 'form-control textbox');
  textBox.setAttribute('rows', '5');
  textBox.setAttribute('placeholder', 'Start writing your review here...');
  textBox.setAttribute('id','new-review');

  // starArea.setAttribute('id', 'starArea');
  submitButton.setAttribute('class', 'btn btn-success btn-sm');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('id', 'submit-review');
  submitButton.textContent = 'Submit Review';

  theForm.appendChild(username);
  theForm.appendChild(textBox);
  // theForm.appendChild(starArea);
  theForm.appendChild(submitButton);

  return theForm;
}
