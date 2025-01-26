/*  Name: Manjot Kaur and Subhana Hashimi
    Student ID:  100951033 and 100949958
    Date: 2025-01-25
 */

document.addEventListener('DOMContentLoaded', function () {
    // Filter dropdown for events
    const eventFilter = document.getElementById('eventFilter'); // Get the filter dropdown element
    const eventCards = document.querySelectorAll('.col-md-4'); // Get all event cards (ensure this matches the HTML structure)

    // Check if the filter dropdown exists
    if (eventFilter) {
        eventFilter.addEventListener('change', function () {
            const selectedCategory = eventFilter.value; // Get the selected filter value

            // Loop through all event cards
            eventCards.forEach(function (card) {
                const cardCategory = card.getAttribute('data-category'); // Get the card's category

                // Show or hide the card based on the filter selection
                card.style.display =
                    selectedCategory === 'all' || cardCategory === selectedCategory
                        ? 'block' // Show card
                        : 'none'; // Hide card
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Navbar active link highlight
    const links = document.querySelectorAll('.nav-link'); // Get all navigation links
    links.forEach(link => {
        if (window.location.href.includes(link.href)) {
            link.classList.add('active'); // Add 'active' class to the current page link
        }
    });

    // "Get Involved" button functionality
    const GetInvolvedBtn = document.getElementById("GetInvolvedBtn"); // Get the button
    if (GetInvolvedBtn) {
        GetInvolvedBtn.addEventListener("click", function () {
            location.href = "opportunities.html"; // Redirect to opportunities page
        });
    }

    // List of opportunities to be displayed
    const opportunities = [
        { title: "Beach Cleanup", description: "Help clean up the beach!", date: "2025-02-01" },
        { title: "Park Restoration", description: "Join us to restore the beauty of the local park!", date: "2025-02-15" },
        { title: "Tree Planting Drive", description: "Plant trees to help the environment and beautify the community.", date: "2025-03-01" },
        { title: "Community Garden Setup", description: "Help create a community garden for everyone to enjoy.", date: "2025-03-15" },
        { title: "Neighborhood Cleanup", description: "Clean up the streets and public spaces in your neighborhood.", date: "2025-04-01" },
        { title: "Riverbank Cleanup", description: "Remove trash and debris from the riverbank to protect wildlife.", date: "2025-04-15" },
        { title: "Recycling Workshop", description: "Learn about recycling and help educate the community.", date: "2025-05-01" },
    ];

    // DOM references for card container and modal
    const cardsContainer = document.getElementById('cards-container'); // Container for cards
    const modal = document.getElementById('signup-modal'); // Signup modal
    const modalOverlay = document.getElementById('modal-overlay'); // Modal overlay

    // Create cards dynamically for each opportunity
    opportunities.forEach(opportunity => {
        const card = document.createElement('div'); // Create a card element
        card.className = 'card'; // Assign the card class
        card.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>${opportunity.description}</p>
            <p><strong>Date:</strong> ${opportunity.date}</p>
            <button class="signup-button">Sign Up</button>
        `;
        cardsContainer.appendChild(card); // Append card to the container

        // Add click event to the signup button to open the modal
        const button = card.querySelector('.signup-button');
        button.addEventListener('click', () => openModal(opportunity.title));
    });

    // Function to open the signup modal
    function openModal(title) {
        const modalTitle = document.getElementById('modal-title'); // Get modal title element
        modalTitle.textContent = `Sign Up for ${title}`; // Set the modal title
        modal.classList.add('active'); // Show modal
        modalOverlay.classList.add('active'); // Show overlay
    }

    // Close the modal when overlay is clicked
    modalOverlay.addEventListener('click', () => {
        modal.classList.remove('active'); // Hide modal
        modalOverlay.classList.remove('active'); // Hide overlay
    });

    // Handle form submission inside the modal
    const signupForm = document.getElementById('signup-form'); // Get the form
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form behavior

        const name = document.getElementById('name').value.trim(); // Get name value
        const email = document.getElementById('email').value.trim(); // Get email value
        const preferredRole = document.getElementById('preferredRole').value.trim(); // Get role value

        // Validate form fields
        if (!name || !email || !preferredRole) {
            alert("Please fill out all fields!"); // Alert user if fields are empty
            return; // Stop execution
        }

        try {
            const signup = new SignUp(name, email, preferredRole); // Create SignUp object
            const serializedData = signup.serialize(); // Serialize form data
            if (serializedData) {
                alert("Form submitted successfully!"); // Success message
                modal.classList.remove('active'); // Hide modal
                modalOverlay.classList.remove('active'); // Hide overlay

                // Reset the form for further use
                signupForm.reset();
            }
        } catch (error) {
            alert(error.message); // Show validation error
        }
    });
});

// Navbar modification to add 'Donate' link dynamically
document.addEventListener('DOMContentLoaded', function () {
    const navbarList = document.querySelector('.navbar-nav'); // Get the navbar list

    if (!navbarList) {
        console.error("Navbar list not found!"); // Log error if navbar not found
        return; // Stop execution
    }

    // Create 'Donate' link
    const donateLink = document.createElement('a');
    donateLink.href = '/donate'; // Set the href
    donateLink.textContent = 'Donate'; // Set the text
    donateLink.classList.add('nav-link'); // Add class for styling

    // Create a list item to hold the link
    const donateItem = document.createElement('li');
    donateItem.classList.add('nav-item', 'me-4'); // Add classes for styling
    donateItem.appendChild(donateLink); // Append the link to the list item

    // Add the 'Donate' link to the navbar
    navbarList.appendChild(donateItem);
});
