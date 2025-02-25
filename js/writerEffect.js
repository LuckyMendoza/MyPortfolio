//name effects

document.addEventListener("DOMContentLoaded", function () {
    const h1Element = document.getElementById("typing-text");
    const lastNameElement = document.getElementById("last-name");
    const names = ["Santos", "Mendoza"];
    let nameIndex = 0;
    let isDeleting = false;
    let charIndex = names[nameIndex].length;

    // Show the text after 1.5 seconds
    setTimeout(() => {
        h1Element.classList.add("show");
        startTypingEffect();
    }, 1500);

    function startTypingEffect() {
        function typeEffect() {
            let currentName = names[nameIndex];
            let displayText = isDeleting
                ? currentName.substring(0, charIndex--)
                : currentName.substring(0, charIndex++);

            lastNameElement.textContent = displayText;

            if (!isDeleting && charIndex === currentName.length + 1) {
                setTimeout(() => {
                    isDeleting = true;
                }, 1000); // Wait before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                nameIndex = (nameIndex + 1) % names.length; // Switch to next name
            }

            setTimeout(typeEffect, isDeleting ? 100 : 150); // Typing & deleting speed
        }

        setTimeout(typeEffect, 500); // Start effect after small delay
    }
});

//end typewriter

//about me typewriter 
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const text = "ABOUT ME"; // Text to type out
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML = text.substring(0, index + 1) + "<span>|</span>"; // Cursor
            index++;
            setTimeout(typeEffect, 150); // Adjust typing speed
        } else {
            textElement.innerHTML = text; // Remove cursor at the end
        }
    }

    setTimeout(typeEffect, 1000); // Delay before typing starts
});
