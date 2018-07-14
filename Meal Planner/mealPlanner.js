//Function to populate the second select form
function populate(meal, meat) {
	var meal = document.getElementById("meal");
	var meat = document.getElementById("meat");
	meat.innerHTML = "";

	if(meal.value === "breakfast") {
		var optionArray = ["|", "eggs|Eggs", "noMeat|No Meat", "allChoices|All Choices"];
	}
	else if(meal.value === "lunch") {
		var optionArray = ["|", "chicken|Chicken", "eggs|Eggs", "fish|Fish", "noMeat|No Meat", "allChoices|All Choices"];
	}
	else if(meal.value === "dinner") {
		var optionArray = ["|", "chicken|Chicken", "lamb|Lamb", "beef|Beef", "eggs|Eggs", "fish|Fish", "mince|Mince", "noMeat|No Meat", "allChoices|All Choices"];
	}

	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		meat.options.add(newOption);
	}
}

//Meal objects
var MandBBreakfast = {
	eggs: ["Scrambled Egg", "Omelette", "Hard Boiled Egg"],
	noMeat: ["Cereal", "Muesli", "Berries and Yoghurt"],
	allChoices: ["Cereal", "Muesli", "Berries and Yoghurt", "Scrambled Egg", "Omelette", "Hard Boiled Egg"]
}

var CandMBreakfast = {
	eggs: ["Scrambled Egg", "Spinach Omelette"],
	noMeat: ["Cereal", "Muesli", "Berries and Yoghurt"],
	allChoices: ["Cereal", "Muesli", "Berries and Yoghurt", "Scrambled Egg", "Spinach Omelette"]
}

var DandMBreakfast = {
	eggs: ["Please choose 'No Meat' or 'All Choices'"],
	noMeat: ["Cereal"],
	allChoices: ["Cereal"]
}

var MandBLunch = {
	chicken: ["Chicken and Sweetcorn Soup"],
	eggs: ["Omelette"],
	fish: ["Fish Fingers"],
	noMeat: ["Pizza", "Beans on Toast"],
	allChoices: ["Chicken and Sweetcorn Soup", "Omelette", "Fish Fingers", "Pizza", "Beans on Toast"]
}

var CandMLunch = {
	chicken: ["Please choose 'Eggs', 'Fish', 'No Meat' or 'All Choices'"],
	eggs: ["Spinach Omelette"],
	fish: ["New Potato and Anchovy Salad"],
	noMeat: ["Roast Vegetable Salad", "Houmous and Dips", "Pear and Walnut Salad", "Strawberry and Feta Salad"],
	allChoices: ["Spinach Omelette", "New Potato and Anchovy Salad", "Roast Vegetable Salad", "Houmous and Dips", "Pear and Walnut Salad", "Strawberry and Feta Salad"]
}

var DandMLunch = {
	chicken: ["Please choose 'No Meat' or 'All Choices'"],
	eggs: ["Please choose 'No Meat' or 'All Choices'"],
	fish: ["Please choose 'No Meat' or 'All Choices'"],
	noMeat: ["Soup and Sandwich"],
	allChoices: ["Soup and Sandwich"]
}

var MandBDinner = {
	chicken: ["Chicken Korma", "Roast Dinner", "Stir Fry"],
	lamb: ["Roast Dinner"],
	beef: ["Roast Dinner"],
	eggs: ["Omelette"],
	fish: ["Fish Fingers", "Fish and Chips"],
	mince: ["Spaghetti Bolognese", "Lasagne"],
	noMeat: ["Pizza", "Beans on Toast"],
	allChoices: ["Chicken Korma", "Roast Dinner", "Stir Fry", "Omelette", "Fish Fingers", "Fish and Chips", "Spaghetti Bolognese", "Lasagne", "Pizza", "Beans on Toast"]
}

var CandMDinner = {
	chicken: ["Curry", "Roast Dinner", "Stir Fry", "Vietnamese Salad"],
	lamb: ["Roast Dinner", "Curry"],
	beef: ["Roast Dinner"],
	eggs: ["Please choose 'Chicken', 'Lamb', 'Beef', 'Fish', 'Mince' or 'All Choices'"],
	fish: ["Salmon and Coriander Rice", "Fish and Chips"],
	mince: ["Spaghetti Bolognese", "Hot Halloween Beanpot"],
	noMeat: ["Please choose 'Chicken', 'Lamb', 'Beef', 'Fish', 'Mince' or 'All Choices'"],
	allChoices: ["Curry", "Roast Dinner", "Stir Fry", "Vietnamese Salad", "Salmon and Coriander Rice", "Fish and Chips", "Spaghetti Bolognese", "Hot Halloween Beanpot"]
}

var DandMDinner = {
	chicken: ["Curry", "Roast Dinner", "Stir Fry"],
	lamb: ["Roast Dinner", "Curry"],
	beef: ["Roast Dinner"],
	eggs: ["Eggs, Beans and Chips"],
	fish: ["Fish Cakes and Chips", "Fish and Chips"],
	mince: ["Spaghetti Bolognese", "Hot Halloween Beanpot"],
	noMeat: ["Saag Aloo", "Chana Masala", "Vegetable Ricotta"],
	allChoices: ["Curry", "Roast Dinner", "Stir Fry", "Eggs, Beans and Chips", "Fish Cakes and Chips", "Fish and Chips", "Spaghetti Bolognese", "Hot Halloween Beanpot", "Saag Aloo", "Chana Masala", "Vegetable Ricotta"]
}

//Selectors
var meal = document.getElementById("meal");
var meat = document.getElementById("meat");

var buttonMB = document.getElementById("picMB");
var buttonCM = document.getElementById("picCM");
var buttonDM = document.getElementById("picDM");

var result = document.getElementById("result");

//EventListener for the MandB button
buttonMB.addEventListener('click', function() {
	result.innerHTML = "";	//Clear any previous text
	//Breakfast choices
	if(meal.value === "breakfast" && meat.value == "eggs") {
		for(var element in MandBBreakfast.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBBreakfast.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "noMeat") {
		for(var element in MandBBreakfast.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBBreakfast.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "allChoices") {
		for(var element in MandBBreakfast.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBBreakfast.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Lunch choices
	else if(meal.value === "lunch" && meat.value == "chicken") {
		for(var element in MandBLunch.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBLunch.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "eggs") {
		for(var element in MandBLunch.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBLunch.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "fish") {
		for(var element in MandBLunch.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBLunch.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "noMeat") {
		for(var element in MandBLunch.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBLunch.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "allChoices") {
		for(var element in MandBLunch.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBLunch.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Dinner choices
	else if(meal.value === "dinner" && meat.value == "chicken") {
		for(var element in MandBDinner.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "lamb") {
		for(var element in MandBDinner.lamb) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.lamb[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "beef") {
		for(var element in MandBDinner.beef) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.beef[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "eggs") {
		for(var element in MandBDinner.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "fish") {
		for(var element in MandBDinner.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "mince") {
		for(var element in MandBDinner.mince) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.mince[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "noMeat") {
		for(var element in MandBDinner.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "allChoices") {
		for(var element in MandBDinner.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(MandBDinner.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}
});

//EventListener for the CandM button
buttonCM.addEventListener('click', function() {
	result.innerHTML = "";	//Clear any previous text
	//Breakfast choices
	if(meal.value === "breakfast" && meat.value == "eggs") {
		for(var element in CandMBreakfast.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMBreakfast.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "noMeat") {
		for(var element in CandMBreakfast.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMBreakfast.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "allChoices") {
		for(var element in CandMBreakfast.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMBreakfast.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Lunch choices
	else if(meal.value === "lunch" && meat.value == "chicken") {
		for(var element in CandMLunch.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMLunch.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "eggs") {
		for(var element in CandMLunch.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMLunch.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "fish") {
		for(var element in CandMLunch.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMLunch.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "noMeat") {
		for(var element in CandMLunch.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMLunch.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "allChoices") {
		for(var element in CandMLunch.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMLunch.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Dinner choices
	else if(meal.value === "dinner" && meat.value == "chicken") {
		for(var element in CandMDinner.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "lamb") {
		for(var element in CandMDinner.lamb) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.lamb[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "beef") {
		for(var element in CandMDinner.beef) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.beef[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "eggs") {
		for(var element in CandMDinner.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "fish") {
		for(var element in CandMDinner.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "mince") {
		for(var element in CandMDinner.mince) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.mince[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "noMeat") {
		for(var element in CandMDinner.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "allChoices") {
		for(var element in CandMDinner.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(CandMDinner.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}
});

//EventListener for the DandM button
buttonDM.addEventListener('click', function() {
	result.innerHTML = "";	//Clear any previous text
	//Breakfast choices
	if(meal.value === "breakfast" && meat.value == "eggs") {
		for(var element in DandMBreakfast.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMBreakfast.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "noMeat") {
		for(var element in DandMBreakfast.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMBreakfast.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "breakfast" && meat.value == "allChoices") {
		for(var element in DandMBreakfast.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMBreakfast.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Lunch choices
	else if(meal.value === "lunch" && meat.value == "chicken") {
		for(var element in DandMLunch.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMLunch.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "eggs") {
		for(var element in DandMLunch.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMLunch.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "fish") {
		for(var element in DandMLunch.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMLunch.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "noMeat") {
		for(var element in DandMLunch.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMLunch.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "lunch" && meat.value == "allChoices") {
		for(var element in DandMLunch.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMLunch.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	//Dinner choices
	else if(meal.value === "dinner" && meat.value == "chicken") {
		for(var element in DandMDinner.chicken) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.chicken[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "lamb") {
		for(var element in DandMDinner.lamb) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.lamb[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "beef") {
		for(var element in DandMDinner.beef) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.beef[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "eggs") {
		for(var element in DandMDinner.eggs) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.eggs[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "fish") {
		for(var element in DandMDinner.fish) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.fish[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "mince") {
		for(var element in DandMDinner.mince) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.mince[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "noMeat") {
		for(var element in DandMDinner.noMeat) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.noMeat[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}

	else if(meal.value === "dinner" && meat.value == "allChoices") {
		for(var element in DandMDinner.allChoices) {
			var node = document.createElement("LI");
			var textNode = document.createTextNode(DandMDinner.allChoices[element]);
			node.appendChild(textNode);
			result.appendChild(node);
		}
	}
});
