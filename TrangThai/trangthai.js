
let isDarkModeEnabled = false;

function toggleDarkMode() {

    isDarkModeEnabled = !isDarkModeEnabled;


    localStorage.setItem('isDarkModeEnabled', isDarkModeEnabled);


}

function getDarkModeState() {
    // Lấy trạng thái chế độ tối từ localStorage
    const storedDarkMode = localStorage.getItem('isDarkModeEnabled');
    // Chuyển đổi giá trị từ chuỗi sang boolean
    return storedDarkMode === 'false';
}

$(document).ready(function () {
    // Kiểm tra và áp dụng chế độ tối nếu cần thiết
    if (!getDarkModeState()) {
        toggleDarkMode();
    }
});
