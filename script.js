const productForm = document.getElementById("add-product");
const allProduct = document.getElementById("all_product");

const product_name = document.getElementById("product_name");
const product_price = document.getElementById("product_price");
const product_img = document.getElementById("product_img");
const productText = document.getElementById("product_text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];


// create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
       // create Col
       const productCol = document.createElement("div");
       productCol.classList.add("col-lg-3");
   
       // create single-product div
       const productDiv = document.createElement("div");
       productDiv.classList.add("single_product");
       
       // create image
       const productImage = document.createElement("img");
       productImage.setAttribute("src", imageValue);
   
       // create price
       const productPrice = document.createElement("h5");
       productPrice.innerText = priceValue;
   
       // create product name
       const productName = document.createElement("h3");
       productName.innerText = nameValue;
   
       // create product image
       const productTxt = document.createElement("p");
       productTxt.innerText = textValue;
   
       // complete single product
       productDiv.append(productImage, productPrice, productName, productTxt)
   
       // complete col
       productCol.appendChild(productDiv);
   
       console.log(productCol)
       
       // complete first Task
       allProduct.appendChild(productCol);
    
}

// local storage
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
    products.push({
        image: imageValue,
        price: priceValue,
        name: nameValue,
        price: priceValue,
        text: textValue
    });

    localStorage.setItem("lsProducts", JSON.stringify(products));
}

// main click function
productForm.addEventListener("submit", function( ev ) {
    ev.preventDefault();
    
    // get input value
    const nameValue = product_name.value;
    const imageValue = product_img.value;
    const priceValue = product_price.value;
    const textValue = productText.value;

    // Task 1
    createElement(nameValue, imageValue, priceValue, textValue);

    // task 2
    addProduct(nameValue, imageValue, priceValue, textValue)
    

});

// task 3 
// show product from local storage
products.forEach(product => {
    createElement(product["name"], product["image"], product["price"], product["text"])
})