let container = document.querySelector(".grid-container");
const C_count = 5;
let cards = [];

main()

function EventOnClick(e){
    if (cards.length >= 2){
        cards.forEach(element => {
            element.classList.remove("ani")
            element.classList.add("aniB");
        });
        cards = [];
    }

    let qwe = e.target;
    if (qwe.parentElement.classList.contains("item")) {
        if (qwe.parentElement.classList.contains("ani")) {
            qwe.parentElement.classList.remove("ani")
            qwe.parentElement.classList.add("aniB");
        }
        else {
            qwe.parentElement.classList.remove("aniB")
            qwe.parentElement.classList.add("ani");
        }
        cards.push(qwe.parentElement);
    }
    else {
        if (qwe.classList.contains("ani")) {
            qwe.classList.remove("ani")
            qwe.classList.add("aniB");
        }
        else {
            qwe.classList.remove("aniB")
            qwe.classList.add("ani");
        }
        cards.push(qwe);
    }
}

function main(){
    container.style["grid-template-columns"] = "repeat(" + C_count + ", 80px)";
    container.style["grid-template-rows"] = "repeat(" + C_count + ", 80px)";
    for(let i = 0; i < C_count*C_count; i++){
        let asd = document.createElement("div");
        asd.classList.add("card");
        asd.classList.add("item");
        asd.id = "a"+i;

        let front = document.createElement("div");
        let back = document.createElement("div");

        front.classList.add("face");
        front.classList.add("front");
        back.classList.add("face");
        back.classList.add("back");
        
        asd.appendChild(front);
        asd.appendChild(back);

        container.appendChild(asd);
    }

    document.querySelectorAll(".item").forEach(element => {
        element.addEventListener("click", EventOnClick);
    });
}