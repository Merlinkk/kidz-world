const add = document.querySelectorAll('.addtocart')
const cartItems = document.getElementById('cartItems')

const items = [{
    title: "This was our pact",
    author: "Ryan Andrews",
    imgurl: "./assets/book1.png",
    cost: 7.49
    
},
{
    title: "The Famous Five",
    author: "Guid Blyton",
    imgurl: "./assets/book2.png",
    cost: 4.59
},
{
    title: "Matlida",
    author: "Roald Dahi",
    imgurl: "./assets/book3.png",
    cost: 6.80
},
{
    title: "Harry Potter",
    author: "JK Rowling",
    imgurl: "./assets/book4.png",
    cost: 10
},
{
    title: "For Young Readers",
    author: "Ruskin Bond",
    imgurl: "./assets/book5.png",
    cost: 7.29
},
{
    title: "Wimpy Kid - DIY",
    author: "Jeff Kinney",
    imgurl: "./assets/book6.png",
    cost: 4.99
},
{
    title: "Dart Board",
    author: "Wooden Board, 16 inches",
    imgurl: "./assets/dart-board.png",
    cost: 17.49
},

{
    title: "Connect 4",
    author: "Board game, multiplayer",
    imgurl: "./assets/connect-four.png",
    cost: 19.99
},

{
    title: "Jenga",
    author: "Wooden Blocks, 54 pieces",
    imgurl: "./assets/jenga.png",
    cost: 20.99
},

{
    title: "Monopoly",
    author: "1.61 x 15.75 x 10.51 inches",
    imgurl: "./assets/monopoly.png",
    cost:19.49
},

{
    title: "Bookmarks",
    author: "Handmade with love",
    imgurl: "./assets/bookmarks.png",
    cost: 12.49
},

{
    title: "Birthday Card",
    author: "Handmade with love",
    imgurl: "./assets/birthday-card.png",
    cost: 19.99
},

{
    title: "Stuffed toys",
    author: "Handmade with love",
    imgurl: "./assets/stuffed-toy.png",
    cost: 15.99
},

{
    title: "Dream Catcher Drawing",
    author: "Handmade with love",
    imgurl: "./assets/dream-catcher.png",
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
        const imglink = items[index].imgurl

        const isItemInCart = addToCartItems.some((el) => {
            if (el.name === itemName) {
                // console.log(el.name,itemName)
                el.quantity += 1;
                return true;
            }
          });

        if (!isItemInCart) {
            addToCartItems.push({ name: itemName, price: itemPrice, objIndex:index, link:imglink, quantity: 1 });
    }



    })
})

const cartdiv = document.getElementById('cartdiv')

var totalCost = 0

// popup item list

const OrderList = document.getElementById('OrderList')
const costH = document.getElementById('costDisplay')


// list entry function
function entry(elem){
    OrderList.innerHTML += `<li> <div class="listItem"> <img src="${elem.link}" height="90%"></div> <div class="cardtext">
    <h3>${elem.name}</h3> <br> <h4>Quantity - ${elem.quantity}</h4>
</div>`
}

function clearList(){
    OrderList.innerHTML = ""
}



function entryCost(dollar,cents){
    costH.innerHTML = `The total amount is $${dollar} and ${cents} cents.`
    whatsappPrice+=`The total amount is $${dollar} and ${cents} cents.`
}

// cart eventlistner

var whatsappOrder = ""
var whatsappPrice = 0

cartdiv.onclick = () =>{
    // for popup and blur
    infoDiv.style.display = "block"
    blur.style.filter = 'blur(10px)'
    blur.style.zIndex = '-99' 
    // popup and blur  

    // disable scroll for page
    document.body.style.overflow = "hidden"
    // 
    clearList()
    var itemsOrdered = ""
    whatsappOrder = ""
    totalCost = 0
    whatsappPrice = ""
    addToCartItems.forEach((elem)=>{
        itemsOrdered += `Item Name : ${elem.name} - Quantity: ${elem.quantity} \n`
        whatsappOrder += `Item Name : ${elem.name} - Quantity: ${elem.quantity} \n` 
        totalCost+= elem.price * elem.quantity
        entry(elem)
        
    })
    // console.log(totalCost)
    
    // console.log(totalCost)
    let dollars =Math.floor(totalCost)
    let cents = Math.round((totalCost-dollars)*100)
    console.log(itemsOrdered)
    console.log(`The total amount is $${dollars} and ${cents} cents.`)
    entryCost(dollars,cents)
}

// popup code

const cross = document.getElementById('cross')
const infoDiv = document.getElementById('popup')
const blur = document.getElementById('blur')
infoDiv.style.display = 'none'

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onEscapeKeyPressed();
    }
  });

function onEscapeKeyPressed(){
    popup.style.display = 'none'
    blur.style.filter = ''
    blur.style.zIndex = '' 
    document.body.style.overflow = "scroll"
    
}   
cross.onclick = () =>{
    popup.style.display = 'none'
    blur.style.filter = ''
    blur.style.zIndex = '' 
    document.body.style.overflow = "scroll"

}

// 

var whatsappAPI = "https://api.whatsapp.com/send?phone=917018224197&text=";
const WB = document.getElementById('whatsappbutton')

WB.onclick = () =>{
    console.log(whatsappAPI + whatsappOrder + whatsappPrice, "_blank")
    window.open(whatsappAPI + whatsappOrder + whatsappPrice, "_blank");
}
