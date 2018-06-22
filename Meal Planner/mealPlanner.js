var CandMBreakfast = [
	'Cereal',
	'Muesli',
	'Spinach Omelette',
	'Berries and Yoghurt',
	'Banana and Yoghurt'
];

var MandBBreakfast = [
	'Cereal',
	'Muesli',
	'Bacon Sandwich',
	'Berries and Yoghurt'
];

var DandMBreakfast = [
	'Cereal'
];

var CandMLunch = [
	'Roast Vegetable Salad',
	'New Potato and Anchovy Salad',
	'Spinach Omelette',
	'Houmous and Dips',
	'Pho!'
];

var MandBLunch = [
	'Chicken Sandwich',
	'Chicken and Sweetcorn Soup',
	'Pizza',
	'Beans on Toast',
	'Omelette',
	'Pho!'
];

var DandMLunch = [
	'Soup'
];

var CandMDinner = [
	'Curry',
	'Spaghetti Bolognese',
	'Roast Dinner',
	'BBQ',
	'Fish and Chips',
	'Hot Halloween Beanpot',
	'Vietnamese Salad',
	'Stir Fry'
];

var MandBDinner = [
	'Curry',
	'Spaghetti Bolognese',
	'Roast Dinner',
	'BBQ',
	'Fish and Chips',
	'Hot Halloween Beanpot',
	'Vietnamese Salad',
	'Stir Fry'
];

var DandMDinner = [
	'Curry',
	'Roast Dinner',
	'BBQ',
	'Fish and Chips',
	'Hot Halloween Beanpot',
	'Eggs, Beans and Chips',
	'Ready Meal'
];

var mealIndex = document.getElementById("meal").selectedIndex;
var meatIndex = document.getElementById("meat").selectedIndex;
var result = document.getElementById("result");
var text = '';	//used to build up the result
var picMB = document.getElementById("picMB");
var picCM = document.getElementById("picCM");
var picDM = document.getElementById("picDM");


picMB.addEventListener('click', function(e) {
	
    if (mealIndex === 0 && meatIndex >= 0) {
		MandBBreakfast.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else if (mealIndex === 1 && meatIndex >= 0) {
		MandBLunch.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else {
		MandBDinner.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	e.preventDefault();
});

picCM.addEventListener('click', function(e) {
	
    if (mealIndex === 0 && meatIndex >= 0) {
		CandMBreakfast.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else if (mealIndex === 1 && meatIndex >= 0) {
		CandMLunch.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else {
		CandMDinner.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	e.preventDefault();
});

picDM.addEventListener('click', function(e) {
	
    if (mealIndex === 0 && meatIndex >= 0) {
		DandMBreakfast.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else if (mealIndex === 1 && meatIndex >= 0) {
		DandMLunch.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	else {
		DandMDinner.forEach(function(e) {
			text += e + "\n";
		});
		result.textContent = text;
	}
	e.preventDefault();
});

