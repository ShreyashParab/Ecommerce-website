const cartItemsLength = document.getElementById('cart-items-length')
let cartItems = []

const addToCart = (id) => {
//    console.log('shreyash')
    cartItems.push(id)
    cartItemsLength.innerText = cartItems.length
}