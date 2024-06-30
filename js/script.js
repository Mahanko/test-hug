let dark = document.getElementById('dark');
dark.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})

let menubutoon = document.getElementById('menubutoon');
let menuslide = document.getElementById('menuslide');
let closemenu = document.getElementById('close');
let closeYadddasht = document.getElementById('close-yadddasht');
menubutoon.addEventListener('click',()=>{
    menuslide.setAttribute("style","display: block");
})
closemenu.addEventListener('click',()=>{
    menuslide.setAttribute("style","display: none");
})
closeYadddasht.addEventListener('click',()=>{
    yaddasht.setAttribute("style","display: none");
})




// selecetor 
let totalCost = document.getElementById('totalCost');
let yaddasht = document.getElementById('yaddasht');

// // card base 1
// Product data (modify prices and names as needed)
const products = [
    { id: "product1", name: "spresso caramel", price: 20000 },
    { id: "product2", name: "spresso late", price: 40000 },
  ];
  
  // Initialize product counts and total cost
  let productCounts = {};
    totalCost = 0;
  
  function updateTotalCount() {
    totalCost = 0; // Reset total cost before recalculating
    for (const product of products) {
      const count = productCounts[product.id] || 0;
      totalCost += count * product.price;
    }
    document.getElementById("totalCost").textContent = totalCost;
  }
  
  function updateProductCount(productId, delta) {
    productCounts[productId] = (productCounts[productId] || 0) + delta;
    if (productCounts[productId] < 0) {
      productCounts[productId] = 0; // Prevent negative counts
    }
    const countElement = document.getElementById(`${productId}-count`);
    countElement.textContent = productCounts[productId];
    updateTotalCount();
  }
  
  // Add event listeners for each product's buttons
  products.forEach(product => {
    const plusButton = document.getElementById(`${product.id}-plus`);
    const minusButton = document.getElementById(`${product.id}-minus`);
    plusButton.addEventListener("click", () => {
        yaddasht.setAttribute("style","display: block;");
        updateProductCount(product.id, 1);
    });
    minusButton.addEventListener("click", () =>{
        yaddasht.setAttribute("style","display: block;");
        updateProductCount(product.id, -1)
    });
  });
