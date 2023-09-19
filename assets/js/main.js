(function ($) {
    "use strict";
    jQuery(document).on("ready", function () {
        var wind = $(window);
        // Header Sticky
        $(".procleaning-fixed-nav").scrollToFixed();

        // Mean Menu
        jQuery(".mean-menu").meanmenu({
            meanScreenWidth: "991",
        });

        //  Star Counter
        $(".counter-number").counterUp({
            delay: 15,
            time: 2000,
        });

        // Popup Video
        $(".popup-youtube").magnificPopup({
            disableOn: 320,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        // Testimonials-1 owl
        $("#testimonial-slide").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 2,
                },
            },
        });

        // Testimonials-2 owl
        $("#testimonial-slide2").owlCarousel({
            margin: 0,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            smartSpeed: 800,
            dots: true,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
					center: false,
                },
                768: {
                    items: 1,
                },
                1000: {
                    items: 3,
                },
            },
        });
		
		//  Product shop owl
		$('#product-shop-slide').owlCarousel({
			margin: 0,
			autoplay: true,
			autoplayTimeout: 4000,
			nav: false,
			smartSpeed: 1000,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsiveClass:true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});
		
        // Partner Logo
        $("#partner-carousel").owlCarousel({
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });
		
        // Input Plus & Minus Number JS
        $(".input-counter").each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find(".plus-btn"),
                btnDown = spinner.find(".minus-btn"),
                min = input.attr("min"),
                max = input.attr("max");

            btnUp.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });

        // FAQ Accordion
        $(function () {
            $(".accordion")
                .find(".accordion-title")
                .on("click", function () {
                    // Adds Active Class
                    $(this).toggleClass("active");
                    // Expand or Collapse This Panel
                    $(this).next().slideToggle("slow");
                    // Hide The Other Panels
                    $(".accordion-content").not($(this).next()).slideUp("slow");
                    // Removes Active Class From Other Titles
                    $(".accordion-title").not($(this)).removeClass("active");
                });
        });

        // Go to Top
        $(function () {
            // Scroll Event
            $(window).on("scroll", function () {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $(".go-top").addClass("active");
                if (scrolled < 600) $(".go-top").removeClass("active");
            });
            // Click Event
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: "0" }, 500);
            });
        });

        // Count Time
        function makeTimer() {
            var endTime = new Date("January 10, 2022 17:00:00 PDT");
            var endTime = Date.parse(endTime) / 1000;
            var now = new Date();
            var now = Date.parse(now) / 1000;
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - days * 86400) / 3600);
            var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
            var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            makeTimer();
        }, 1000);
    });

    // MagnificPopup
    $(".project-container-3").magnificPopup({
        delegate: ".popimg",
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    // Project isotope and filter
    $(window).on("load", function () {
        var projectIsotope = $(".project-container-3").isotope({
            itemSelector: ".project-flip-grid, .project-grid-box",
        });
        $("#project-flters li").on("click", function () {
            $("#project-flters li").removeClass("filter-active");
            $(this).addClass("filter-active");
            projectIsotope.isotope({
                filter: $(this).data("filter"),
            });
        });
    });

    // Search Popup JS
    $(".close-btn").on("click", function () {
        $(".search-overlay").fadeOut();
        $(".search-btn").show();
        $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function () {
        $(this).hide();
        $(".search-overlay").fadeIn();
        $(".close-btn").addClass("active");
    });

    // WOW JS
    $(window).on("load", function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow", // Animated element css class (default is wow)
                animateClass: "animated", // Animation css class (default is animated)
                offset: 20, // Distance to the element when triggering the animation (default is 0)
                mobile: true, // Trigger animations on mobile devices (default is true)
                live: true, // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });
	
	/*START CONTACT MAP JS*/
	if($('.map-canvas').length) {
		// Specify features and elements to define styles.
		var styles = [{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#eeeeee"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}];
		var mapOptions = {
			center: new google.maps.LatLng(40.7143528, -74.0059731),
			zoom: 12,
			scrollwheel: false,
			panControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			disableDefaultUI: false,
			zoomControl: true,
			disableDoubleClickZoom: false,
			fullscreenControl: false,
			styles: styles
		};
		var initMap = function() {
			var contactdata = $('#contact-map').data('content');
			var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
			var bounds = new google.maps.LatLngBounds();
			var myIcon = new google.maps.MarkerImage("assets/img/map_pin.png", null, null, null, new google.maps.Size(50, 55));
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.7143528, -74.0059731),
				map: map,
				icon: myIcon
			});
		};
		initMap();
		google.maps.event.addDomListener(window, 'load resize', initMap);
	}
	/*END CONTACT MAP JS*/
})(jQuery);
