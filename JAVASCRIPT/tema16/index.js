const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    });
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging");
    }   
);
});

secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
    });
    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
}
);

const papelera = document.querySelector("#imagen")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})