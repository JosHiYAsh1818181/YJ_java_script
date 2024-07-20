// use console.log
console.log("this is my first java script");
console.log("my name is yash joshi");
// variable declare
name = "yash joshi";
age = 23;
console.log(name);
console.log(age);

// variables keywords
let fullName = "yash";
fullName = "my name is yash joshi"; // update the variables value
console.log(fullName);

// use block scope 
{
    let fullName = "hetvi joshi";
    console.log(fullName);
}
{
    let fullName = "yash joshi";
    console.log(fullName);
}
// const keyword
{
    const age = 25;
    console.log(age);
}
{
    const age = 30;
    console.log(age)
}

// practical task 
const amazonProduct = {
    productName: "parker jotter standard CT ball pen (black)",
    productRating: 5,
    productDeal: true,
    productOffer: 5,
    productPrice: 270
};
amazonProduct["productPrice"] = amazonProduct["productPrice"] + 30;

console.log(amazonProduct.productPrice);  //this is first method to print a object keys 
console.log(amazonProduct["productPrice"]); //this is second method to print a object keys 