function AnyPage() {
    window.location.href = 'https://www.w3schools.com/js/js_window_location.asp'
}

function Flex() {
    clearBody();

    var box = document.createElement("div");
    box.setAttribute("class", "flex");

    var image = document.createElement("img");
    image.setAttribute("src", "Bezyimyannyiy-9-600x345.jpg");

    box.appendChild(image);
    document.getElementById("body").appendChild(box);
}

function clearBody() {
    var lista = document.body.childNodes;
    for (var i = lista.length - 2; i >= 0; i--) {
        document.body.removeChild(lista[i])
    }
}