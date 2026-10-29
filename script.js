// Typing animation
const roles = [
  "Software Developer",
  "Java Full Stack Developer",
  "Cybersecurity Enthusiast",
];

const roleElement = document.querySelector(".hero h2");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    roleElement.textContent = currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1500);
      return;
    }
  } else {
    roleElement.textContent = currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 50 : 100);
}

// Automatically update footer year
const footerText = document.querySelector("footer p");

footerText.textContent = `© ${new Date().getFullYear()} Amarnath S. All rights reserved.`;

// Start animation
typeRole();
