


// Get the HTML elements
var homeBtn = document.getElementById('home-btn');
var exploreBtn = document.getElementById('explore-btn');
var cartBtn = document.getElementById('cart-btn');
var accountBtn = document.getElementById('account-btn');
var signUpBtn = document.getElementById('sign-up-btn');
var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
var cartTable = document.getElementById('cart-table');
var checkoutBtn = document.getElementById('checkout-btn');
var usernameSpan = document.getElementById('username');
var orderHistoryList = document.getElementById('order-history');

// Initialize cart
var cart = [];

// Add event listeners to navigation buttons
homeBtn.addEventListener('click', function() {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

document.getElementById('explore-btn').addEventListener('click', function() {
    document.getElementById('explore-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});


cartBtn.addEventListener('click', function() {
    document.getElementById('cart-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

accountBtn.addEventListener('click', function() {
    document.getElementById('account-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('sign-up-page').classList.remove('active');
});

signUpBtn.addEventListener('click', function() {
    document.getElementById('sign-up-page').classList.add('active');
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('explore-page').classList.remove('active');
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('account-page').classList.remove('active');
});

// Add event listeners to add to cart buttons
addToCartBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var product = btn.getAttribute('data-product');
        var price = btn.getAttribute('data-price');
        var existingProduct = cart.find(function(item) {
            return item.product === product;
        });
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ product: product, price: price, quantity: 1 });
        }
        updateCartTable();
    });
});

// Update cart table
function updateCartTable() {
    var tableBody = cartTable.tBodies[0];
    tableBody.innerHTML = '';
    cart.forEach(function(item) {
        var row = tableBody.insertRow();
        var productCell = row.insertCell();
        var priceCell = row.insertCell();
        var quantityCell = row.insertCell();
        var totalCell = row.insertCell();
        productCell.textContent = item.product;
        priceCell.textContent = item.price;
        quantityCell.textContent = item.quantity;
        totalCell.textContent = item.price * item.quantity;
    });
}

// Display username and order history
var userData = {
    username: 'dimpal',
    orderHistory: [
        { orderId: 1, date: '2022-01-01' },
        
    ],
};

usernameSpan.textContent = userData.username;
userData.orderHistory.forEach(function(order) {
    var listItem = document.createElement('LI');
    listItem.textContent = 'Order #' + order.orderId + ': ' + order.date;
    orderHistoryList.appendChild(listItem);
});
