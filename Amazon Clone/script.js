// ============================================
// AMAZON CLONE - script.js
// ============================================

// 1. SEARCH FUNCTIONALITY
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: "${query}"`);
  } else {
    searchInput.style.border = '2px solid red';
    setTimeout(() => searchInput.style.border = '', 1500);
  }
}


// 2. CART COUNTER
let cartCount = 0;
const navCart = document.querySelector('.nav-cart');

// Add a count badge to cart
const cartBadge = document.createElement('span');
cartBadge.id = 'cart-badge';
cartBadge.textContent = cartCount;
cartBadge.style.cssText = `
  background: #f08804;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 1px 6px;
  margin-left: 4px;
  vertical-align: top;
`;
navCart.appendChild(cartBadge);

navCart.addEventListener('click', () => {
  alert(`Your cart has ${cartCount} item(s).`);
});


// 3. CATEGORY BOX HOVER EFFECT
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-5px)';
    box.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    box.style.transition = 'all 0.25s ease';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = '';
    box.style.boxShadow = '';
  });
});


// 4. "SEE MORE" LINKS — add to cart simulation
const seeMoreLinks = document.querySelectorAll('.box-content a');

seeMoreLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.closest('.box-content').querySelector('h2').textContent;

    // Animate the link
    link.textContent = 'Added to Cart! ✓';
    link.style.color = 'green';
    link.style.fontWeight = 'bold';

    // Update cart badge
    cartCount++;
    cartBadge.textContent = cartCount;

    // Reset after 2 seconds
    setTimeout(() => {
      link.textContent = 'See more';
      link.style.color = '';
      link.style.fontWeight = '';
    }, 2000);

    console.log(`Category clicked: ${category}`);
  });
});


// 5. STICKY NAVBAR ON SCROLL
const navbar = document.querySelector('.navbar');
const panel = document.querySelector('.panel');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.position = 'sticky';
    navbar.style.top = '0';
    navbar.style.zIndex = '1000';
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '';
  }
});


// 6. PANEL LINK ACTIVE STATE
const panelLinks = document.querySelectorAll('.panel-ops a');

panelLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    panelLinks.forEach(l => l.style.fontWeight = '');
    link.style.fontWeight = 'bold';
  });
});


// 7. BACK TO TOP BUTTON
const topBtn = document.createElement('button');
topBtn.textContent = '▲';
topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 18px;
  cursor: pointer;
  display: none;
  z-index: 999;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
`;
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 8. GREETING based on time
const signinEl = document.querySelector('.nav-signin p span');
if (signinEl) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  signinEl.textContent = `${greeting}, sign in`;
}