Parse.initialize("wvQUX0mYhNb3pl0AznV8iTslSWPLSjStPQPKvrgd", "kuPoQfcvFIF0H4ez18fzwZ2QQ7Lx6zBJRlNOqBPQ");


$('#submitform').on('click', function(event){
	event.preventDefault();
	console.log("awj");
	var img1 = document.getElementById("image1form").value;
	var img2 = document.getElementById("image2form").value;
	var description = document.getElementById("descriptionform").value;
	var TestObject = Parse.Object.extend("Polls");
	var testObject = new Polls();
	console.log("stuff" + img1 + img2 + description);
	testObject.save({imageOne: img1, imageTwo: img2, description: description, imageOneVotes: 0, imageTwoVotes: 0});
}
)