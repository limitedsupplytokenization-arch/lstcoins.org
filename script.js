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

// Email subscription functionality
async function subscribeEmail() {
    const emailInput = document.getElementById('emailInput');
    const subscribeMessage = document.getElementById('subscribeMessage');
    const subscribeButton = document.querySelector('.subscribe-button');
    const successCheckmark = document.getElementById('successCheckmark');
    const swapContainer = document.querySelector('.swap-container');
    
    const email = emailInput.value.trim();
    
    // Email format kontrolü
    if (!email || !email.includes('@')) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        // Buton durumunu güncelle
        subscribeButton.disabled = true;
        subscribeButton.textContent = 'Subscribing...';
        
        // API'ye email gönder
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Başarılı durumda overlay göster
            const successOverlay = document.getElementById('successOverlay');
            successOverlay.classList.add('show');
            
            // 5 saniye sonra overlay'i gizle
            setTimeout(() => {
                successOverlay.classList.remove('show');
            }, 5000);
            
            emailInput.value = ''; // Input'u temizle
            updateButtonState(); // Update button state after clearing input
        } else {
            showMessage(data.message, 'error');
        }
        
    } catch (error) {
        showMessage('Network error. Please try again.', 'error');
    } finally {
        // Buton durumunu geri al
        subscribeButton.disabled = false;
        subscribeButton.textContent = 'Subscribe →';
    }
}

// Mesaj gösterme fonksiyonu
function showMessage(message, type) {
    const messageDiv = document.getElementById('subscribeMessage');
    messageDiv.textContent = message;
    messageDiv.className = `subscribe-message ${type}`;
    
    // 5 saniye sonra mesajı gizle
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'subscribe-message';
    }, 5000);
}

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Update button state based on email input
function updateButtonState() {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.querySelector('.subscribe-button');
    
    if (emailInput && subscribeButton) {
        const email = emailInput.value.trim();
        const isValidEmail = validateEmail(email);
        
        subscribeButton.disabled = !isValidEmail;
        
        if (isValidEmail) {
            subscribeButton.style.opacity = '1';
        } else {
            subscribeButton.style.opacity = '0.6';
        }
    }
}

// Enter tuşu ile subscribe
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.querySelector('.subscribe-button');
    
    if (emailInput && subscribeButton) {
        // Sayfa yüklendiğinde buton disabled
        subscribeButton.disabled = true;
        subscribeButton.style.opacity = '0.6';
        
        // Email input değişikliklerini dinle
        emailInput.addEventListener('input', updateButtonState);
        
        // Enter tuşu ile subscribe
        emailInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !subscribeButton.disabled) {
                subscribeEmail();
            }
        });
    }
});

