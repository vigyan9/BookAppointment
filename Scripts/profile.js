//sidebar profile name





// Function to update both elements (span and input) with the email value from localStorage


document.addEventListener('DOMContentLoaded', function() {
    const storedEmail = localStorage.getItem('userEmail');
    console.log('Retrieved email:', storedEmail); // Log for debugging

    if (storedEmail) {
        document.querySelectorAll('.navEmail').forEach(element => {
            if (element.tagName === 'INPUT') {
                element.value = storedEmail;
            } else {
                element.textContent = storedEmail;
            }
        });
        document.getElementById('cardEmail').textContent = storedEmail;
    } else {
        console.warn('No stored email found.');
    }
});



// Function to handle the profile image update
function updateProfileImage() {
    const fileInput = document.getElementById('profileImageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profileImage').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}






/// Profile Editing Functions
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user has already saved their profile data
    if (localStorage.getItem('profileSaved') === 'true') {
        // Show the profile card
        document.getElementById('profileCard').style.display = 'block';
        document.getElementById('profileForm').style.display = 'none';

        // Load saved data from localStorage into the card
        document.getElementById('cardName').textContent = localStorage.getItem('name') || 'N/A';
        document.querySelectorAll('.navEmail').forEach(element => {
            element.textContent = localStorage.getItem('email') || 'N/A';
        });
        document.getElementById('cardStudentId').textContent = localStorage.getItem('studentId') || 'N/A';
        document.getElementById('cardRollNo').textContent = localStorage.getItem('rollNo') || 'N/A';
        document.getElementById('cardBranch').textContent = localStorage.getItem('branch') || 'N/A';
        document.getElementById('cardCourse').textContent = localStorage.getItem('course') || 'N/A';
        document.getElementById('cardMobile').textContent = localStorage.getItem('mobile') || 'N/A';
        document.getElementById('cardGender').textContent = localStorage.getItem('gender') || 'N/A';
        document.getElementById('cardDob').textContent = localStorage.getItem('dob') || 'N/A';
    } else {
        // Show the form if no profile is saved
        document.getElementById('profileForm').style.display = 'block';
        document.getElementById('profileCard').style.display = 'none';
    }
});

// Save profile data when the form is submitted
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Save form data to localStorage
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('studentId', document.getElementById('studentId').value);
    localStorage.setItem('rollNo', document.getElementById('rollNo').value);
    localStorage.setItem('branch', document.getElementById('branch').value);
    localStorage.setItem('course', document.getElementById('course').value);
    localStorage.setItem('mobile', document.getElementById('mobile').value);
    localStorage.setItem('gender', document.getElementById('gender').value);
    localStorage.setItem('dob', document.getElementById('dob').value);
    localStorage.setItem('profileSaved', 'true');

    // Update profile card with new data
    document.getElementById('cardName').textContent = document.getElementById('name').value || 'N/A';
    document.querySelectorAll('.navEmail').forEach(element => {
        element.textContent = document.getElementById('email').value || 'N/A';
    });
    document.getElementById('cardStudentId').textContent = document.getElementById('studentId').value || 'N/A';
    document.getElementById('cardRollNo').textContent = document.getElementById('rollNo').value || 'N/A';
    document.getElementById('cardBranch').textContent = document.getElementById('branch').value || 'N/A';
    document.getElementById('cardCourse').textContent = document.getElementById('course').value || 'N/A';
    document.getElementById('cardMobile').textContent = document.getElementById('mobile').value || 'N/A';
    document.getElementById('cardGender').textContent = document.getElementById('gender').value || 'N/A';
    document.getElementById('cardDob').textContent = document.getElementById('dob').value || 'N/A';

    // Show the profile card and hide the form
    document.getElementById('profileForm').style.display = 'none';
    document.getElementById('profileCard').style.display = 'block';
});

// Edit button to show the form for editing
function editCard() {
    document.getElementById('profileForm').style.display = 'block';
    document.getElementById('profileCard').style.display = 'none';

    // Load data from localStorage into form fields
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('studentId').value = localStorage.getItem('studentId') || '';
    document.getElementById('rollNo').value = localStorage.getItem('rollNo') || '';
    document.getElementById('branch').value = localStorage.getItem('branch') || '';
    document.getElementById('course').value = localStorage.getItem('course') || '';
    document.getElementById('mobile').value = localStorage.getItem('mobile') || '';
    document.getElementById('gender').value = localStorage.getItem('gender') || 'Male';
    document.getElementById('dob').value = localStorage.getItem('dob') || '';
}

// Get all keys in local storage
const keys = Object.keys(localStorage);

// Iterate through keys and log key-value pairs
keys.forEach(key => {
  console.log(`${key}: ${localStorage.getItem(key)}`);
});

// Function to enable profile form editing
function editProfile() {
    const profileForm = document.getElementById('profileForm');
    const profileCard = document.getElementById('profileCard');

    if (profileForm && profileCard) {
        profileForm.style.display = 'block';
        profileCard.style.display = 'none';

        // Enable form inputs for editing
        const inputs = profileForm.querySelectorAll('input, select');
        inputs.forEach(input => input.disabled = false);

        // Update button states
        document.getElementById('saveButton').disabled = false;
        document.getElementById('editButton').disabled = true;
    }
}

// Function to handle clicking the "Edit" button on the card



// JavaScript to handle the scroll when the "View History" button is clicked
document.querySelector('.scroll-to-profile').addEventListener('click', function() {
    // Scroll to the profile form section smoothly
    const profileFormSection = document.getElementById('profileFormSection');
    if (profileFormSection) {
        profileFormSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});


// history booking modal 
// Function to view booked history (simulate with sample data)
function viewHistory() {
    // Simulating a history data fetching process
    const historyData = [
        { date: "2024-11-01", slot: "10:00 AM - 11:00 AM", event: "Football Match" },
        { date: "2024-11-03", slot: "2:00 PM - 3:00 PM", event: "Badminton" },
        { date: "2024-11-05", slot: "11:00 AM - 12:00 PM", event: "Tennis" },
    ];

    // Populate the modal with history data
    const historyContent = document.getElementById("historyContent");
    historyContent.innerHTML = ""; // Clear previous content
    if (historyData.length > 0) {
        historyData.forEach(item => {
            const historyItem = document.createElement("p");
            historyItem.innerHTML = `Date: ${item.date}, Slot: ${item.slot}, Event: ${item.event}`;
            historyContent.appendChild(historyItem);
        });
    } else {
        historyContent.innerHTML = "<p>No history available</p>";
    }
}

// Open the modal
function openModal() {
    document.getElementById("historyModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("historyModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById("historyModal")) {
        closeModal();
    }
};


const navNameElement = document.getElementById('name');
console.log(navNameElement);
ocument.addEventListener('DOMContentLoaded', function() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const UserName = document.getElementById('name'); // Ensure this matches the element in the side nav

    if (userNameDisplay && UserName) {
        // Set the side nav name to the content of the main name display
        UserName.textContent = userNameDisplay.textContent.trim();
    } else {
        console.error('User name element not found in the side nav.');
    }
});