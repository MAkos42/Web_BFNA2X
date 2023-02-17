var orderValue = 0.0;

function addOrderItem(pizzaType, pizzaCost) {
    document.getElementById("order-button").removeAttribute("disabled");

    var newElement = document.createElement("label");
    switch (pizzaType) {
        case "margherita":
            newElement.innerHTML = "<b>- Margherita</b><br>";
            break;
        case "pepperoni":
            newElement.innerHTML = "<b>- Pepperoni</b><br>";
            break;
        case "hawaiian":
            newElement.innerHTML = "<b>- Hawaiian</b><br>";
            break;
        case "meatlovers":
            newElement.innerHTML = "<b>- Meat Lover's</b><br>";
            break;
        case "vegetarian":
            newElement.innerHTML = "<b>- Vegetarian</b><br>";
            break;
        case "bbqchicken":
            newElement.innerHTML = "<b>- BBQ Chicken</b><br>";
            break;
        case "buffalochicken":
            newElement.innerHTML = "<b>- Buffalo Chicken</b><br>";
            break;
        case "whitepizza":
            newElement.innerHTML = "<b>- White Pizza</b><br>";
            break;
        case "meatball":
            newElement.innerHTML = "<b>- Meatball</b><br>";
            break;
        case "supreme":
            newElement.innerHTML = "<b>- Supreme</b><br>";
            break;
    }
    newElement.innerHTML += "$" + pizzaCost.toFixed(2) + "<br>";

    document.getElementById("current-order").appendChild(newElement);
    orderValue += pizzaCost;
    document.getElementById("order-price").value = orderValue;
    document.getElementById("price-display").textContent = "Total: $" + orderValue.toFixed(2);
}
