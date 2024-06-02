$(document).ready(function () {
    const body = $('body');
    const toggleDarkModeButton = $('#toggleDarkMode');
    const navLinks = $('.header .nav a');
    const socialIcons = $('.social-icons a i');
    const typingEffect = $('#typing-effect');

    // Check the dark mode state from localStorage
    const darkModeState = localStorage.getItem('darkMode');

    if (darkModeState === 'enabled') {
        body.addClass('dark-mode');
        applyDarkModeStyles();
    } else {
        body.removeClass('dark-mode');
        applyLightModeStyles();
    }

    // Handle dark mode toggle
    toggleDarkModeButton.on('click', function () {
        body.toggleClass('dark-mode');
        const isDarkModeEnabled = body.hasClass('dark-mode');
        if (isDarkModeEnabled) {
            localStorage.setItem('darkMode', 'enabled');
            applyDarkModeStyles();
        } else {
            localStorage.setItem('darkMode', 'disabled');
            applyLightModeStyles();
        }
    });

    function applyDarkModeStyles() {
        navLinks.css('color', '#fff');
        socialIcons.css('color', '#00ffff');
        typingEffect.css('text-shadow', '0 0 5px #00ffff, 0 0 5px #00ffff, 0 0 5px #00ffff, 0 0 5px #00ffff');
        // Additional dark mode styles here
    }

    function applyLightModeStyles() {
        navLinks.css('color', '#000');
        socialIcons.css('color', '#2aabd5');
        typingEffect.css('text-shadow', 'none');
        // Additional light mode styles here
    }

    navLinks.on('click', function () {
        navLinks.removeClass('clicked');
        $(this).addClass('clicked');
    });

    socialIcons.hover(
        function () {
            $(this).css('color', '#00ffff');
        },
        function () {
            const isDarkModeEnabled = body.hasClass('dark-mode');
            $(this).css('color', isDarkModeEnabled ? '#00ffff' : '#2aabd5');
        }
    );
});