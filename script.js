// Social dropdown toggle function
function toggleSocialDropdown() {
    const dropdown = document.getElementById('socialDropdown');
    const arrow = document.querySelector('.dropdown-arrow');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        dropdown.classList.add('show');
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const socialBtn = document.querySelector('.social-btn');
    const dropdown = document.getElementById('socialDropdown');
    
    if (!socialBtn.contains(event.target)) {
        dropdown.classList.remove('show');
        document.querySelector('.dropdown-arrow').style.transform = 'rotate(0deg)';
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('socialDropdown');
        dropdown.classList.remove('show');
        document.querySelector('.dropdown-arrow').style.transform = 'rotate(0deg)';
    }
});

// Simple success animation function
function subscribeEmail() {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.querySelector('.subscribe-button');
    
    const email = emailInput.value.trim();
    
    // Basic email format check
    if (!email || !email.includes('@')) {
        return; // Don't show anything if invalid
    }
    
    // Show success overlay
    const successOverlay = document.getElementById('successOverlay');
    successOverlay.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        successOverlay.classList.remove('show');
    }, 5000);
    
    // Clear input
    emailInput.value = '';
}



// Enter tuşu ile subscribe
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    
    if (emailInput) {
        // Enter tuşu ile subscribe
        emailInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                subscribeEmail();
            }
        });
    }
});

