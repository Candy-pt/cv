document.addEventListener("DOMContentLoaded", function() {
    var popupImg = document.getElementById("popupImg");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var closeBtn = document.getElementById("closeBtn");
    

    // Hiển thị popup khi nhấp vào hình ảnh
    popupImg.addEventListener("click", function() {
        overlay.style.display = "block";
        popup.style.display = "block";
    });

    // Ẩn popup khi nhấp vào nút đóng
    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });

    // Ẩn popup khi nhấp vào overlay
    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });
});
