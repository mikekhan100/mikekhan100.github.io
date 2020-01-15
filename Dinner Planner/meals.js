document.querySelector("#CandM").addEventListener('click', showMeals);

function showMeals(){
    //create XHR object
    var xhr = new XMLHttpRequest();
    //Open - type, url/file, async
    xhr.open('GET', 'meals - CandM.txt', true);

    xhr.onload = function(){
        if(this.status == 200){     //status of '200' means the request is okay
            var meals = JSON.parse(this.responseText);
            var output = '';
            for(var i in meals){
                output += 
                '<ul>' +
                '<li>' + meals[i] + '</li>' +
                '</ul>';
            }
            document.querySelector("#result").innerHTML = output;
        }
    }

    //Sends request
    xhr.send();
}
