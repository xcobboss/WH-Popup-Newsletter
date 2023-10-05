document.addEventListener('DOMContentLoaded', function () {
    const checkAllBox = document.getElementById('check-all');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const popup = document.getElementById('popup');
    const openPopupBtn = document.getElementById('open-popup-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');

    // Check/Uncheck All functionality
    checkAllBox.addEventListener('change', function (e) {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = e.target.checked;
        });
    });

    // Open Popup on Button Click
    openPopupBtn.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    // Close Popup on "X" Click
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('email-form');
    const closeAfterSubmitBtn = document.getElementById('close-after-submit-btn'); // New Close Button

    // Form Submit functionality
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!atLeastOneChecked) {
            alert('Please select at least one wine region or department.');
        } else {
            submitButton.value = 'Submitting...';
            submitButton.classList.add('submitting');

            // Simulate submission
        setTimeout(function () {
    submitButton.value = 'Sign Up Complete';
    submitButton.classList.remove('submitting');
    submitButton.classList.add('done');
    submitButton.classList.add('disabled'); // Add disabled class
    submitButton.disabled = true;

    closeAfterSubmitBtn.style.display = 'block'; // Display Close Button

    closeAfterSubmitBtn.addEventListener('click', function () { // Close button functionality
        popup.style.display = 'none';
    });
}, 2000);
        }
    });
});
