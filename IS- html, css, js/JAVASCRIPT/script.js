/* Form submission event listener
Select the element with the ID 'contactForm' and add an event listener for the 'submit' event
When the form is submitted, the provided function will be executed */
document.getElementById("contactForm").addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get form values--- trim removes the white spaces.
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim(); 
    const email = document.getElementById("email").value.trim(); 
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        // Show popup message if any field is empty
        showPopup("Please fill out all fields.");
        return; // Exit the function
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!emailPattern.test(email)) {
        // Show popup message if email format is invalid
        showPopup("Please enter a valid email address.");
        return; // Exit the function
    }

    // If all validations pass
    showPopup("Form submitted successfully!"); // Show success message
    this.reset(); // Reset the form fields
});

/*
 * Validates the email address entered by the user.
 * This function retrieves the value of the email input field, checks if it is empty,
 * and validates it against a regular expression pattern for email addresses. 
 * It provides appropriate alert messages based on the validation result.
 * @returns {boolean} - Returns `true` if the email is valid and not empty, otherwise `false`.
 */
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (email.trim() === "") {
        alert("Email address cannot be empty.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    } else {
        alert("Successfully subscribed!");
        return true;
    }
}
