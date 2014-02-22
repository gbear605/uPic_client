//what happend when your mouse enters the images.
$(document).ready(function(){
	alert("Hello World");
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

