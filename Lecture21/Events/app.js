// const btn = document.querySelector("#btn");
// const inp = document.querySelector(".keyboard");
// const ent = document.querySelector(".enter")
const form = document.querySelector(".form")

// function scream() {
//     console.log("Screammmmm!!!!!");
// }

// function shout() {
//     console.log("Shouttt!!!!");
// }

// btn.onclick = scream;
// btn.onclick = shout;

// btn.addEventListener("click", scream);
// btn.addEventListener("click", shout);

// // 4 ,8 ya Both 

// // keyBoard Events

// inp.addEventListener("keydown", (event) => {
//     let serachContene = "";
//     serachContene += event.key
//     ent.addEventListener("click", () => {
//         console.log(serachContene);
//     })
//     // console.log(event.key);
//     // console.log("Some text has been written");
// })


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("FOrm Submiited Prohibited!!")

})



