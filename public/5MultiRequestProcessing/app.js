/**
 * Created by Sudheer Chowdary on 9/29/2016.
 */
//------------Multi request processing-----------------
function placeOrder(orderNo) {
    console.log("Placing order :", orderNo);

    prepareOrder(function () {
        console.log("Order completed :", orderNo);

    })
}

function prepareOrder(callback) {
    setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);