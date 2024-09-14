$(document).ready(function () {
    const navLinks = $('.header .nav a');


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

    // Khởi tạo
    createStars();

    let textIndex = 0; // Index của chuỗi hiện tại
    const texts = ["Web Developer", "FrontEnd - BackEnd Developer"]; // Mảng các chuỗi bạn muốn hiển thị
    let index = 0;

    function typeWriter() {
        const typingEffect = $('#typing-effect');
        const text = texts[textIndex]; // Lấy chuỗi tương ứng với textIndex

        if (index < text.length) {
            typingEffect.html(text.substring(0, index + 1) + "|");
            index++;
            setTimeout(typeWriter, 100); // Thời gian trễ giữa các từ (milliseconds)
        } else {
            setTimeout(function () {
                typingEffect.html(text); // Hiển thị toàn bộ chuỗi khi hiệu ứng hoàn thành
                setTimeout(function () {
                    textIndex = (textIndex + 1) % texts.length; // Chuyển đến chuỗi tiếp theo trong mảng
                    index = 0; // Đặt lại index về 0 để bắt đầu từ đầu
                    typeWriter(); // Gọi lại hàm typeWriter để bắt đầu hiệu ứng mới
                }, 1000); // Thời gian trễ giữa các chu kỳ lặp (milliseconds)
            }, 500); // Thời gian hiển thị ký tự "|" trước khi biến mất (milliseconds)
        }
    }

    // Gọi hàm để bắt đầu hiệu ứng
    typeWriter();

    $('#downloadButton').on('click', function (event) {
        event.preventDefault(); // Prevent default link action
        var url = 'Profile_ThinhNguyen/TaiNguyen/CV_NGUYEN VAN THNH.pdf'; // Specify the URL of your PDF file here
        var a = $('<a>').attr({
            href: url,
            download: 'Profile_ThinhNguyen/TaiNguyen/CV_NGUYEN VAN THNH.pdf'
        });
        $('body').append(a);
        a[0].click();
        a.remove();
    });

    // Function to handle view button click
    $('#viewButton').on('click', function (event) {
        event.preventDefault(); // Prevent default link action
        var url = 'Profile_ThinhNguyen/TaiNguyen/CV_NGUYEN VAN THNH.pdf'; // Specify the URL of your PDF file here
        window.open(url, '_blank'); // Open in new tab
    });


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
        $('#home-link').addClass('clicked_toi');

    } else if (localStorageIsDarkMode == "Light") {

        body.removeClass('dart-mode');
        body.addClass('light-mode');
        isDarkMode = true;
        $('#home-link').addClass('clicked_sang');

    }
    $('body').css('display', 'block');

    toggleDarkModeButton.on('click', function () {


        isDarkMode = !isDarkMode;


        if (isDarkMode) {

            body.removeClass('dart-mode');
            body.addClass('light-mode');
            StringIsDarkMode = "Light";
            updateDarkModeState();
            $('#home-link').addClass('clicked_sang');




        } else {

            body.removeClass('light-mode');
            body.addClass('dart-mode');
            StringIsDarkMode = "Dark";
            updateDarkModeState();
            $('#home-link').addClass('clicked_toi');



        }
    });
});
