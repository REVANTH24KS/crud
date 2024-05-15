// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the form element by its ID
    const form = document.getElementById("add_user");

    // Check if the form element exists
    if (form) {
        // Add an event listener for the form submission
        form.addEventListener("submit", function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Fetch API to submit the form data asynchronously
            fetch("/api/users", {
                method: "POST",
                body: new FormData(this) // Use FormData to gather form data
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Handle successful response (e.g., redirect to success page)
                window.location.href = "/add-user-success";
            })
            .catch(error => {
                console.error("There was a problem with your fetch operation:", error);
                // Handle errors (e.g., display error message to the user)
            });
        });
    } else {
        console.error("Form with id 'add_user' not found.");
    }
});
