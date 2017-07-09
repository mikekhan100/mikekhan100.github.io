function selectMeal() {
    var chickenArray = ['Curry', 'Roast Dinner', 'Chicken Pasta', 'Stir Fry', 'Chicken and Ham Pie'];
    var beefArray = ['Steak and Chips', 'Curry', 'Roast Dinner', 'Stir Fry'];
    var lambArray = ['Curry', 'Roast Dinner', 'Lamb Chops and Chips'];
    var fishArray = ['Fish and Chips', 'Fish Pie'];
    var minceArray = ['Spaghetti Bolognese', 'Meatballs'];
    var sausageArray = ['Sausage and Mash', 'Sausage Casserole'];
    var miscellaneousArray = ['Pizza'];
    var ranNum = Math.floor(Math.random() * (mealsArray.length));
    
    
    var text = document.getElementById("textArea");
    text.textContent = mealsArray[ranNum];

}
