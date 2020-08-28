/* ***********************************************************
                      CLASS
***************************************************************/
class Garage {
    // creazione del costruttore
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    /* ***********************************************************
                            METODI
    ***************************************************************/
    addCarToList(car) {

        // creazione di una ul ad ogni click

        const list = document.querySelector('.list')
        let ul = document.createElement('ul');
        list.appendChild(ul)

        let li = document.createElement('li'); //creazione li
        li.textContent = car.brand; //inserisco il valore dell'input
        ul.appendChild(li)

        let liModello = document.createElement('li');
        liModello.textContent = car.model;
        ul.appendChild(liModello)

        let liColor = document.createElement('li');
        liColor.classList.add('color') //aggiungo la classe 
        liColor.style.backgroundColor = car.color; //aggiungo uno stile al background sulla base del colore della macchina recuperato dalla select
        ul.appendChild(liColor)

        let liClose = document.createElement('li');
        ul.appendChild(liClose);
        let i = document.createElement('i'); //aggiungo l'icona 
        i.className = "fas fa-times-circle close";
        liClose.appendChild(i);
    }

    cleanListCar() {

        // pulizia dei campi input

        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('color').value = '';
    }
}



/* ***********************************************************
                      EVENTI
***************************************************************/

document.getElementById('form').addEventListener('submit', addEvent);
document.querySelector('.list').addEventListener('click', remove);
document.getElementById('search').addEventListener('keyup', searchCar);
document.getElementById('clean').addEventListener('click', cleanAll);
document.getElementById('confirm').addEventListener('click', remove);



/* ***********************************************************
                      CALLBACK
***************************************************************/

function addEvent(e) {

    // al click su 'aggiungi macchina' recupero i valori dell'input

    const brand = document.getElementById('brand').value.toLowerCase();
    const model = document.getElementById('model').value.toLowerCase();
    const color = document.getElementById('color').value;

    //ISTANZIO L'OGGETTO Car recuperando i valori (value) dagli input
    let car = new Garage(brand, model, color);

    //validazione
    // se i campi non sono vuoti: 
    // - AGGIUNGI I VALORI DENTRO LISTA,
    // - PULISCI I CAMPI INPUT
    // - CREA UN MESSAGGIO DI CONFERMA REGISTRAZIONE

    if (brand !== '' && model !== '' && color !== '') {
        car.addCarToList(car); //metodi di class
        car.cleanListCar(); //metodi di class
        const confirm = document.getElementById('confirm');
        confirm.classList.add('active') //aggiungo classe active per mostrare il messaggio

        // creo setTimeout per eliminare da solo il messaggio passati 4 sec
        setTimeout(function () {
            confirm.classList.remove('active')
        }, 4000)
    }
    e.preventDefault()
}


function remove(e) {

    // se l'elemento contiene quella classe elimina il genitore o la classe

    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('x')) {
        e.target.parentElement.classList.remove('active');
    }
}

// creazione di due variabili per:
// -  andare a recuperare e quindi confrontare i valori dell'input di cerca macchina (f) e dei modelli di macchina presenti in CarList (liValue). 
// - rimuovere tutti gli li al click sul pulsante pulisci

let list = document.querySelector('.list');
let ul = list.getElementsByTagName('ul');

function searchCar(e) {
    let f = e.target.value.toLowerCase();
    console.log(f); //valore input di search
    let array = Array.from(ul); // trasformo la collection ul in Array per poterci ciclare e recuperi i singoli valori
    array.forEach(e => {
        let liValue = e.firstChild.textContent;
        console.log(liValue); //  modello di macchina presente nella lista
        console.log(e); // è l'ul

        // se valore dell'input(f) è presente nella lista (liValue) allora mostralo, altrimenti nascondilo

        liValue.includes(f) ? e.style.display = 'grid' : e.style.display = 'none';
    })
}


function cleanAll() {

    // ciclo all'interno dell'ul per rimuovere gli elementi

    Array.from(ul).forEach(e => {
        e.remove();
    })

}
