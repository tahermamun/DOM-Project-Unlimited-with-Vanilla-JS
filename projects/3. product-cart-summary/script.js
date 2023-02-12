
var allProducts = []

var totalSummary={
    netPrice:0,
    totalItems:0,
    discount:0,
    totalPrice:0
}

function displayProduct() {
    var tableBody = document.getElementById("table_body")
    tableBody.innerHTML =null
    for (var i = 0; i < allProducts.length; i++) {
        var newProductRow = document.createElement("tr")
        var column_1 = document.createElement("td")
        var column_2 = document.createElement("td")
        var column_3 = document.createElement("td")

        column_1.innerText =i+1
        column_2.innerText=allProducts[i].name
        column_3.innerText=allProducts[i].price
        newProductRow.append(column_1,column_2,column_3)
        tableBody.append(newProductRow)
    }
}


function displayProductSummary(){
    var netPriceBox=document.getElementById("net_price")
    var totalItems=document.getElementById("total_items")
  
    for(var i=0; i < allProducts.length; i++){
    
        totalSummary.netPrice=totalSummary.netPrice+parseInt(allProducts[i].price)
    }

    netPriceBox.innerText= totalSummary.netPrice
    totalItems.innerText=allProducts.length
}




var formSubmit = document.getElementById("product_form")
formSubmit.addEventListener("submit", function (event) {
    event.preventDefault();

    var productName = document.getElementById("product_name").value;
    var productPrice = document.getElementById("product_price").value;
    // var hehe = document.getElementById("product_name");
    var product = {
        name: productName,
        price: productPrice
    }
    allProducts[allProducts.length] = product;
    // hehe.value=""
    displayProduct()
    displayProductSummary()
})

var formDiscount = document.getElementById("discount_form")

formDiscount.addEventListener("submit",function (e) {
    e.preventDefault();
var totalPriceBox = document.getElementById("total_price")
var discount = document.getElementById("discount")
var discountPercentage = document.getElementById("product_discount").value

// if(discountPercentage!==""){
// discountPercentage=parseInt(discountPercentage)
//     totalSummary.discount=totalSummary.netPrice*(discountPercentage/100)
//     discount.innerText=totalSummary.discount
//     totalSummary.totalPrice=totalSummary.netPrice-totalSummary.discount
//     totalPriceBox.innerText=totalSummary.totalPrice
// }

discountPercentage=parseInt(discountPercentage)
console.log(discountPercentage);
if(isNaN(discountPercentage)){
    alert("Discount")
}else{
    totalSummary.discount=totalSummary.netPrice*(discountPercentage/100)
    discount.innerText=totalSummary.discount
    totalSummary.totalPrice=totalSummary.netPrice-totalSummary.discount
    totalPriceBox.innerText=totalSummary.totalPrice
}
})


var paymentBtn=document.querySelector(".payment_btn")
paymentBtn.addEventListener("click",function(){
    alert("Payment success")
})