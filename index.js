function selectMeal() {
    var mealsArray = [T-bone Steak, Curry, Pizza, Roast Dinner, Spaghetti Bolognese, Chicken Pasta, Stir Fry, Sausage and Mash];
    var ranNum = 0;
    
    function getRandomInt(0, mealsArray.length) {
    ranNum = Math.floor(Math.random() * (max - min + 1) + min);
  }
    
    var text = document.getElementById("textArea");
    text.textContent = mealsArray[ranNum];
}