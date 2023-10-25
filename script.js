const add = document.querySelectorAll('.addtocart')
const cartItems = document.getElementById('cartItems')

add.forEach(function(add){
    add.addEventListener('click', function(){
        var currentItems = parseInt(cartItems.innerText, 10);
        cartItems.innerText = ++currentItems
    })
})