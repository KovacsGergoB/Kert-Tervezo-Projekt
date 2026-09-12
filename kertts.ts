
class Coll {
    constructor(public id: number, public name: string, public latname: string, public descr: string, public area: number) {}
    
};

const osszes: Coll[] = [
    {id: 0, name: 'Zsálya', latname: 'Salvia Nemorosa', descr: 'Közepes termetű. Laza, szegényebb talajt szeret', area: 15},
    {id: 1, name: 'Árnyékliliom', latname: 'Hosta', descr: 'Alacsony termetű. Minden talajon jól fejlődik.', area: 20}
];



const totArea = document.getElementById("totArea")!;   
function render() {
        totArea.innerHTML = `Összesen felhasznált terület: ${ totalArea()/100 } m<sup>2</sup> <small>(${ totalArea() } cm<sup>2</sup>)</small>`;
        
}


function totalArea() {
        let total: number = 0;
        for (let index = 0; index < osszes.length; index++) {
            total = total + osszes[index].area;            
        }
        return total;
}

function torles(id: number) {    
    for (let i = 0; i < osszes.length; i++) {
        if (osszes[i].id == id) {
            osszes.splice(i, 1); 
        }        
    }    
    render();
}



document.addEventListener("DOMContentLoaded", () => {
    const nev = document.getElementById("nev") as HTMLInputElement;
    const latnev = document.getElementById("latnev") as HTMLInputElement;
    const descr = document.getElementById("descr") as HTMLInputElement;
    const area = document.getElementById("terulet") as HTMLInputElement;

    const btn = document.getElementById("add") as HTMLButtonElement;             
        
    render();

    window.onload = function(){
        render();
    }
        

    let id = 2;
    btn.addEventListener("click", () => {
        const n = (nev.value).trim();
        const l = (latnev.value || "").trim();
        const d = (descr.value || "").trim();
        const a = Number(area.value);
        if(!n || !Number(area.value)) return;
        osszes.push(new Coll(id, n, l, d, a));
        id++;
        render();                
    })
    
})