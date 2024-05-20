let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('active');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('active');
  }
}

src = "https://unpkg.com/scrollreveal"
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
  interval: 200
})
// JavaScript functions to show/hide details container
function showDetails(element) {
  const detailsContainer = element.querySelector('.details-container');
  detailsContainer.style.display = 'block';
}

function hideDetails(element) {
  const detailsContainer = element.querySelector('.details-container');
  detailsContainer.style.display = 'none';
}
// JavaScript function to calculate total cost
function calculateTotal() {
  let totalCost = 0;
  const boxes = document.querySelectorAll('.box');
  
  boxes.forEach(box => {
    const quantity = parseInt(box.querySelector('.quantity-input').value);
    const price = parseFloat(box.querySelector('span').textContent);
    totalCost += quantity * price;
  });
  
  // Update the display area with the total cost
  document.getElementById('total-amount').textContent = totalCost;
}
