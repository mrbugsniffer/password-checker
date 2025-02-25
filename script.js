document.addEventListener("DOMContentLoaded", function () {
    let password = document.getElementById("password");
    let power = document.getElementById("power-point");
    let strengthText = document.createElement('div'); // Create a new div for text
    strengthText.classList.add('strength-text');
    document.querySelector('.group').appendChild(strengthText); // Append to the group container

    // Password strength levels
    const strengthMessages = [
        "Very Weak",   // < 6 characters, no variety
        "Weak",        // Single character set
        "Medium",      // 2 character sets
        "Strong",      // 3 character sets
        "Very Strong"  // All character sets, long enough
    ];

    password.oninput = function () {
        let value = password.value;
        let point = 0;

        // Regular expressions to match different character types
        let hasUppercase = /[A-Z]/.test(value);
        let hasLowercase = /[a-z]/.test(value);
        let hasNumbers = /[0-9]/.test(value);
        let hasSpecialChars = /[^A-Za-z0-9]/.test(value); // Matches non-alphanumeric characters

        // Length must be at least 8 characters
        if (value.length >= 8) {
            point += 1; // Increment for length
        }

        // Increment point for each character variety found
        if (hasUppercase) point += 1;
        if (hasLowercase) point += 1;
        if (hasNumbers) point += 1;
        if (hasSpecialChars) point += 1;

        // Check if all conditions for "Very Strong" are met
        if (point === 5) {
            power.style.width = "100%";
            power.style.backgroundColor = "#3ba62f"; // Green
            strengthText.textContent = "Very Strong";
            strengthText.classList.remove('weak', 'medium', 'strong');
            strengthText.classList.add('very-strong');
        } else {
            // Define the width and colors based on the strength level
            let widthPower = ["1%", "25%", "50%", "75%", "100%"];
            let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

            // Update power bar width and color based on strength
            power.style.width = widthPower[point];
            power.style.backgroundColor = colorPower[point];

            // Update strength text based on the level
            strengthText.textContent = strengthMessages[point];

            // Apply appropriate classes for strength colors
            strengthText.classList.remove('weak', 'medium', 'strong', 'very-strong');
            if (point === 0) {
                strengthText.classList.add('weak');
            } else if (point === 1) {
                strengthText.classList.add('weak');
            } else if (point === 2) {
                strengthText.classList.add('medium');
            } else if (point === 3) {
                strengthText.classList.add('strong');
            } else if (point === 4) {
                strengthText.classList.add('very-strong');
            }
        }
    };
});
