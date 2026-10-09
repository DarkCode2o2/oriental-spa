document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      faqItems.forEach(other => other.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // Add a subtle shadow to the header after scrolling.
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 12
      ? "0 8px 30px rgba(80,55,25,.08)"
      : "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
