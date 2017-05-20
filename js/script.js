/* JQUERY CODES
-------------------------------------------------*/

$(document).ready(function() {

	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  var args = $.speed(duration, easing, complete);
	  var step = args.step;
	  return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};

		$({deg: 0}).animate({deg: angle}, args);
	  });
	};
	

	$("#section1").css("height", "100vh");
	$("#section1").css("width", "100%");
	$("#section1").fadeIn();
	$(".content1").fadeIn();
	$(".title-wrapper h1").addClass('animated fadeInDown');
	$(".title-wrapper h1 i").addClass('animated fadeIn');
	$(".menu a").addClass('animated fadeInDown');

// Section 1	
	$(".content1 .section-2").on("click", function() {
		$(".content1").fadeOut();
		$("#section1").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#section1").fadeOut();		 
		}, 1000);
		
		setTimeout(function() {
			$("#section2").animateRotate(0, 0);
			$("#section2").css("height", "25px");
			$("#section2").css("width", "375px");
			$("#section2").fadeIn();
			$("#section2").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content2").fadeIn(300);
					
				});
			});
		}, 800);
	});

	$(".content1 .section-3").on("click", function() {
		$(".content1").fadeOut();
		$("#section1").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#section1").fadeOut();		 
		}, 1000);
		
		setTimeout(function() {
		$("#section3").animateRotate(0, 0);
		$("#section3").css("height", "25px");
		$("#section3").css("width", "375px");
			$("#section3").fadeIn();
			$("#section3").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content3").fadeIn(300);

				});
			});
		}, 800);
	});

	$(".content1 .section-4").on("click", function() {
		$(".content1").fadeOut();
		$("#section1").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#section1").fadeOut();		 
		}, 1000);
		
		setTimeout(function() {
		$("#section4").animateRotate(0, 0);
		$("#section4").css("height", "25px");
		$("#section4").css("width", "375px");
			$("#section4").fadeIn();
			$("#section4").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content4").fadeIn(300);
				});
			});
		}, 800);
	});

// Section 2
	$(".content2 .home").on("click", function() {
		$(".content2").fadeOut();
		$("#section2").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section2").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
		$("#section1").animateRotate(0, 0);
		$("#section1").css("height", "25px");
		$("#section1").css("width", "375px");
			$("#section1").fadeIn();
			$("#section1").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content1").fadeIn(300);
				});
			});
		}, 800);
	});

	$(".content2 .section-4").on("click", function() {
		$(".content2").fadeOut();
		$("#section2").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section2").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
		$("#section4").animateRotate(0, 0);
		$("#section4").css("height", "25px");
		$("#section4").css("width", "375px");
			$("#section4").fadeIn();
			$("#section4").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content4").fadeIn(300);
				});
			});
		}, 800);
	});



	$(".content2 .section-3").on("click", function() {
		$(".content2").fadeOut();
		$("#section2").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section2").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
		$("#section3").animateRotate(0, 0);
		$("#section3").css("height", "25px");
		$("#section3").css("width", "375px");
			$("#section3").fadeIn();
			$("#section3").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content3").fadeIn(300);
				});
			});
		}, 800);
	});

	

// Section 3
	$(".content3 .home").on("click", function() {
		$(".content3").fadeOut();
		$("#section3").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section3").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
		$("#section1").animateRotate(0, 0);
		$("#section1").css("height", "25px");
		$("#section1").css("width", "375px");
			$("#section1").fadeIn();
			$("#section1").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content1").fadeIn(300);
				});
			});
		}, 800);
	});

	$(".content3 .section-2").on("click", function() {
		$(".content3").fadeOut();
		$("#section3").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section3").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
			$("#section2").animateRotate(0, 0);
			$("#section2").css("height", "25px");
			$("#section2").css("width", "375px");
			$("#section2").fadeIn();
			$("#section2").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content2").fadeIn(300);
				});
			});
		}, 800);
	});
	
	$(".content3 .section-4").on("click", function() {
		$(".content3").fadeOut();
		$("#section3").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section3").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
			$("#section4").animateRotate(0, 0);
			$("#section4").css("height", "25px");
			$("#section4").css("width", "375px");
			$("#section4").fadeIn();
			$("#section4").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content4").fadeIn(300);
				});
			});
		}, 800);
	});

	// Section 4
	$(".content4 .home").on("click", function() {
		$(".content4").fadeOut();
		$("#section4").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section4").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
		$("#section1").animateRotate(0, 0);
		$("#section1").css("height", "25px");
		$("#section1").css("width", "375px");
			$("#section1").fadeIn();
			$("#section1").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content1").fadeIn(300);
				});
			});
		}, 800);
	});

	$(".content4 .section-2").on("click", function() {
		$(".content4").fadeOut();
		$("#section4").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section4").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
			$("#section2").animateRotate(0, 0);
			$("#section2").css("height", "25px");
			$("#section2").css("width", "375px");
			$("#section2").fadeIn();
			$("#section2").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content2").fadeIn(300);
				});
			});
		}, 800);
	});
	
	$(".content4 .section-3").on("click", function() {
		$(".content4").fadeOut();
		$("#section4").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#section4").fadeOut();			
		}, 1000);
		
		setTimeout(function() {
			$("#section3").animateRotate(0, 0);
			$("#section3").css("height", "25px");
			$("#section3").css("width", "375px");
			$("#section3").fadeIn();
			$("#section3").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".content3").fadeIn(300);
				});
			});
		}, 800);
	});
	
	
});