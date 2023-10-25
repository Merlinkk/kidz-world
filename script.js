const add = document.querySelectorAll('.addtocart')
const cartItems = document.getElementById('cartItems')

add.forEach(function(add){
    add.addEventListener('click', function(e){
        console.log(e)
        var currentItems = parseInt(cartItems.innerText, 10);
        cartItems.innerText = ++currentItems
    })
})