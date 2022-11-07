let container = document.querySelector(".grid-container");
const C_height = 4;
const C_width = 6;
const C_cardHeight = 80;
let cardValues = [];
let cards = [];

GenerateCardValues();
ShuffleValues();
main()

function main(){
    container.style["grid-template-columns"] = "repeat(" + C_width + ", " + C_cardHeight + "px)";
    container.style["grid-template-rows"] = "repeat(" + C_height + ", " + C_cardHeight + "px)";
    for(let i = 0; i < C_height*C_width; i++){
        let asd = document.createElement("div");
        asd.classList.add("card");
        asd.classList.add("item");
        asd.dataset.value = cardValues[i];
        asd.id = "a"+i;
        
        let front = document.createElement("div");
        let back = document.createElement("div");
        
        front.classList.add("face");
        front.classList.add("front");
        back.classList.add("face");
        back.classList.add("back");
        
        let b = document.createElement("p");
        b.style["line-height"] = C_cardHeight + "px";
        b.innerHTML = cardValues[i];
        back.appendChild(b);
        
        asd.appendChild(front);
        asd.appendChild(back);
        
        container.appendChild(asd);
    }
    
    document.querySelectorAll(".item").forEach(element => {
        element.addEventListener("click", EventOnClick);
    });
}

function EventOnClick(e){
    let qwe = e.target;

    //#region gets the real item div
    if (qwe.tagName == "P") {
        qwe = qwe.parentElement.parentElement;
    }
    else if (qwe.parentElement.classList.contains("item")) {
        qwe = qwe.parentElement;
    }
    //#endregion

    //#region exits the function if card already picked
    if (cards.includes(qwe.id)) return;
    //#endregion

    //#region if it's the 3rd card removes everything from the cards list
    if (cards.length >= 2){
        const a = document.querySelector("#" + cards[0]);
        const b = document.querySelector("#" + cards[1]);
        if (a.dataset.value == b.dataset.value) {
            a.removeEventListener("click", EventOnClick);
            b.removeEventListener("click", EventOnClick);
            
            cards = [];
        }


        cards.forEach(element => {
            let asd = document.querySelector("#" + element);
            asd.classList.remove("ani")
            asd.classList.add("aniB");
        });
        cards = [];
    }
    //#endregion

    //#region animate
    if (qwe.classList.contains("ani")) {
        qwe.classList.remove("ani")
        qwe.classList.add("aniB");
    }
    else {
        qwe.classList.remove("aniB")
        qwe.classList.add("ani");
    }
    //#endregion

    cards.push(qwe.id);
}

function GenerateCardValues() {
    for (let i = 1; i <= C_height*C_width; i++) {
        cardValues.push(i - Math.floor(i/2));
    }
}

function ShuffleValues() {
    for (let i = cardValues.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let tmp = cardValues[i];
        cardValues[i] = cardValues[j];
        cardValues[j] = tmp;
    }
}