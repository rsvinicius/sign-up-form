document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const requiredInputs = form.querySelectorAll('input[required]');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    const handleBlur = (input) => {
        if (input.value.trim() !== "") {
            input.classList.add('touched');
        }
    };

    const handleInput = (input) => {
        if (input.value.trim() === "") {
            input.classList.remove('touched');
        }

        if (input === passwordInput || input === confirmPasswordInput) {
            checkPasswordMatch();
        }
    };

    const checkPasswordMatch = () => {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const bothFieldsFilled = passwordValue && confirmPasswordValue;

        if (bothFieldsFilled && passwordValue !== confirmPasswordValue) {
            showError("Passwords do not match");
        } else {
            clearError();
        }
    };

    const clearError = () => {
        passwordInput.classList.remove('mismatch');
        confirmPasswordInput.classList.remove('mismatch');
        passwordError.textContent = "";
    };

    const showError = (message) => {
        passwordInput.classList.add('mismatch');
        confirmPasswordInput.classList.add('mismatch');
        passwordError.textContent = message;
    };

    requiredInputs.forEach(input => {
        input.addEventListener('blur', () => handleBlur(input));
        input.addEventListener('input', () => handleInput(input));
    });
});