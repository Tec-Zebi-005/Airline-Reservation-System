$(document).ready(function() {
    // Initially disable the boarding pass link
    $("#boardingPassLink").css({"pointer-events": "none", "opacity": "0.6"});

    // Handle form submission for payment
    $("#paymentForm").on("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Basic form validation
        let cardNumber = $("#cardNumber").val();
        let expiry = $("#expiry").val();
        let cvc = $("#cvc").val();
        let paymentMethod = $("input[name='optradio']:checked").val();

        if (cardNumber && expiry && cvc && paymentMethod) {
            // Simulate payment processing
            alert("Payment processed successfully!");
            
            // Enable the boarding pass link
            $("#boardingPassLink").css({"pointer-events": "auto", "opacity": "1"});
        } else {
            alert("Please fill out all fields correctly.");
        }
    });
});