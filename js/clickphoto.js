document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо посилання на зображення
    phoooto = "images/jumbotron_768.jpg"
    var phoooto = document.getElementById("phooto");

    // Додаємо подію кліка на зображення
    phoooto.addEventListener("click", function() {
        // Переадресовуємо на нову сторінку з зображенням
        window.location.href = "new_page.html";
    });
});
