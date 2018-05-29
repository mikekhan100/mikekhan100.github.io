//select
var button = document.getElementById('pictureAppear');

//manipulate
button.addEventListener('click', function() {
	var img = document.createElement("img");
	img.src = "Images/unicornDab.jpg";
	pictureSpace.appendChild(img);
});

