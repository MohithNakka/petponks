document.querySelector('.hero').addEventListener('mousemove', function(e) {
    const { clientX, clientY } = e;
    const hero = e.currentTarget;
    const heroRect = hero.getBoundingClientRect();

    const offsetX = clientX - heroRect.left;
    const offsetY = clientY - heroRect.top;

    const moveX = (offsetX / heroRect.width - 0.5) * 30;
    const moveY = (offsetY / heroRect.height - 0.5) * 30;

    document.querySelectorAll('.decoration').forEach((el, index) => {
        const factor = (index + 1) * 0.3;
        el.style.transition = 'transform 0.3s ease-out';
        requestAnimationFrame(() => {
            el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    });
});

// JavaScript for hiding navbar after hero section
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const heroBottom = hero.getBoundingClientRect().bottom;

    // Hide navbar when hero section is scrolled out of view
    if (heroBottom < 0) {
        navbar.style.transform = 'translateY(-100%)'; // Hide the navbar
    } else {
        navbar.style.transform = 'translateY(0)'; // Show the navbar
    }
});


document.querySelectorAll('.animated-article .pill').forEach(pill => {
    pill.addEventListener('mouseenter', () => {
        pill.style.transition = 'transform 0.4s ease-in-out'; // Smooth transition
        pill.style.transform = 'translateY(-40px)'; // Move up by 10 pixels for a softer effect
    });

    pill.addEventListener('mouseleave', () => {
        pill.style.transition = 'transform 0.4s ease-in-out'; // Smooth return transition
        pill.style.transform = 'translateY(0)'; // Return to original position
    });
});


   
 document.addEventListener('DOMContentLoaded', function() {
    const scrollSection = document.querySelector('.horizontal-scroll-section');

    scrollSection.addEventListener('wheel', function(event) {
        const isHorizontalEndReached = 
            (scrollSection.scrollLeft + scrollSection.clientWidth >= scrollSection.scrollWidth && event.deltaY > 0) ||
            (scrollSection.scrollLeft === 0 && event.deltaY < 0);

        if (isHorizontalEndReached) {
            // Allow vertical scrolling when horizontal end is reached
            window.scrollBy(0, event.deltaY); // Scroll vertically
        } else {
            // Prevent vertical scroll and scroll horizontally
            event.preventDefault();
            scrollSection.scrollLeft += event.deltaY;
        }
    });
});


const marquee = document.querySelector('.marquee');

marquee.addEventListener('mouseenter', () => {
    marquee.classList.add('marquee-paused');
});

marquee.addEventListener('mouseleave', () => {
    marquee.classList.remove('marquee-paused');
});

document.addEventListener('DOMContentLoaded', function () {
    const faqList = document.getElementById('faq-list');
    const faqAnswer = document.getElementById('faq-answer');

    const answers = {
        answer1: 'petponks is a platform that ... (more information here).',
        answer2: 'No. consulation fee is 100% free.',
        answer3: 'Get into petponks home, ...',
        answer4: 'Complete the challeges to claim rewards, ...',
        answer5: 'If your question isn’t listed, ...',
    };

    faqList.addEventListener('click', function (e) {
        const target = e.target.closest('.faq-list-item');
        if (!target) return;
        
        e.preventDefault();

        document.querySelectorAll('.faq-list-item').forEach(item => item.classList.remove('selected'));
        target.classList.add('selected');
        faqAnswer.textContent = answers[target.getAttribute('data-answer')];
    });
});


