var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.js";
document.getElementsByTagName("head")[0].appendChild(script);

var dataUser = new Array();
function recibeData() {
    var req = new XMLHttpRequest();
    req.open("GET", "/data-game", true);
    req.addEventListener("load", function (e) {
        var rawXML = e.target.response;
        dataUser = rawXML.split("&");
    });
    req.send();
    return dataUser;
}
recibeData();

function enviaData(pts, gameID) {
    if (pts > 0) {
        var csrf = document.querySelector('meta[name="csrf-token"]').content;
        clearTimeout(timex);
        $.post("/data-save", {
            pts: pts,
            time: segs,
            gameID: gameID,
            _token: csrf,
        })
            .done(function (data) {
                console.log("SAVING... " + data);
            })
            .fail(function () {
                alert("Error al guardar, falló la conexión");
            });
    }
}

//Tiempo
var segs = 0;
function temporizador() {
    timex = setTimeout(function () {
        segs++;
        temporizador();
    }, 1000);
}

//Sd
var audio = new Audio();
function playSound(data) {
    audio.pause();
    audio = new Audio(data + ".mp3");
    audio.play();
    return audio;
}

//Sff
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}
