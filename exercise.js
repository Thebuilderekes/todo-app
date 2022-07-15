  //getting the sum of the prices in the

function cartTotal(cartArray){
    
     let sum = 0;
 
    for(let i= 0; i < cartArray.length; i++){
 
         sum += cartArray[i].price   
        
        }
 
    return sum
  }
 
  cartTotal([
        {name: "apple", price: 20},
        {name: "books", price: 20},
        {name: "orange", price: 20}
 ])



 const receipt = document.getElementById('receipt');

  function displayReceipt(cartArray) {
    receipt.innerHTML = '';

    cartArray.forEach(function (item) {
      const receiptLine = document.createElement('div');
      receiptLine.innerText = `${item.name}  $  ${item.price} * ${item.quantity}`;
      receipt.appendChild(receiptLine);
    });

    // You can also calculate the total using just the loop above, but I like
    // to separate them out so each loop does one thing.
    let cartTotal = 0;
    cartArray.forEach(function (item) {
      cartTotal = cartTotal + item.price * item.quantity;
    });

    const totalLine = document.createElement('div');
    totalLine.innerText = 'Cart total = $' + cartTotal;
    receipt.appendChild(totalLine);
  }

  displayReceipt([
    { name: 'Apple', price: 4, quantity: 2 },
    { name: 'Orange', price: 3, quantity: 3 }
  ]);