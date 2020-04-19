function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 1400);
    var p3 = Math.floor(Math.random() * 555);
    bola.setAttribute("style", `top:${p1}px;left:${p2}px;background-color:#${p3}`);
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
    function remove() {
        document.body.removeChild(bola);
    }
    setInterval(remove, 1000);
}
function estourar(el) {
    document.body.removeChild(el);    
}
function start() {
    setInterval(addBola, 1000);
}
