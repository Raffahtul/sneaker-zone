// -------------------------------------------------------------
// KicksVault - Professional Core Interactions
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efek Sticky & Blur Navigasi Saat Di-scroll
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 0";
            navbar.style.backgroundColor = "rgba(11, 12, 16, 0.98)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.padding = "25px 0";
            navbar.style.backgroundColor = "rgba(11, 12, 16, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });

    // 2. Animasi Klik Tombol Kategori (Mengarahkan ke Halaman Belanja)
    const categoryButtons = document.querySelectorAll(".btn-link, .btn-primary");
    
    categoryButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Efek kilatan feedback saat tombol diklik
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "none";
                
                // Di masa mendatang, jika halaman katalog/shop.html Anda sudah jadi, 
                // baris di bawah ini tinggal diaktifkan untuk berpindah halaman:
                // window.location.href = "shop.html";
                
                alert("Navigasi Profesional: Sistem sedang memuat halaman katalog produk...");
            }, 150);
        });
    });

    // 3. Fitur Interaktif Cari & Akun (Simulasi Pop-Up)
    const searchIcon = document.querySelector(".fa-search");
    const userIcon = document.querySelector(".fa-user-circle");

    if (searchIcon) {
        searchIcon.addEventListener("click", () => {
            const searchQuery = prompt("Ketik sepatu atau brand yang ingin Anda cari:");
            if (searchQuery) {
                alert(`Mencari koleksi eksklusif untuk: "${searchQuery}"`);
            }
        });
    }

    if (userIcon) {
        userIcon.addEventListener("click", () => {
            alert("Fitur Member KicksVault: Silakan login untuk melihat point reward dan riwayat pesanan Anda.");
        });
    }

    // 4. Teaser Video Interaction
    const teaserBtn = document.querySelector(".btn-secondary");
    if (teaserBtn) {
        teaserBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Memutar video kampanye produk KicksVault Autumn/Winter 2026...");
        });
    }
});
