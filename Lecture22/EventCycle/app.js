const gc = document.querySelector(".gc");
const gp = document.querySelector(".gp");
const p = document.querySelector(".p");


function grandChildren() {
    console.log("GC Clicked")
}
function parent() {
    console.log("Parent Clicked");
}
function grandParents() {
    console.log("GP clicked");
}

gp.addEventListener("click", grandParents, true)
p.addEventListener("click", parent);
gc.addEventListener("click", grandChildren);