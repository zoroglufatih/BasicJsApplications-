let deger = localStorage.getItem('deger') ? Number(localStorage.getItem('deger')) : 0 ;


let degerDOM = document.querySelector("#deger");
let arttirDOM = document.querySelector("#arttir");
let azaltDOM = document.querySelector("#azalt");

degerDOM.innerHTML = deger;

arttirDOM.addEventListener("click",clickEvent)
azaltDOM.addEventListener("click",clickEvent)

function clickEvent() {
    this.id == "arttir" ? deger += 1 : deger -= 1;
    localStorage.setItem('deger', deger)
    degerDOM.innerHTML = deger;
}