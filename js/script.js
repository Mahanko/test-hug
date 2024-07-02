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
    { id: "product1", name: "ice spreesoo", price: 45 },
    { id: "product2", name: "آیس آمریکانو", price: 60},
    { id: "product3", name: "آیس اسپرسو عربیکا", price: 50 },
    { id: "product4", name: "آیس آیس لته", price: 70 },
    { id: "product5", name: "آفوگاتو", price: 55 },
    { id: "product6", name: "فراپاچینو", price: 70 },
    { id: "product7", name: "آیس موکا", price: 85 },
    { id: "product8", name: "ماکیاتو", price: 80 },
    { id: "product9", name: "آیس رومانو", price: 50 },
    { id: "product10", name: "هات چاکلت", price: 60 },
    { id: "product11", name: "وایت چاکلت", price: 65 },
    { id: "product12", name: "ماسالا", price: 60 },
    { id: "product13", name: "ماسالا کارامل", price: 65 },
    { id: "product14", name: "ماسالا زعفرانی", price: 65 },
    { id: "product15", name: "شیر داغ", price: 35 },
    { id: "product16", name: "شیر داغ", price: 45 },
    { id: "product17", name: "شیر بیسکوئیت", price: 55 },
    { id: "product18", name: "شیر کارامل", price: 50 },
    { id: "product19", name: "شیر فندق", price: 50 },
    { id: "product20", name: "شیر وانیل", price: 50 },
    { id: "product21", name: "شیر موز", price: 70 },
    { id: "product22", name: "شیر انبه", price: 70 },
    { id: "product23", name: "شیر توت فرنگی", price: 85 },
    { id: "product24", name: "اسپرسو", price: 35 },
    { id: "product25", name: "اسپرسو عربیکا", price: 40 },
    { id: "product26", name: "آمریکانو", price: 50 },
    { id: "product27", name: "آمریکانو عربیکا", price: 55 },
    { id: "product28", name: "اسپرسو ماکیاتو", price: 40 },
    { id: "product29", name: "کورتادو", price: 45 },
    { id: "product30", name: "فلت وایت", price: 45 },
    { id: "product31", name: "رومانو", price: 40 },
    { id: "product32", name: "لته", price: 65 },
    { id: "product33", name: "ماکیاتو", price: 75 },
    { id: "product34", name: "موکا", price: 75 },
    { id: "product35", name: "فرنچ وانیلا", price: 45 },
    { id: "product36", name: "قهوه ترک", price: 50 },
    { id: "product37", name: "یونانی", price: 60 },
    { id: "product38", name: "کاپوچینو", price: 60 },
    { id: "product39", name: "نسکافه", price: 50 },
    { id: "product40", name: "موکتل هاگ", price: 145 },
    { id: "product41", name: "موکتل رنگین کمان", price: 120 },
    { id: "product42", name: "موکتل اقیانوس", price: 80 },
    { id: "product43", name: "موکتل دارک", price: 120 },
    { id: "product44", name: "موهیتو", price: 120 },
    { id: "product45", name: "رد موهیتو", price: 120 },
    { id: "product46", name: "بلو موهیتو", price: 120 },
    { id: "product47", name: "لیموناد", price: 75 },
    { id: "product48", name: "چری بری", price: 125 },
    { id: "product49", name: "شیک وانیل", price: 115 },
    { id: "product50", name: "شیک شکلات", price: 120 },
    { id: "product51", name: "شیک انبه", price: 135 },
    { id: "product52", name: "شیک توت فرنگی", price: 150 },
    { id: "product53", name: "شیک موز", price: 130 },
    { id: "product54", name: "شیک موز شکلات", price: 135 },
    { id: "product55", name: "شیک انبه شکلات", price: 150 },
    { id: "product56", name: "شیک توت فرنگی شکلات", price: 160 },
    { id: "product57", name: "شیک دارک", price: 145 },
    { id: "product58", name: "شیک نوتلا", price: 160 },
    { id: "product59", name: "ایبیزا", price: 78 },
    { id: "product60", name: "رولت", price: 88 },
    { id: "product61", name: "چیز کیک", price: 78 },
    { id: "product62", name: "کیک شکلات", price: 88 }
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
