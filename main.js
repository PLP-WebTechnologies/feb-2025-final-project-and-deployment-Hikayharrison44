// Responsive Navigation (for future toggle on mobile)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
  
    // Example: Future implementation for mobile nav toggle
    // document.querySelector('.menu-toggle').addEventListener('click', () => {
    //   navLinks.classList.toggle('active');
    // });
  
    // Sample interaction: Product click (for products.html)
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach((card) => {
      card.addEventListener('click', () => {
        const productName = card.querySelector('h4').textContent;
        alert(`You selected ${productName}`);
      });
    });
  });