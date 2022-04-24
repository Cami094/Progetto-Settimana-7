"use strict";
//La seconda variabile d'istanza e' definita come numeroChiamate: number, e rappresenta il numero di chiamate effettuate con
//Tale interfaccia prevede due variabili d'istanza. La prima variabile d'istanza e' definita come carica: number, e rappresenta il quantitativo di euro
class persona {
    constructor(nome, Cognome, eta) {
        this.nome = nome;
        this.cognome = Cognome;
        this.eta = eta;
    }
}
/*Classe User che deve implementare l'interfaccia Smartphone e definire i seguenti metodi*/ class User extends persona {
    constructor(nome, cognome, eta, ricarita, numeroChiamate, phone, n_memoriacellulare) {
        super(nome, cognome, eta);
        this.ricarita = ricarita;
        this.numeroChiamate = numeroChiamate;
        this._phone = phone;
        this.n_memoriacellulare = n_memoriacellulare;
    }
    Dati() {
        let nodoInput1 = document.querySelector('#nome');
        this.nome = nodoInput1.value;
        let nodoInput2 = document.querySelector('#cognome');
        this.cognome = nodoInput2.value;
        let nodoInput3 = document.querySelector('#eta');
        this.eta = Number(nodoInput3.value);
        let nodoInput4 = document.querySelector('#celular');
        this._phone = Number(nodoInput4.value);
    }
    get phone() {
        if (this._phone === 10) {
            return this._phone;
        }
    }
    else() {
        console.log("numero errato");
    }
    info() {
        return `Nome:${this.nome},
    Cognome:${this.cognome},
    Eta:${this.eta},
    Numero:${this.phone}
    Saldo:${this.ricarita}
    Numero di chiamate:${this.numeroChiamate}
    memoria celular:${this.n_memoriacellulare}`;
    }
    /* metodo definito come public ricarica(unaRicarica: number): void, che ricarica il telefonino.*/
    ricarica(unaRicarica) {
        this.ricarita += unaRicarica;
    } //Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino. 
    chiamata(minutiDurata) {
        let costodellachiamata = (minutiDurata + 1) * 0.2;
        if (costodellachiamata > this.ricarita) {
            console.log("tu credito e insufficente");
        }
        else {
            this.ricarita -= costodellachiamata;
            this.numeroChiamate++;
        }
    }
}
/*
Un metodo definito come public chiamata(minutiDurata: number): void, cheeffettua una chiamata di durata in minuti specificata dal parametro esplicito.*/
//Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la memoria contenente il numero di chiamate effettuate dal telefonino. 
//Si assuma un costo di 0.20 euro per ogni minuto di chiamata,
