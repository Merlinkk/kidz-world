const add = document.querySelectorAll('.addtocart')
const cartItems = document.getElementById('cartItems')

const items = [{
    title: "This was our pact",
    author: "Ryan Andrews",
    cost: 7.49
},
{
    title: "The Famous Five",
    author: "Guid Blyton",
    cost: 4.59
},
{
    title: "Matlida",
    author: "Roald Dahi",
    cost: 6.80
},
{
    title: "Harry Potter",
    author: "JK Rowling",
    cost: 10
},
{
    title: "For Young Readers",
    author: "Ruskin Bond",
    cost: 7.29
},
{
    title: "Wimpy Kid - DIY",
    author: "Jeff Kinney",
    cost: 4.99
},
{
    title: "Dart Board",
    author: "Wooden Board, 16 inches",
    cost: 17.49
},

{
    title: "Connect 4",
    author: "Board game, multiplayer",
    cost: 19.99
},

{
    title: "Jenga",
    author: "Wooden Blocks, 54 pieces",
    cost: 20.99
},

{
    title: "Monopoly",
    author: "1.61 x 15.75 x 10.51 inches",
    cost:19.49
},

{
    title: "Bookmarks",
    author: "Handmade with love",
    cost: 12.49
},

{
    title: "Birthday Card",
    author: "Handmade with love",
    cost: 19.99
},

{
    title: "Stuffed toys",
    author: "Handmade with love",
    cost: 15.99
},

{
    title: "Dream Catcher Drawing",
    author: "Handmade with love",
    cost:18.49
}


]



const addToCartItems = [];


add.forEach(function(element,index){
    element.addEventListener('click', function(e){
        var currentItems = parseInt(cartItems.innerText, 10);
        cartItems.innerText = ++currentItems
        // console.log(items[index])
        

        const itemName = items[index].title
        const itemPrice = items[index].cost

        const isItemInCart = addToCartItems.some((el) => {
            if (el.name === itemName) {
                // console.log(el.name,itemName)
                el.quantity += 1;
                return true;
            }
          });

        if (!isItemInCart) {
            addToCartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }



    })
})

const cartdiv = document.getElementById('cartdiv')

var totalCost = 0

// addToCartItems.forEach((ele)=>{
    
// })


cartdiv.onclick = () =>{
    var itemsOrdered = ""
    totalCost = 0
    addToCartItems.forEach((elem)=>{
        itemsOrdered += `Item Name : ${elem.name} - Quantity: ${elem.quantity} \n`
        totalCost+= elem.price * elem.quantity
    })
    // console.log(totalCost)
    
    // console.log(totalCost)
    let dollars =Math.floor(totalCost)
    let cents = Math.round((totalCost-dollars)*100)
    console.log(itemsOrdered)
    console.log(`The total amount is $${dollars} and ${cents} cents.`)
}
