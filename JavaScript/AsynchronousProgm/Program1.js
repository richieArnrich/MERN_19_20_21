function OrderPizza(flavour) {
  let pizza = flavour;
  console.log("Pizza Ordered Successfully");
  console.log("Pizza getting prepared");
  setTimeout(() => {
    for (let i = 0; i <= 1000; i++) {
      console.log("i");
    }
    console.log("Pizza Delivered");
  }, 2000);
}

function CallFriend() {
  console.log("Calling Friend");
  console.log("Takes 30 mins to reach");
}

OrderPizza("Margaretta");
CallFriend();

// callFriend() is called even before OrderPiza() is completed
//  which is taking more time to execute
// so making it asynchronous in nature brings about a better execution time
