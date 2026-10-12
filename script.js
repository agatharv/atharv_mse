const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;

    alert("Thanks, " + name + "! Your trip to " + destination + " is ready to plan.");
    bookingForm.reset();
});
