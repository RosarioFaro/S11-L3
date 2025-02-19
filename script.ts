/* ~ . ~ . ~ Esercizio 1 ~ . ~ . ~ */

// string

// number

// boolean

// null

// undefined

// Quelli particolari sono:

// any

// never

// maybe

// void

/* ~ . ~ . ~ Esercizio 2 ~ . ~ . ~ */

let firstName: string = "Rosario";
let age: number = 26;
let studying: boolean = true;

/* ~ . ~ . ~ Esercizio 3 ~ . ~ . ~ */

const greet = (name: string) => {
  return "Ciao " + name;
};

/* ~ . ~ . ~ Esercizio 4 ~ . ~ . ~ */

const sum = (a: number, b: number): number => {
  return a + b;
};

/* ~ . ~ . ~ Esercizio 5 ~ . ~ . ~ */

const calcolaPrezzoConIVA = (prezzo: number): number => {
  const IVA = 0.22;
  return prezzo * (1 + IVA);
};

/* ~ . ~ . ~ Esercizio 6 ~ . ~ . ~ */

const stringLength = (str1: string, str2: string): number => {
  const concString = str1 + str2;
  return concString.length;
};

console.log(stringLength("Pietro", "Ubaldi"));

/* ~ . ~ . ~ Esercizio 7 ~ . ~ . ~ */

let value: string | number;

value = "Rin";
value = 37;

/* ~ . ~ . ~ Esercizio 8 ~ . ~ . ~ */

let valore: number | null | undefined;

valore = 42;
valore = null;
valore = undefined;

/* ~ . ~ . ~ Esercizio 9 ~ . ~ . ~ */

type DaysOfTheWeek = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

let today: DaysOfTheWeek;

today = "Giovedì";
today = "Domenica";

/* ~ . ~ . ~ Esercizio 10 ~ . ~ . ~ */

const numbers: number[] = [1, 2, 3];
const numeri: Array<number> = [1, 2, 3];

/* ~ . ~ . ~ Esercizio 11 ~ . ~ . ~ */

const dati: [string, string, string, number, number] = ["Pino", "Zurkon", "Tin Tin", 35, 90];

/* ~ . ~ . ~ Esercizio 12 ~ . ~ . ~ */

/* ~ . ~ . ~ Esercizio 13 ~ . ~ . ~ */

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

const Person: User = {
  firstname: "Franco",
  lastname: "Forte",
  age: 26,
};

/* ~ . ~ . ~ Esercizio 14 ~ . ~ . ~ */

interface Utente {
  email: string;
  telefono?: string;
}

/* ~ . ~ . ~ Esercizio 15 ~ . ~ . ~ */

type Student = {
  name: string;
  grade: number;
};

const studenti: Student[] = [
  { name: "Sandokan", grade: 9 },
  { name: "Lucrezia", grade: 8 },
  { name: "Piero", grade: 6 },
];

/* ~ . ~ . ~ Esercizio 16 ~ . ~ . ~ */

interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

interface Auto extends Veicolo {
  numeroDiPortiere: number;
  tipoCarburante: "benzina" | "diesel" | "elettrica" | "ibrida";
}

/* ~ . ~ . ~ Esercizio 17 ~ . ~ . ~ */

const auto: Auto = {
  marca: "Tesla",
  modello: "Model 3",
  anno: 2023,
  numeroDiPortiere: 4,
  tipoCarburante: "elettrica",
};

/* ~ . ~ . ~ Esercizio 18 ~ . ~ . ~ */
// I Generics consentono di scrivere funzioni, classi e interfacce in modo più
// libero
/* ~ . ~ . ~ Esercizio 19 ~ . ~ . ~ */
// Sì

/* ~ . ~ . ~ Esercizio 20 ~ . ~ . ~ */

interface ApiResponse<T> {
  data: T;
}
