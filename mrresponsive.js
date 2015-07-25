$(document).ready(function() {

	/*
		When the onresize is method is called it displays the modal only if the variable showModal is true
		Notice that when the modal is up and you resize the page, the size of the modal is resized based on the
		dimensions of the page. I am aware the contents of the modal don't resize right. When you close the modal, this showModal variable is set to false, this makes sure that 
		after you close the modal, it doesnt re-appear when you resize the page.

		test-1, in closeModal function, comment out the window.showModal = false statement.
		then close the modal and resize the page

	*/
	window.showModal = true;

	/*
		use the jquery fadeIn feature to fade in all the elements of the page
	*/
	fadeInDocument();

	/*
		call the onresize method
	*/
	window.onresize();

	/*
		add the color changing effects for the text inside the body of the modal
	*/
	addBodyContentColorChanger();

	/*
		add functionality so that when a user hovers over a image, all the images randomly
		switch places, If you didn't notice I am trying to add in cool stuff so udacity will think I'm cool!!!
		I also need a job!!! so I'm going all out on this ND. Peace
		:) 
	*/
	addHoverForImages();
});

function addHoverForImages() {
	var src1 = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuicQI4rl0Gxu2WDnjaNd3EaRRfk0qSFrcdxLiz8H0Q8m4psJQwphEY6s";
	var src2 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRx3r2kRusKkUEw0lq2yI6c-1Ppph0Jf_rNi73o8s0yTRuRjKtUlA";
	var src3 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOukDLHWtRCHwHtBrvGZm5gRDrFyo7VebrYszD8tceiqhvlyx3";
	var img_sources = [src1, src2, src3];
	var featured_work_images = document.getElementsByClassName("fw-img");


	each(featured_work_images, function(img) {
		img.onmouseover = function() {
			var srces_already = [];

			each(featured_work_images, function(i) {
				var random_src = img_sources[Math.floor(Math.random()*img_sources.length)];
				while (srces_already.indexOf(random_src) > -1)
					random_src = img_sources[Math.floor(Math.random()*img_sources.length)];
				srces_already.push(random_src);
				i.src = random_src;
			})
		}
		img.onclick = function() {
			var current_source = this.src;
			this.src = document.getElementById("mi").src;
			document.getElementById("mi").src = current_source;
			img_sources[img_sources.indexOf(current_source)] = this.src;

		}
	})
}
/* 
	Notice that I have 2 line break tag <br> after the images for under featured work
	if the images are on top of each other like - then I need those line breaks to come to life
												-
												-
	if the images aren't laid out like that then i need those line breaks to be hidden
*/
function hideLineBreaksForFeaturedWork() {
	each(document.getElementsByClassName("line-break-for-images"), function(lb) {
		$(lb).hide();
	})
}
function showLineBreaksForFeaturedWork() {
	each(document.getElementsByClassName("line-break-for-images"), function(lb) {
		$(lb).show();
	})
}

/* 
	when this method is called, it sets the width of the modal to be half of the current screen width
	position the modal in the modal
	bring it down a 3rd of the pages height, in my opinion this seems like a nice place for Mr Modal
	set the height to be half of the current height
	bring that baby to life!
*/
function displayModal() {
	$("#welcome_modal").css("width", ($(window).width() / 2)+"px");
	$("#welcome_modal").css("margin", "0 auto");
	$("#welcome_modal").css("margin-top", ($(window).height()/3).toString() + "px");
	$("#welcome_modal").css("height", ($(window).height()/2).toString() + "px");
	$("#welcome_modal").modal();

}

/* 
	close the modal and set the global showModal variable to false so the page knows
	not to render the modal
*/
function closeModal() {
	$("#welcome_modal").modal("hide");
	window.showModal = false;
}

/*
	add an interval that changes the color of the text in the modal every 300ms
 */
function addBodyContentColorChanger() {
	var colorInterval = window.setInterval(function() {
		colors = ["black", "blue", "green", "silver", "purple", "red", "gray"];
		$("#body-content").css("color", colors[Math.floor(Math.random()*colors.length)]);
	}, 300);
}
window.onresize = function() {
	if (window.showModal)
		displayModal();

	var height = $(window).height();
	var width = $(window).width();
	
	if (width < 1153) {
		$("#img-col-1").removeClass("col-md-4");
		$("#img-col-1").addClass("col-md-6");
		$("#img1").css("width", "100%");
		$("#img-col-2").removeClass("col-md-4");
		$("#img-col-2").addClass("col-md-6");
		$("#img2").css("width", "100%");
		$("#img-col-3").removeClass("col-md-4");
		$("#img-col-3").addClass("col-md-6");
		$("#img3").css("width", "100%");
	}

	if (width < 992) {
		showLineBreaksForFeaturedWork();
	}
	if (width > 992)
		hideLineBreaksForFeaturedWork();

	if (width < 768) {
		$("#udac-img").css("margin", "0px auto");
		$("#name").removeClass("text-right")
	}
	if (width < 304) {
		$("#my-name").css("font-size", "20px");
	}
	if (width > 304) {
		$("#my-name").css("font-size", "250%");
	}
	if (width < 652) {
		$("#navbar").css("display", "none");
		$("#mr").removeClass("middle-row");
		$("#mr").addClass("header-row");
		$("#img-col").removeClass("col-xs-9");
		$("#img-col").addClass("col-xs-12");

		if (document.getElementById("navbarForMobile") == undefined) {
			addNavbarForMobile();
		}
	}

	else {
		$("#name").addClass("text-right");
		$("#navbar").css("display", "");
		$("#img-col").removeClass("col-xs-12");
		$("#img-col").addClass("col-xs-9");
		$("#mr").removeClass("header-row");
		$("#mr").addClass("middle-row");

		var navbarOrigin = document.getElementById("navbar");
		each($("#navbarForMobile").children(), function(c) {
			navbarOrigin.appendChild(c);
		})
		var container = getContainer();
		if (document.getElementById("navbarForMobile") != undefined)
			container.removeChild(document.getElementById("navbarForMobile"));
	}
}

	var addNavbarForMobile = function() {
		var children = $("#navbar").children();

		var newRow = document.createElement("div");
		newRow.id = "navbarForMobile";
		$(newRow).addClass("row");

		each(children, function(c) {
			$(c).css("margin", "0px auto");
			newRow.appendChild(c);
		})

		var container = getContainer();
		container.appendChild(newRow);
	}

	function each(args, funky) {
		for (var i = 0; i < args.length; i++)
			funky(args[i]);
	}
	function getContainer() {
		return document.getElementById("container");
	}
	function fadeInDocument() {
		var body = document.body;
		var container = $(body).children();
		$(container).hide();
		$(container).fadeIn(3000);
	}

