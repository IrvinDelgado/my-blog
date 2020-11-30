document.getElementById('to-project-arrow').addEventListener('click', () => {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('to-contact-arrow').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});