$(document).ready(function () {


    const toggleDarkModeButton = $('#toggleDarkMode');
    const body = $('body');


    let isDarkMode = false;
    let StringIsDarkMode = "Dart";
    function updateDarkModeState() {
        // Lưu trạng thái chế độ tối vào localStorage
        localStorage.setItem('isDarkModeEnabled', StringIsDarkMode);
    }

    const localStorageIsDarkMode = localStorage.getItem('isDarkModeEnabled');
    // const isDarkMode = getDarkModeState();

    if (localStorageIsDarkMode == "Dark") {

        body.removeClass('light-mode');
        body.addClass('dart-mode');
        isDarkMode = false;
        $('#contact-link').addClass('clicked_toi');

    } else if (localStorageIsDarkMode == "Light") {

        body.removeClass('dart-mode');
        body.addClass('light-mode');
        isDarkMode = true;
        $('#contact-link').addClass('clicked_sang');

    }

    $('body').css('display', 'block');



    function createStar() {
        const star = $('<div>').addClass('star');

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 2 + 0.5; // Thời gian lấp lánh từ 0.5 đến 2 giây

        star.css({
            left: `${x}px`,
            top: `${y}px`,
            animationDuration: `${duration}s`
        });

        $('#stars').append(star);
    }

    // Tạo danh sách ngôi sao
    function createStars() {
        for (let i = 0; i < 200; i++) {
            createStar();
        }
    }


    createStars();



    toggleDarkModeButton.on('click', function () {


        isDarkMode = !isDarkMode;


        if (isDarkMode) {

            body.removeClass('dart-mode');
            body.addClass('light-mode');
            StringIsDarkMode = "Light";
            updateDarkModeState();
            $('#contact-link').addClass('clicked_sang');

        } else {

            body.removeClass('light-mode');
            body.addClass('dart-mode');
            StringIsDarkMode = "Dark";
            updateDarkModeState();
            $('#contact-link').addClass('clicked_toi');

        }
    });
});
