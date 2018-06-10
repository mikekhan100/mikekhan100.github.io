var breakfast = [
	'Cereal',
	'Muesli',
	'Spinach Omelette',
	'Berries and Yoghurt'
];

var lunch = [
	'Pho!',
	'Salad',
	'Spinach Omelette'
];

var dinner = [
	'Curry',
	'Spaghetti Bolognese',
	'Roast Dinner',
	'BBQ'
];

var selectMenu = document.getElementById("meal");
var btn = document.getElementById("makeChoice");
var result = document.getElementById("result");

btn.addEventListener('click', function() {
	var index = selectMenu.selectedIndex;
    
    if (index === 0){
		result.textContent = breakfast[Math.floor(Math.random() * (breakfast.length))];
	}

	else if (index === 1){
		result.textContent = lunch[Math.floor(Math.random() * (lunch.length))];
	}

	else
		result.textContent = dinner[Math.floor(Math.random() * (dinner.length))];
});


