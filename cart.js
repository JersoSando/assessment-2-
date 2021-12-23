///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => (acc + curr.price), 0);
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let taxTotal = (cartTotal * tax)
    // console.log(taxTotal)
    let finalNumber = (cartTotal + taxTotal) - couponValue;
    // console.log(finalNumber)
    return finalNumber
}

calcFinalPrice(5, 2, .06);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    Name: getting a customers name allows restuarants to send offers and create personalization
    Address: allows restuarants to see where their customers are coming from and how close they are to the location
    Age: Restaurants can tailor their offers and environment to a certain age demographic 
    Email: can send personalied offers and use as information for a rewards program to track how many times they come to the restuarant and how much they spend 
    Gender: used to tailor premotional offers and learn their general demographic 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'John Bobby',
    address: '1234 Yellowstone N, Brooklyn Center, MN',
    age: 25,
    email: 'johnbobby@gmail.com',
    gender: 'male'
};
