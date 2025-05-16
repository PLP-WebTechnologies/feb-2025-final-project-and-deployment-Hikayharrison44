// Handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      alert(`Thanks, ${name}! Your message has been received. We'll contact you shortly.`);
      document.querySelector(".contact-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // Handle Add to Cart buttons
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        alert(`✅ ${button.getAttribute("data-product")} added to cart!`);
      });
    });
  });