let texto_Wingmans = "Texto pa Wingmans";
console.log(texto_Wingmans);

const WingmanDes = document.getElementById("container")
const Wingmans = document.getElementById("Wingmans")

const button = document.querySelector("btn-1");
const button_2 = document.querySelector("btn-2");

button.addEventListener("click", function () {
    changetext("Wingman con un boba", "Un Canalito con un boba");
    changeWingman("Wingman bebida.jpg");
})

button_2.addEventListener("click", function () {
    changetext("Wingman chiquito", "Un Carnalito Chiquito");
    changeWingman("Wingman chiquito.jpg");

})

function changetext(alert_text, container_text) {
    alert(alert_text)
    WingmanDes.textContent = container_text
}

function changeWingman(image_url) {
    Wingmans.src = image_url
}