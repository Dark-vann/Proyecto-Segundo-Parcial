const Contexto = document.getElementById("Contexto")
const WingmanDes = document.getElementById("container")
const Wingmans = document.getElementById("Wingmans")
const button = document.querySelector("#btn-1");
const button_2 = document.querySelector("#btn-2");

const Carnalitos = [
    { src: "Carnalitos/Wingman vs ISO.jpg", texto: "Radianita o Plomo" },
    { src: "Carnalitos/Wingman bebida.jpg", texto: "Wingman con un boba" },
    { src: "Carnalitos/Wingman chiquito.jpg", texto: "Un Wingman Chiquito" },
    { src: "Carnalitos/Wingman sorbo.jpg", texto: "Wingman sorbito" },
];

let indiceActual = 0;

function mostrarImagen() {
    Wingmans.src = Carnalitos[indiceActual].src;
    Contexto.textContent = Carnalitos[indiceActual].texto;
}

button.addEventListener("click", () => {
    indiceActual++;
    if (indiceActual >= Carnalitos.length) {
        indiceActual = 0;
    }
    mostrarImagen();
});

button_2.addEventListener("click", () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = Carnalitos.length - 1;
    }
    mostrarImagen();
})

mostrarImagen();
