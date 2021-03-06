/* ***********************************************************
                      CLASS
***************************************************************/
class Garage {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    /* ***********************************************************
                            METODI
    ***************************************************************/
    addCarToList(car) {
        const list = document.querySelector('.list')
        let ul = document.createElement('ul');
        list.appendChild(ul)

        let li = document.createElement('li');
        li.textContent = car.brand;
        ul.appendChild(li)

        let liModello = document.createElement('li');
        liModello.textContent = car.model;
        ul.appendChild(liModello)

        let liColor = document.createElement('li');
        liColor.classList.add('color')
        liColor.style.backgroundColor = car.color;
        ul.appendChild(liColor)

        let liClose = document.createElement('li');
        ul.appendChild(liClose);
        let i = document.createElement('i');
        i.className = "fas fa-times-circle close";
        liClose.appendChild(i);
    }
    cleanListCar() {
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
    const brand = document.getElementById('brand').value.toLowerCase();
    const model = document.getElementById('model').value.toLowerCase();
    const color = document.getElementById('color').value;

    let car = new Garage(brand, model, color);

    if (brand !== '' && model !== '' && color !== '') {
        car.addCarToList(car);
        car.cleanListCar();
        const confirm = document.getElementById('confirm');
        confirm.classList.add('active');

        setTimeout(function () {
            confirm.classList.remove('active')
        }, 4000)
    }
    e.preventDefault()
}

function remove(e) {
    if (e.target.classList.contains('close')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('x')) {
        e.target.parentElement.classList.remove('active');
    }
}

let list = document.querySelector('.list');
let ul = list.getElementsByTagName('ul');
function searchCar(e) {
    let f = e.target.value.toLowerCase();
    let array = Array.from(ul);
    array.forEach(e => {
        let liValue = e.firstChild.textContent;
        liValue.includes(f) ? e.style.display = 'grid' : e.style.display = 'none';
    })
}

function cleanAll() {
    Array.from(ul).forEach(e => {
        e.remove();
    })
}

