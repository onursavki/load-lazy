document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    // 'loading' özelliği olmayan resimler için lazy loading ekleyelim
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    // Eğer srcset varsa, lazy loading özelliğini de buraya ekleyelim (mobil için özellikle önemlidir)
    else if (!img.hasAttribute("srcset")) {
      img.setAttribute("loading", "lazy");
    }
  });
});
