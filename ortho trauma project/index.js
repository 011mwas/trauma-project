document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');
        const plusIcon = item.querySelector('.plus-icon');

        questionButton.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Option 1: Close all others when one is opened
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.plus-icon');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.paddingTop = '0';
                    otherAnswer.style.paddingBottom = '0';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answerDiv.style.maxHeight = '0';
                answerDiv.style.paddingTop = '0'; // Collapse padding
                answerDiv.style.paddingBottom = '0'; // Collapse padding
                plusIcon.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                // Set padding before calculating scrollHeight for smooth opening
                answerDiv.style.paddingTop = '0'; // Initially no top padding for animation
                answerDiv.style.paddingBottom = '20px'; // Desired bottom padding
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                plusIcon.style.transform = 'rotate(45deg)';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // ... (your existing FAQ script if any, ensure it's compatible or separated)

    const contactForm = document.getElementById('contactForm');
    const formResponseMessage = document.getElementById('formResponseMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default browser submission

            // Clear previous messages
            hideError('emailError');
            hideError('messageError');
            formResponseMessage.style.display = 'none';
            formResponseMessage.textContent = '';
            formResponseMessage.className = 'form-response-message'; // Reset class

            // Get form data
            const emailInput = document.getElementById('contactEmail');
            const messageInput = document.getElementById('contactMessage');

            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            let isValid = true;

            // Basic Validation
            if (email === '') {
                showError('emailError', 'Email address is required.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address.');
                isValid = false;
            }

            if (message === '') {
                showError('messageError', 'Message cannot be empty.');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message should be at least 10 characters long.');
                isValid = false;
            }


            if (isValid) {
                // Simulate form submission
                console.log('Form submitted (simulated):');
                console.log('Email:', email);
                console.log('Message:', message);

                // Display success message
                formResponseMessage.textContent = 'Message sent successfully! We typically respond within 12 hours.';
                formResponseMessage.classList.add('success');
                formResponseMessage.style.display = 'block';

                // Clear the form
                contactForm.reset();

                // Hide success message after a few seconds
                setTimeout(() => {
                    formResponseMessage.style.display = 'none';
                }, 5000);

            } else {
                // Optional: Display a general error message if individual field errors are not enough
                // formResponseMessage.textContent = 'Please correct the errors above.';
                // formResponseMessage.classList.add('error');
                // formResponseMessage.style.display = 'block';
            }
        });
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(fieldId, message) {
        const errorField = document.getElementById(fieldId);
        if (errorField) {
            errorField.textContent = message;
            // You might want to add a class to the input field itself for styling
            // document.getElementById(fieldId.replace('Error', '')).classList.add('input-error');
        }
    }

    function hideError(fieldId) {
        const errorField = document.getElementById(fieldId);
        if (errorField) {
            errorField.textContent = '';
            // document.getElementById(fieldId.replace('Error', '')).classList.remove('input-error');
        }
    }

    // --- Existing FAQ script from previous steps ---
    // (Ensure it's here if this is the only script file and it was used before)
    // Example:
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) { // Check if FAQ items exist on the page
        faqItems.forEach(item => {
            const questionButton = item.querySelector('.faq-question');
            const answerDiv = item.querySelector('.faq-answer');
            // ... (rest of your FAQ script logic) ...
            // Make sure your FAQ script is correctly placed or imported if in a separate file
        });
    }


});

d
