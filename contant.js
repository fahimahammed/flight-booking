// First class event handler...
document.getElementById('first-plus-btn').addEventListener("click", function () {
    quantityChange(true, "first-count");
})
document.getElementById('first-minus-btn').addEventListener("click", function () {
    quantityChange(false, "first-count");
})


// economy class event handlar...
document.getElementById('economy-plus-btn').addEventListener("click", function () {
    quantityChange(true, "economy-count");
})

document.getElementById('economy-minus-btn').addEventListener("click", function () {
    quantityChange(false, "economy-count");
})

document.getElementById('book-btn').addEventListener("click", function () {
    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
   
    if(flyingFrom == "" || 
    flyingTo == "" || 
    departureDate == "" || 
    returnDate == "" 
    ){
        document.getElementById('conformation-message').innerText = "Please complete all required fields.";
    }
    else{
        document.getElementById('conformation-message').innerText = "Congratulations !! Your flight booking is confirmed.";
    }
    
})


// ticket quantity function 
function quantityChange(isIncrease, id) {
    const input = document.getElementById(id);
    const count = parseInt(input.value);
    let newCount = count;
    if (isIncrease == true) {
        newCount = count + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = count - 1;
    }
    input.value = newCount;
    totalPrice();
}

// total price calculation function...
function totalPrice() {
    const firstCount = document.getElementById('first-count');
    const firstCountNumber = parseInt(firstCount.value);

    const economyCount = document.getElementById('economy-count');
    const economyCountNumber = parseInt(economyCount.value);

    // subtotal price...
    const subTotalPrice = (firstCountNumber * 150) + (economyCountNumber * 100);
    document.getElementById('sub-total').innerText = subTotalPrice;

    // sub total price..
    const vat = subTotalPrice * 0.1;
    document.getElementById('total-vat').innerText = vat;

    // total price...
    const totalTicketPrice = subTotalPrice + vat;
    document.getElementById('total-price').innerText = totalTicketPrice;
}