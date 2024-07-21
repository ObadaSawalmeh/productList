document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            "image": {
                "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
                "mobile": "./assets/images/image-waffle-mobile.jpg",
                "tablet": "./assets/images/image-waffle-tablet.jpg",
                "desktop": "./assets/images/image-waffle-desktop.jpg"
            },
            "name": "Waffle with Berries",
            "category": "Waffle",
            "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
                "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
                "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
                "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
                "mobile": "./assets/images/image-macaron-mobile.jpg",
                "tablet": "./assets/images/image-macaron-tablet.jpg",
                "desktop": "./assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
                "mobile": "./assets/images/image-tiramisu-mobile.jpg",
                "tablet": "./assets/images/image-tiramisu-tablet.jpg",
                "desktop": "./assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
                "mobile": "./assets/images/image-baklava-mobile.jpg",
                "tablet": "./assets/images/image-baklava-tablet.jpg",
                "desktop": "./assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
                "mobile": "./assets/images/image-meringue-mobile.jpg",
                "tablet": "./assets/images/image-meringue-tablet.jpg",
                "desktop": "./assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
                "mobile": "./assets/images/image-cake-mobile.jpg",
                "tablet": "./assets/images/image-cake-tablet.jpg",
                "desktop": "./assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
                "mobile": "./assets/images/image-brownie-mobile.jpg",
                "tablet": "./assets/images/image-brownie-tablet.jpg",
                "desktop": "./assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
        },
        {
            "image": {
                "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
                "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
                "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
                "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
        }
    ];

    const cardContainer = document.querySelector('.left-section_cards');
    const cart = [];
    const rightSectionCard = document.querySelector('.right-section_card');
    const rightSectionOrder = document.querySelector('.right-section_order');
    const totalProductsSpan = document.querySelector('.right-section_order h1 span');
    const confirmButton = document.querySelector('.confirm-btn'); 
    let totalProducts = 0;

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-top">
                <div class="card-top_cover">
                    <img src="${product.image.desktop}" alt="${product.category}">
                </div>
                <div class="card-top_cart">
                    <button class="cart-btn">
                        <img src="./assets/images/icon-add-to-cart.svg" alt="addToCart">
                        <span>Add To Cart</span>
                    </button>
                    <button class="counter-btn" style="display: none;">
                        <img class="decrement" src="./assets/images/icon-decrement-quantity.svg" alt="decrement">
                        <span>0</span>
                        <img class="increment" src="./assets/images/icon-increment-quantity.svg" alt="increment">
                    </button>
                </div>
            </div>
            <div class="card-bottom">
                <div class="card-bottom_title">
                    ${product.category}
                </div>
                <div class="card-bottom_desc">
                    ${product.name}
                </div>
                <div class="card-bottom_price">
                    ${product.price}$
                </div>
            </div>
        `;

        cardContainer.appendChild(card);

        const addToCartBtn = card.querySelector('.cart-btn');
        const counterBtn = card.querySelector('.counter-btn');
        const increment = counterBtn.querySelector('.increment');
        const decrement = counterBtn.querySelector('.decrement');
        const nSpan = counterBtn.querySelector('span');
        let counter = 0;
        
        addToCartBtn.addEventListener('click', () => {
            if (counterBtn.style.display === 'none' || getComputedStyle(counterBtn).display === 'none') {
                counterBtn.style.display = 'flex';
            } else {
                counterBtn.style.display = 'none';
            }
        });
        
        increment.addEventListener('click', () => {
            console.log(cart)    
            if (rightSectionOrder.style.display === 'none' || getComputedStyle(rightSectionOrder).display === 'none') {
                rightSectionOrder.style.display = 'flex';
                rightSectionCard.style.display = 'none';
            }

            counter += 1;
            nSpan.innerHTML = counter;
            totalProducts += 1;
            totalProductsSpan.innerHTML = totalProducts;

            updateCart(product.name, product.price, product.image.desktop, counter);
        });

        decrement.addEventListener('click', () => {
            if (counter > 0) {
                counter -= 1;
                nSpan.innerHTML = counter;
                totalProducts -= 1;
                totalProductsSpan.innerHTML = totalProducts;

                if (totalProducts === 0) {
                    rightSectionCard.style.display = 'block';
                }

                updateCart(product.name, product.price, product.image.desktop, counter);
            }
        });
    });

    function updateCart(name, price, imageSrc, quantity) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity = quantity;
            if (quantity === 0) {
                cart.splice(cart.indexOf(existingItem), 1);
            }
        } else {
            if (quantity > 0) {
                cart.push({ name, price, quantity, imageSrc });
            }
        }

        refreshCartDisplay();
    }

    function refreshCartDisplay() {
        const order = document.querySelector('.right-section_order');

        cart.forEach(item => {
            let orderDetail = order.querySelector(`.order-details[data-name="${item.name}"]`);

            if (!orderDetail) {
                orderDetail = document.createElement('div');
                orderDetail.classList.add('order-details');
                orderDetail.setAttribute('data-name', item.name);

                orderDetail.innerHTML = `
                    <div class="left">
                        <div class="order-details_top">${item.name}</div>
                        <div class="order-details_bottom">
                            <span class="item-quantity">${item.quantity}x</span>
                            <span class="item-price">$${item.price}</span>
                            <span class="total-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                    <img src="./assets/images/icon-remove-item.svg" alt="removeItem" class="order-canceling" data-name="${item.name}">
                `;
                let orderInfo = document.querySelector('.order-info')
                rightSectionOrder.insertBefore(orderDetail, orderInfo);
            } else {
                orderDetail.querySelector('.item-quantity').textContent = `${item.quantity}x`;
                orderDetail.querySelector('.total-price').textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            }
        });

        rightSectionCard.style.display = totalProducts > 0 ? 'none' : 'flex';
        rightSectionOrder.style.display = totalProducts > 0 ? 'flex' : 'none';
    }
    let orderConfirmation = document.querySelector('.order-confirmation')
    confirmButton.addEventListener('click',()=>{
        if (orderConfirmation.style.display === 'none' || getComputedStyle(orderConfirmation).display === 'none') {
            orderConfirmation.style.display = 'flex';
            rightSectionOrder.style.display = 'none';
        } else {
            orderConfirmation.style.display = 'none';
        }
    })
    let newOrder = document.querySelector('.start-new-order')
    newOrder.addEventListener('click',()=>{
        if (rightSectionCard.style.display === 'none' || getComputedStyle(rightSectionCard).display === 'none') {
            rightSectionCard.style.display = 'flex';
            orderConfirmation.style.display = 'none';

        } else {
            rightSectionCard.style.display = 'none';
        }
    })

    
});