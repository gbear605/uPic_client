
//what happend when your mouse enters the images.
$(document).ready(function(){

	Parse.initialize("wvQUX0mYhNb3pl0AznV8iTslSWPLSjStPQPKvrgd", "kuPoQfcvFIF0H4ez18fzwZ2QQ7Lx6zBJRlNOqBPQ");
	
	$("#img1").mouseenter(function(){
		$("#voteQ").fadeTo("slow", 1)
	});
	$("#img1").mouseleave(function(){
		$("#voteQ").fadeTo("slow", 0)
	});
	$("#img2").mouseenter(function(){
		$("#voteQ").fadeTo("slow", 1)
	});
	$("#img2").mouseleave(function(){
		$("#voteQ").fadeTo("slow", 0)
	});

	var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  //alert("yay! it worked");
});

var Polls = Parse.Object.extend("Polls");
var query = new Parse.Query(Polls);
//query.equalTo("playerName", "Dan Stemkoski");
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      alert(object.id + ' - ' + object.get('imageOne'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

});

//What happend when you click on the images
$(document).ready(function(){
	$("#img1").click(function(){
		$("#img2").fadeTo("slow", 0);
		$("#img1").fadeTo("slow", 0)
	});
	$("#img2").click(function(){
		$("#img2").fadeTo("slow", 0);
		$("#img1").fadeTo("slow", 0)
	})
});

