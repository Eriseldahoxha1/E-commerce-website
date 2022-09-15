
const sproducts = [
    { id: "p1", name: "Cleanser", price: 29.9, image: "images/cleanser.webp", amount: 1 },
    { id: "p2", name: "Moisturizer", price: 35, image: "images/moisturizer.webp", amount: 1 },
    { id: "p3", name: "Serum", price: 49.9, image: "images/serum.webp", amount: 1 },
    { id: "p4", name: "Sunscreen", price: 30, image: "images/sunscreen.webp", amount: 1 },
]

function reduceProducts(){
    const products = JSON.parse(localStorage.getItem('products')) || []
    // return products.reduce((acc, current)=>{
    //     const index = acc.findIndex(a=>a.id === current.id)
    //     if (index>-1){
    //         acc[index].amount+=1
    //     } else {
    //         acc.push(current)
    //     }
    //     return acc
    // },[])
    const acc = [] 
    for (const product of products) {
        const index = acc.findIndex(a=>a.id === product.id)
        if (index>-1){
            acc[index].amount+=1
        } else {
            acc.push(product)
        }
    }
    return acc
}

function renderBill(){
  const selectedProducts = document.querySelector(".selectedProd")
  selectedProducts.innerHTML = ""
let total = 0
reduceProducts().forEach(product =>{
    const html = `
    <li>
    <div id=${product.id} class="product-div border d-flex flex-row">
        <img src=${product.image} />
        <div class="column-bag align-self-center">
            <h5>${product.name}   </h5>
             <div class="button">
                <h6>${product.price}$</h6>
                <h6><button onclick="addToCart('${product.id}')"><i class="fa-regular fa-square-plus"></i></button>${product.amount}
                <button onclick="removeFromCart('${product.id}')"><i class="fa-regular fa-square-minus"></i></button></h6>
             </div>
             </div>
    </div>
</li>`

selectedProducts.innerHTML += html

total += product.price * product.amount

})  

const totalPrice = document.querySelector(".total")
totalPrice.innerHTML = `
Total = ${total.toFixed(2)}$`
}

renderBill()



 /**adding products to cart */
 const addToCart = id => {
    const selectedProduct = sproducts.find(product => product.id === id)
    

    const cartProducts = document.querySelector(".selectedProd")
   let items = localStorage.getItem('products')
   let products
   if(!items){
        items =[]
        items.push(selectedProduct)
        products= JSON.stringify(items)
        localStorage.setItem('products', products)
    }
    else{
        items = JSON.parse(items)
        items.push(selectedProduct)
        products= JSON.stringify(items)
        localStorage.setItem('products', products)
        }
        renderBill()
        
    }


const removeFromCart = (id)=>{
    // shko ne localstorage
    let products = localStorage.getItem('products')
    // ktheji ne objekte te punueshme se jan string
    products = JSON.parse(products) || []
    // heqim nga localstorage 1 element qe gjetem
    const index = products.findIndex(product => product.id === id)
    products[index] = null
    products = products.filter(product => product)
    products= JSON.stringify(products)
    localStorage.setItem('products', products)
    renderBill()
}




    // therrit prap renderBill()
    






