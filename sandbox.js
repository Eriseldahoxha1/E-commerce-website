const skinProducts = document.querySelector('.skin-products')

const sproducts = [
    { id: "p1", name: "Cleanser", price: 29.9, image: "images/cleanser.webp", amount: 1 },
    { id: "p2", name: "Moisturizer", price: 35, image: "images/moisturizer.webp", amount: 1 },
    { id: "p3", name: "Serum", price: 49.9, image: "images/serum.webp", amount: 1 },
    { id: "p4", name: "Sunscreen", price: 30, image: "images/sunscreen.webp", amount: 1 },
]


sproducts.forEach(product =>{
const html =
`<li>
    <div id=${product.id} class="product-div border">
        <img src=${product.image} />
        <div class="spacediv">
            <h5>${product.name}</h5>
             <div class="button">
                <h6>${product.price}$</h6>
                <button onclick="addToCart('${product.id}')"><i class="fa-solid fa-cart-plus"></i></button>
             </div>
             </div>
    </div>
</li>`
skinProducts.innerHTML += html

})


 /**adding products to cart */
const addToCart = id => {
    const selectedProduct = sproducts.find(product => product.id === id)
   let items = localStorage.getItem('products')
    let products;
    if(!items){
        items =[]
    }
    else{
        items = JSON.parse(items)
        }
    items.push(selectedProduct)
    products= JSON.stringify(items)
    localStorage.setItem('products', products)
    }





