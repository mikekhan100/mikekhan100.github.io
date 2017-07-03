function selectMeal() {
    var mealsArray = ['T-bone Steak', 'Curry', 'Pizza', 'Roast Dinner', 'Spaghetti Bolognese', 'Chicken Pasta', 'Stir Fry', 'Sausage and Mash'];
    var ranNum = function () {
      return Math.floor(Math.random() * (mealsArray.length));
    }
    
    var text = document.getElementById("textArea");
    text.textContent = mealsArray[ranNum];
}