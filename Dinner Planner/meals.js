loadMeals();

var mealData;
var ID;

//obtain the meals data and save it in variable mealData
function loadMeals(){
    fetch('meals.txt')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        mealData = data;
    })
}

//add event listener to the parent element for the meal category buttons (use event delegation)
document.querySelector("#buttonContainer").addEventListener('click', getID);

//get the id of the clicked button (i.e. the chosen meal category)   
function getID(e){
    ID = e.target.id;
    showButtons();
}

//generate recipe buttons
function showButtons(){
    var output = '';
    if(ID === 'all') {  // Allows all meals to be shown
        var arr = Object.values(mealData);
        let flat = [].concat.apply([], arr);    // 'Flattens' a nested array structure
        for(var i in flat) {
            output += 
            `<ul> <li> <div class="card"> <h3 class="card-title">${flat[i]}</h3> <img src="Recipes/${flat[i]}.jpg"> <div class="card-content">  <button id="${flat[i]}" class="btn"> Scanned Recipe </button> <button class="btn card-btn"> <a href="https://www.bbc.co.uk/food/search?q=${flat[i]}"> BBC Recipes </a> </button> </div> </div> </li> </ul>`;
            document.querySelector("#result").innerHTML = output;   //produces the buttons based on the meals
        }
    }
    for(var i in mealData[ID]){ //mealData[ID] selects one of the meal object arrays
        output += 
        `<ul> <li> <div class="card"> <h3 class="card-title">${mealData[ID][i]}</h3> <img src="Recipes/${mealData[ID][i]}.jpg"> <div class="card-content">  <button id="${mealData[ID][i]}" class="btn"> Scanned Recipe </button> <button class="btn card-btn"> <a href="https://www.bbc.co.uk/food/search?q=${mealData[ID][i]}"> BBC Recipes </a> </button> </div> </div> </li> </ul>`;
        document.querySelector("#result").innerHTML = output;   //produces the buttons based on the meals
    }
    
    document.querySelector("#result").scrollIntoView(true); //scrolls screen down to recipe list
    
    //recreate the result element, which was replaced by 'output' above
    //this allows the category buttons to produce meal lists again
    var result = document.createElement("div");
    result.id = "result";
    var container = document.querySelector("#container");
    container.appendChild(result);
    //select displayedrecipe and remove it so that the meal list takes its place
    var displayedRecipe = document.querySelector("#displayedRecipe");
    displayedRecipe.parentNode.removeChild(displayedRecipe);
}

//add eventListener to the parent element for the buttons (using event bubbling)
document.querySelector("#container").addEventListener('click', showRecipes);

//shows the scanned recipes
function showRecipes(e){
    var recipeID = e.target.id; //uses the event object to get the id of the clicked button
    var displayedRecipe = document.createElement("img");
    displayedRecipe.src = "Recipes/" + recipeID + ".jpg"; //sets the image source
    displayedRecipe.id = "displayedRecipe";
    //replaces the meal buttons with the scanned recipe
    var result = document.querySelector('#result');
    result.parentNode.replaceChild(displayedRecipe, result);    //replace the recipe buttons with the scanned recipe
    
}
