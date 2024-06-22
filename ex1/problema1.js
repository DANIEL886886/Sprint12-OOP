// 1. Declara o clasa prin care sa reprezinți obiectul numit Mașina. O mașină are următoarele proprietăți:
//     - `marca` (ex: Volvo, Mazda, Dacia)
//     - `model` (ex: XC-60, CX-5, BIGGSTER)
//     - `culoare` (ex Negru, Verde, Albastru)
//     - `kilometraj` (ex 234 000, 111 000, 20 000)
//     Pentru aceasta clasa definește un `constructor` care sa inițializeze proprietățile clasei folosind `this`.
//     Pe lângă constructor, definește o metodă de tip `getter` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) numita `proprietati` care va returna proprietățile mașinii sub forma
//     `Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]`
//     La final, definește separat o funcție numită main, in care se vor crea 3 `instanțe` ale clasei mașina folosind operatorul `new`. Fiecare instanță va fi memorata Într-o variabilă separată și va avea proprietăți diferite. Afișează proprietățile mașinilor instanțiate folosind getter-ul `proprietati`.
//     Pentru mașinile date in exemplu programul va afișa
//     `Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234 000]`
//     `Masina[marca=Mazda, model=CX-5, culoare=Verde, kilometraj=111 000]`
//     `Masina[marca=Dacia, model=BIGGSTER, culoare=Albastru, kilometraj=20 000]`
// .............................................................................

class masina {
    #marca;
    #model;
    #culoare;
    #kilometraj;

    constructor(part1, part2, part3, part4) {
        this.#marca = part1;
        this.#model = part2;
        this.#culoare = part3;
        this.#kilometraj = part4;
    }

    infomasina() {
        return `Masina are marca= ${this.#marca}, model= ${this.#model}, culoare= ${this.#culoare}, kilometraj= ${this.#kilometraj}`;
    }
}

const masina1 = new masina("VOLVO", "XC-60", "Negru", "234.000");
const masina2 = new masina("Mazda", "CX-5", "Verde", "111.000");
const masina3 = new masina("Dacia", "BIGGSTER", "Albastru", "20.000");

console.log("\n" + masina1.infomasina()+"\n");
console.log(masina2.infomasina()+"\n");
console.log(masina3.infomasina()+"\n");
