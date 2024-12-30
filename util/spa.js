// single page application
let customerNav = $("#customer-nav");
let itemNav = $("#item-nav");
let orderNav = $("#order-nav");

let customerForm = $("#customer-form");
let itemForm = $("#item-form");
let orderForm = $("#place-order");

customerForm.css("display","block");
itemForm.css("display","none");
orderForm.css("display","none");

customerNav.on('click',()=>{
    customerForm.css("display","block");
    itemForm.css("display","none");
    orderForm.css("display","none");
});
itemNav.on('click',()=>{
    customerForm.css("display","none");
    itemForm.css("display","block");
    orderForm.css("display","none");
});
orderNav.on('click',()=>{
    customerForm.css("display","none");
    itemForm.css("display","none");
    orderForm.css("display","block");
});