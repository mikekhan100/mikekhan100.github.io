function selectMeal() {
    var mealsArray = [T-bone Steak, Curry, Pizza, Roast Dinner, Spaghetti Bolognese, Chicken Pasta, Stir Fry, Sausage and Mash];
    var ranNum = function (mealsArray.length) {
      Math.floor(Math.random() * (mealsArray.length + 1));
  }
    
    var text = document.getElementById("textArea");
    text.textContent = mealsArray[ranNum];
}