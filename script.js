document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function(event) {
            event.preventDefault();
            nav.classList.toggle('active');
            console.log('Menu toggled'); // For debugging
        });
    }

    // Close menu when clicking outside
     document.addEventListener('click', function(event) {
        if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== menuToggle) {
            nav.classList.remove('active');
        }
    });

    // Project hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => document.body.classList.add('project-hovered'));
        card.addEventListener('mouseleave', () => document.body.classList.remove('project-hovered'));
    });

    // Smooth page transition
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                document.querySelector('main').style.opacity = 0;
                setTimeout(() => {
                    window.location.href = this.href;
                }, 500);
            }
        });
    });
});

// Fill it with project data.
const projects = [
    { title: "Unsupervised Learning Trading Strategy", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" },
    // Add more projects here
];

// Function to display projects
function displayProjects() {
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I'll get back to you soon.");
    event.target.reset();
}

// Additional event listeners
document.addEventListener("DOMContentLoaded", () => {
    displayProjects();

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmission);
    }
});