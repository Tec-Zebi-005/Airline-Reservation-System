 if ($("#myCarousel").length) {
        $("#myCarousel").carousel({
            interval: 5000, // Slide every 5 seconds
            pause: "hover", // Pause on hover
            wrap: true // Loop back to first slide after last
        });

        // Optional: Handle click events on indicators for tracking or analytics
        $(".carousel-indicators li").on("click", function() {
            let slideIndex = $(this).data("slide-to");
            $("#myCarousel").carousel(slideIndex);
            console.log("Navigated to slide: " + slideIndex);
        });

        // Optional: Handle slide transition for custom effects
        $("#myCarousel").on("slide.bs.carousel", function(event) {
            let nextSlide = $(event.relatedTarget).index();
            console.log("Sliding to slide: " + nextSlide);
        });
    }