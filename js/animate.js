import Splitting from "https://cdn.skypack.dev/splitting";

Splitting();

// Replay animation by hiding & showing the element again
let el = document.querySelector("head-content");
el.addEventListener("click", function (e) {
    el.hidden = true;
    requestAnimationFrame(() => {
    el.hidden = false;
    });
});
