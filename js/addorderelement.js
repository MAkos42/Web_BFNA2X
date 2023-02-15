var orderValue = 0.0;

function addOrderItem(pizzaType, pizzaCost) {
    document.getElementById("order-button").removeAttribute("disabled");
    switch (pizzaType) {
        case "margherita":
            document.getElementById("current-order").value += "- Margherita\n";
            break;
        case "pepperoni":
            document.getElementById("current-order").value += "- Pepperoni\n";
            break;
        case "hawaiian":
            document.getElementById("current-order").value += "- Hawaiian\n";
            break;
        case "meatlovers":
            document.getElementById("current-order").value += "- Meat Lover's\n";
            break;
        case "vegetarian":
            document.getElementById("current-order").value += "- Vegetarian\n";
            break;
        case "bbqchicken":
            document.getElementById("current-order").value += "- BBQ Chicken\n";
            break;
        case "buffalochicken":
            document.getElementById("current-order").value += "- Buffalo Chicken\n";
            break;
        case "whitepizza":
            document.getElementById("current-order").value += "- White Pizza\n";
            break;
        case "meatball":
            document.getElementById("current-order").value += "- Meatball\n";
            break;
        case "supreme":
            document.getElementById("current-order").value += "- Supreme\n";
            break;
    }
    document.getElementById("current-order").value += "$" + pizzaCost.toFixed(2) + "\n";
    orderValue += pizzaCost;
    document.getElementById("order-price").value = orderValue;
    document.getElementById("price-display").textContent = "Total: $" + orderValue.toFixed(2);
}
