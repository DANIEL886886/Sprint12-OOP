// 2. Definește încă o clasa numita`MasinaDeCurse`.Această clasă va moșteni
// clasa `Masina` definita la exercițiul 1, folosind cuvantul cheie`extends`
// si va avea un constructor in care se va apela`this.super()`
// (adica superconstructorul).
// `MasinaDeCurse` va avea o metoda suplimentara numita `participaLaCampionat`, metoda ce va primi un parametru numit `pozitiaInCampionat` (un numar). Metoda va afisa “Am castigat locul ” urmat de valoarea parametrului `pozitiaInCampionat`. Metoda va verifica daca pozitiaInCampionat este un numar mai mare ca 0, iar in cazul in care numarul este mai mic sau egal cu 0, se va afisa mesajul “Nu am castigat niciun premiu”.

// Ex: ```
// const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
// m1.participaLaCampionat(30);
// //Va afisa mesajul: Am castigat locul 30
// m1.participaLaCampionat(-1);
// //Va afisa mesajul: Nu am castigat niciun premiu```

// La final defineste o functie in care sa instantiezi doua masini de curse,
// prima va paricipa la campionat si va castiga locul 2,
// iar a doua nu va participa la campionat(folosind metoda definita).
// De asemenea afiseaza proprietatiile masinilor ca si la exercitiul 1.
//...........................................................................

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
        return `Masina are marca= ${this.#marca}, model= ${
            this.#model
        }, culoare= ${this.#culoare}, kilometraj= ${this.#kilometraj}`;
    }
}

class masinaDeCurse extends masina {

    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj);
    }
      participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
        }
    }

}

const masina1 = new masina("VOLVO", "XC-60", "Negru", "234.000");
const masina2 = new masina("Mazda", "CX-5", "Verde", "111.000");
const masina3 = new masina("Dacia", "BIGGSTER", "Albastru", "20.000");
    
console.log("\n" + "Problema 1 output :");
console.log("\n" + masina1.infomasina() + "\n");
console.log(masina2.infomasina() + "\n");
console.log(masina3.infomasina() + "\n");

const masinaDeCurse1 = new masinaDeCurse("Toyota", "Turbo", "Rosu", "100.000");
const masinaDeCurse2 = new masinaDeCurse("Toyota", "Turbo", "Rosu", "100.000");

console.log("\n" + "Problema 2 output :");
console.log("\n" + masinaDeCurse1.infomasina())
masinaDeCurse1.participaLaCampionat(2 + "\n");
console.log(masinaDeCurse2.infomasina());
masinaDeCurse2.participaLaCampionat(10 + "\n");
