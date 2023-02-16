var offset = 0;

function animate() {
    offset += 1;

    if (offset > 319) {
        offset = 0;
    }

    if (offset % 30 == 0) {
        document.querySelector(".pizza").style.margin = "60px 0 0 " + offset + "px";
    }

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
