// Navbar
const menuBtn = document.getElementById('menu');
const menuList = document.querySelector('.navlinks');

menuBtn.addEventListener('click', () => {
    let visibility = menuList.getAttribute('data-visible');
    if (visibility === "false") {
        menuList.setAttribute('data-visible', 'true');
    } else if (visibility === "true") {
        menuList.setAttribute('data-visible', 'false');
    }
});

// List
let listItems = document.querySelector('.listItems');
let addListItem = document.getElementById('add-item');
let listToAdd = document.getElementById('listToAdd');



let labelValue = document.querySelectorAll('.listValue');
let labelCheck = document.querySelectorAll('.addedList');
function check() {
    labelCheck.checked;
}
//toggles the strike


//Removes a list
function removeElement() {
    let allListItems = document.querySelectorAll('.TOdoList');
    allListItems.forEach((value, i) => {
        value.addEventListener('dblclick', () => {
            value.remove();
            saveListItems();
        })
    });
}
let listItemIndex = localStorage.getItem('listItemIndex') || 1;


//Saves StrikeThrough
function allListLabelChecked() {
    let listitems = document.querySelectorAll('.TodoList')
    let allListLabels = document.querySelectorAll('.listValue');
    allListLabels.forEach((value, i) => {
        let a = value.previousSibling;
        a.addEventListener('click', () => {
            let visiblity = value.getAttribute('data-taskcompleted');
            if (a.checked == true || visiblity == true) {
                value.setAttribute('data-taskcompleted', 'true');
                a.setAttribute('data-taskcompleted', 'true');
            } else if (a.checked == false) {
                value.setAttribute('data-taskcompleted', 'false');
                a.setAttribute('data-taskcompleted', 'false');
            }
            saveListItems();
        })
        if (value.getAttribute('data-taskcompleted') == "true") {
            a.checked = true;
        }
    });

}

//saves listitem in localstorage
function saveListItems() {
    localStorage.setItem('listItems', listItems.innerHTML);
}

//renders the list
function loadListItems() {
    if (localStorage.getItem('listItems')) {
        listItems.innerHTML = localStorage.getItem('listItems');
        allListLabelChecked();
        removeElement();
    }
}
addListItem.addEventListener('click', addItem);
listToAdd.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    let listItem = document.createElement('div');
    let checkbox = document.createElement('input');
    let hr = document.createElement('hr');
    let label = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.id = `listItem${listItemIndex}`;
    checkbox.classList.add('addedList');
    label.setAttribute('for', `listItem${listItemIndex}`);
    label.textContent = listToAdd.value;
    listItem.classList.add('TOdoList');
    label.classList.add('listValue');
    label.setAttribute('data-taskcompleted', "false");
    checkbox.setAttribute('data-taskcompleted', "false");

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(hr);
    listItems.appendChild(listItem);
    listItemIndex++;

    listToAdd.value = '';
    removeElement();
    localStorage.setItem('listItemIndex', listItemIndex);
    allListLabelChecked();
    saveListItems();

}

loadListItems();

let btn = document.querySelectorAll('.accordion-trigger');
let content = document.querySelectorAll('.accordian-content');
btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        content[index].classList.toggle('active')
        btn[index].classList.toggle('open')
    })
})


let singUp = document.querySelector('.signup-btn');

singUp.addEventListener(('click'), () => {
    alert('Well a singup button looks cute in a webpage so i added it\nIt doesn\'t Function tho lol :\') lol');
})


let btndelete = document.querySelector('.delete');
//To delete list
btndelete.addEventListener('click', () => {
    let ask = confirm('This will delete the existing list are you sure that you want to delete it!?')
    if (ask) {
        localStorage.removeItem('listItems');
        let items = document.querySelectorAll('.TOdoList');
        items.forEach((value, i) => {
            value.remove();
        })
    } else {
        return;
    }
})