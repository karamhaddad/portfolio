//function for nav menu toggle
function toggleMenu() {
  //When menu clicked, function is called from html...
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden'); // Remove "hidden" class to show menu
    mobileMenu.style.right = '0%'; // Slide menu in from right
    menuIcon.classList.add('open'); // Add "open" class to change icon to "X"
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenu.style.right = '-100%';
    menuIcon.classList.remove('open'); // Remove "open" class to revert icon back to "="
  }
}

// Safely attach listeners only if the elements exist:
const cardWidth = 270; // width of card from CSS...

const exp_pre_btn = document.getElementById('exp-pre-btn');
const exp_nxt_btn = document.getElementById('exp-nxt-btn');
const experience_container = document.getElementById('experience-container');

if (exp_pre_btn && experience_container) {
  exp_pre_btn.addEventListener('click', () => {
    experience_container.scrollLeft -= cardWidth;
  });
}

if (exp_nxt_btn && experience_container) {
  exp_nxt_btn.addEventListener('click', () => {
    experience_container.scrollLeft += cardWidth;
  });
}

// Now code for projects section:
const proj_pre_btn = document.getElementById('proj-pre-btn');
const proj_nxt_btn = document.getElementById('proj-nxt-btn');
const projects_container = document.getElementById('projects-container');

if (proj_pre_btn && projects_container) {
  proj_pre_btn.addEventListener('click', () => {
    projects_container.scrollLeft -= cardWidth;
  });
}

if (proj_nxt_btn && projects_container) {
  proj_nxt_btn.addEventListener('click', () => {
    projects_container.scrollLeft += cardWidth;
  });
}

console.log('Script loaded!'); //for testing to make sure script is runnign

function initUselessButton() {
    const uselessButton = document.getElementById('useless-button');
    if (uselessButton) {
        // Get stored clicks from localStorage or start at 0
        let clicks = parseInt(localStorage.getItem('uselessClicks')) || 0;
        uselessButton.textContent = clicks === 0 ? 'Useless Button' : `Useless Button (Clicks: ${clicks} 🎉)`;

        uselessButton.addEventListener('click', function() {
            clicks++;
            localStorage.setItem('uselessClicks', clicks);
            uselessButton.textContent = `Useless Button (Clicks: ${clicks} 🎉)`;
            
            // Easter egg messages at certain click milestones
            if (clicks === 10) {
                alert('Still clicking? Really?');
            } else if (clicks === 50) {
                alert('Wow, you must be really bored!');
            } else if (clicks === 100) {
                alert('Achievement Unlocked: Master of Useless Clicking! 🏆');
            } else if (clicks === 150) {
                alert('At this point, you better be subscribed to my YouTube channel!');
            } else if (clicks === 200) {
                alert('Alright, you win. Send me a screenshot of your clicks to my LinkedIn for a surprise! 👀');
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUselessButton);
} else {
    initUselessButton();
}