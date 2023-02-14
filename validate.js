function validateForm() {
    let phone = $("#phone").value;
    alert("boop");
    const regex = /^(([+]36)|(0036)|(06))[237]0[\d]{7}$/;
    if (!phone.match(regex)) {
        var div = document.createElement("div");
        div.className = "warning";
        div.textContent = "Hibás telefonszám formátum!";
        document.forms["form"].appendChild(div);
        return false;
    }
}
