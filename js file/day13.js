// This file contain the concept of callback hell

const orderDetail  = {
    orderId: 123123,
    orderName: "Pizza",
    orderPrice: 500,
};

function placeOrder(orderDetail,callback){
    console.log(`${orderDetail.orderPrice}Payment is in progress`);

    setTimeout(function(){
        console.log("Payment is successful");  
        orderDetail.Status = true; 
            callback(orderDetail);
    }, 2000);
}

function preparingOrder(orderDetail,callback){
    console.log("Order is being prepared");
    setTimeout(function(){
        console.log("Order is ready");
        orderDetail.prepared = true;   
            callback(orderDetail);
    }, 3000);
}

function pickupOrder(orderDetail,callback){
    console.log("Delivery boy is on the way to pick up the order");
    setTimeout(()=>{
        console.log("I have picked up the order");
            callback(orderDetail);
    }, 3000);
}

function DeliverOrder(){
    console.log("I'm delivering the order");
    setTimeout(()=>{
        console.log("Order is delivered");
    }, 3000);
}

placeOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail,()=>{
            DeliverOrder();
        });
    });
});