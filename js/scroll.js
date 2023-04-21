const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // スクロール量が300pxを超えたら表示
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});
