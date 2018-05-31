//select
var button = document.getElementById('pictureAppear');

//manipulate
button.addEventListener('click', function() {
	var img = document.createElement("img");
	img.src = "https://mikekhan100.github.io/Images/unicornDab.jpg";
	pictureSpace.appendChild(img);
});

