let faqItems = document.getElementsByClassName("faq-item");

for (let i = 0; i < faqItems.length; i++) {
    let boton = faqItems[i].children[0];
    let respuesta = faqItems[i].children[1];

    boton.addEventListener("click", function () {
        let estaAbierta = respuesta.style.maxHeight !== "0px" && respuesta.style.maxHeight !== "";

        for (let j = 0; j < faqItems.length; j++) {
            faqItems[j].children[0].classList.remove("active");
            faqItems[j].children[1].style.maxHeight = "0px";
        }
 
        if (!estaAbierta) {
            respuesta.style.maxHeight = "200px";
            boton.classList.add("active");
        }
    });
}
