/*  Name: Manjot Kaur and Subhana Hashimi
    Student ID:  100951033 and 100949958
    Date: 2025-01-25
 */

// Back to Top Button functionality
let backToTopButton = document.getElementById("back-to-top");

// Event triggered when the user scrolls the page
window.onscroll = function() {
    scrollFunction();
};

/**
 * Function to display or hide the "Back to Top" button based on the user's scroll position.
 * - If the user scrolls down 20 pixels from the top of the document, the button is displayed.
 * - If the user scrolls back to the top, the button is hidden.
 */
function scrollFunction() {
    // Check if the scroll position is greater than 20 pixels from the top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Show the "Back to Top" button
        backToTopButton.style.display = "block";
    } else {
        // Hide the "Back to Top" button
        backToTopButton.style.display = "none";
    }
}

// Add a click event listener to the "Back to Top" button
backToTopButton.addEventListener("click", function() {
    /**
     * Scroll smoothly back to the top of the document when the button is clicked.
     * - Uses the `window.scrollTo` method with the `behavior` set to 'smooth' for a smooth scrolling effect.
     */
    window.scrollTo({top: 0, behavior: 'smooth'});
});
