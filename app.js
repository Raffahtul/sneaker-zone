// ==========================================
// SNEAKZONE - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("SNEAKZONE berhasil dimuat!");

    // ==========================================
    // TOMBOL KERANJANG
    // ==========================================

    const cartButton = document.querySelector(".cart-btn");

    if (cartButton) {
        cartButton.addEventListener("click", function () {
            alert("🛒 Keranjang kamu masih kosong.");
        });
    }


    // ==========================================
    // ANIMASI SAAT SCROLL
    // ==========================================

    const cards = document.querySelectorAll(
        ".category-card, .product-card, .promo"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

});

