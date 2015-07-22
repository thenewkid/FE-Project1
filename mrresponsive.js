$(document).ready(function() {
	window.onresize();

});

window.onresize = function() {
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

	if (width < 768) {
		$("#udac-img").css("margin", "0px auto");
		$("#name").removeClass("text-right")
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

