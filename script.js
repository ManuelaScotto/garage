class Garage {
    // creo il costruttore
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    // creo i metodi
    // creo li
    addCarToList(car) {
        const list = document.querySelector('.list')
        let ul = document.createElement('ul');
        list.appendChild(ul)

        let li = document.createElement('li');
        li.textContent = car.marca;
        ul.appendChild(li)

        let liModello = document.createElement('li');
        liModello.textContent = car.modello;
        ul.appendChild(liModello)
        let liColor = document.createElement('li');
        liColor.classList.add('color')
        liColor.style.backgroundColor = car.colore;
        ul.appendChild(liColor)
        let liClose = document.createElement('li');
        ul.appendChild(liClose);
        let i = document.createElement('i');
        i.className = "far fa-times-circle close";
        liClose.appendChild(i);
    }

    clearListCar() {
        document.getElementById('marca').value = '';
        document.getElementById('modello').value = '';
        document.getElementById('colore').value = '';
    }
}



function removeCar(e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    }
}

document.getElementById('form').addEventListener('submit', addEvent)
document.querySelector('.list').addEventListener('click', removeCar)
function addEvent(e) {
    const marca = document.getElementById('marca').value;
    const modello = document.getElementById('modello').value;
    const colore = document.getElementById('colore').value;


    //istanzio l'oggetto Car recuperando i valori (value) dagli input
    let car = new Garage(marca, modello, colore);

    //validazione
    if (marca !== '' && modello !== '' && colore !== '') {
        car.addCarToList(car);
        car.clearListCar();
    }

    e.preventDefault()
}

