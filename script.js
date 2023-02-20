let btn = document.querySelector("#btn");
btn.addEventListener("click",randombg);

function randombg()  {
    let randomColor =` #${Math.random().toString(16).slice(2, 8)}`;
    document.body.style.backgroundColor = randomColor;
}