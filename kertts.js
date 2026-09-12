var Coll = /** @class */ (function () {
    function Coll(id, name, latname, descr, area) {
        this.id = id;
        this.name = name;
        this.latname = latname;
        this.descr = descr;
        this.area = area;
    }
    return Coll;
}());
;
var osszes = [
    { id: 0, name: 'Zsálya', latname: 'Salvia Nemorosa', descr: 'Közepes termetű. Laza, szegényebb talajt szeret', area: 15 },
    { id: 1, name: 'Árnyékliliom', latname: 'Hosta', descr: 'Alacsony termetű. Minden talajon jól fejlődik.', area: 20 }
];
var totArea = document.getElementById("totArea");
function render() {
    totArea.innerHTML = "\u00D6sszesen felhaszn\u00E1lt ter\u00FClet: ".concat(totalArea() / 100, " m<sup>2</sup> <small>(").concat(totalArea(), " cm<sup>2</sup>)</small>");
}
function totalArea() {
    var total = 0;
    for (var index = 0; index < osszes.length; index++) {
        total = total + osszes[index].area;
    }
    return total;
}
function torles(id) {
    for (var i = 0; i < osszes.length; i++) {
        if (osszes[i].id == id) {
            osszes.splice(i, 1);
        }
    }
    render();
}
document.addEventListener("DOMContentLoaded", function () {
    var nev = document.getElementById("nev");
    var latnev = document.getElementById("latnev");
    var descr = document.getElementById("descr");
    var area = document.getElementById("terulet");
    var btn = document.getElementById("add");
    render();
    window.onload = function () {
        render();
    };
    var id = 2;
    btn.addEventListener("click", function () {
        var n = (nev.value).trim();
        var l = (latnev.value || "").trim();
        var d = (descr.value || "").trim();
        var a = Number(area.value);
        if (!n || !Number(area.value))
            return;
        osszes.push(new Coll(id, n, l, d, a));
        id++;
        render();
    });
});
